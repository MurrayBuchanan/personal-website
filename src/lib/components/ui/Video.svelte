<script lang="ts">
    import { onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    export let src: string;
    export let title = 'Video';
    export let poster = '';
    export let caption = '';

    let youtubePlaying = false;
    let previousSrc = '';

    function getYouTubeId(url: string): string | null {
        try {
            const parsed = new URL(url);
            const host = parsed.hostname.replace(/^www\./, '');
            if (host === 'youtu.be') {
                return parsed.pathname.split('/').filter(Boolean)[0] ?? null;
            }
            if (
                host === 'youtube.com' ||
                host === 'm.youtube.com' ||
                host === 'music.youtube.com' ||
                host === 'youtube-nocookie.com'
            ) {
                if (parsed.pathname.startsWith('/embed/')) {
                    return parsed.pathname.split('/')[2] ?? null;
                }
                if (parsed.pathname.startsWith('/shorts/') || parsed.pathname.startsWith('/live/')) {
                    return parsed.pathname.split('/')[2] ?? null;
                }
                return parsed.searchParams.get('v');
            }
        } catch {
            return null;
        }
        return null;
    }

    $: youtubeId = getYouTubeId(src);
    $: youtubePoster =
        poster || (youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : '');
    $: youtubeEmbed = youtubeId
        ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
        : '';
    $: if (src !== previousSrc) {
        previousSrc = src;
        youtubePlaying = false;
    }

    let playerEl: HTMLDivElement;
    let videoEl: HTMLVideoElement;
    let trackEl: HTMLDivElement;

    let paused = true;
    let muted = false;
    let volume = 1;
    let currentTime = 0;
    let duration = 0;
    let ended = false;
    let buffering = false;
    let idle = false;
    let fullscreen = false;
    let seeking = false;
    let buffered = 0;
    let hoverRatio = 0;
    let trackHovering = false;
    let suppressClick = false;
    let controlsHovering = false;
    let hasPlayed = false;
    let volumeTrackEl: HTMLDivElement;

    let idleTimer: ReturnType<typeof setTimeout> | undefined;

    const IDLE_MS = 2500;

    $: played = duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;
    $: showChrome = hasPlayed && (!idle || seeking || controlsHovering);
    $: hoverTime = (trackHovering || seeking ? hoverRatio : played) * (duration || 0);

    function formatTime(seconds: number) {
        if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
        const total = Math.floor(seconds);
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const secs = total % 60;
        if (hours > 0) {
            return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
        return `${minutes}:${String(secs).padStart(2, '0')}`;
    }

    function scheduleIdle() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            if (seeking || controlsHovering) {
                scheduleIdle();
                return;
            }
            idle = true;
        }, IDLE_MS);
    }

    function wake() {
        idle = false;
        scheduleIdle();
    }

    function sleep() {
        if (seeking) return;
        idle = true;
        clearTimeout(idleTimer);
    }

    function togglePlay() {
        if (!videoEl) return;
        wake();
        if (ended) {
            videoEl.currentTime = 0;
            ended = false;
        }
        if (videoEl.paused) {
            hasPlayed = true;
            videoEl.muted = muted;
            videoEl.volume = volume;
            const play = videoEl.play();
            if (play) {
                play.catch(() => {
                    hasPlayed = false;
                    paused = true;
                });
            }
        } else {
            videoEl.pause();
        }
    }

    function toggleMute() {
        wake();
        if (muted && volume === 0) volume = 1;
        muted = !muted;
        if (videoEl) videoEl.muted = muted;
    }

    function setVolumeFromClientY(clientY: number) {
        if (!volumeTrackEl) return;
        const rect = volumeTrackEl.getBoundingClientRect();
        const next = Math.min(1, Math.max(0, (rect.bottom - clientY) / rect.height));
        volume = next;
        muted = next === 0;
        if (videoEl) {
            videoEl.volume = next;
            videoEl.muted = muted;
        }
    }

    function onVolumePointerDown(event: PointerEvent) {
        if (event.button !== 0 || !volumeTrackEl) return;
        event.preventDefault();
        wake();
        setVolumeFromClientY(event.clientY);
        volumeTrackEl.setPointerCapture(event.pointerId);
    }

    function onVolumePointerMove(event: PointerEvent) {
        if (!volumeTrackEl?.hasPointerCapture(event.pointerId)) return;
        setVolumeFromClientY(event.clientY);
    }

    function onVolumePointerUp(event: PointerEvent) {
        if (!volumeTrackEl?.hasPointerCapture(event.pointerId)) return;
        setVolumeFromClientY(event.clientY);
        volumeTrackEl.releasePointerCapture(event.pointerId);
    }

    function ratioFromClientX(clientX: number) {
        if (!trackEl) return 0;
        const rect = trackEl.getBoundingClientRect();
        if (!rect.width) return 0;
        return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    }

    function seekToRatio(ratio: number) {
        hoverRatio = ratio;
        const length = Number.isFinite(duration) ? duration : 0;
        if (length <= 0) return;
        const time = ratio * length;
        currentTime = time;
        ended = false;
        if (videoEl) videoEl.currentTime = time;
    }

    function stopSeeking(event: PointerEvent) {
        if (!seeking) return;
        seekToRatio(ratioFromClientX(event.clientX));
        seeking = false;
        trackHovering = trackEl?.matches(':hover') ?? false;
        try {
            trackEl?.releasePointerCapture(event.pointerId);
        } catch {
            // Capture may already have been released.
        }
        window.removeEventListener('pointermove', onWindowSeekMove);
        window.removeEventListener('pointerup', onWindowSeekUp);
        window.removeEventListener('pointercancel', onWindowSeekUp);
        suppressClick = true;
        requestAnimationFrame(() => {
            suppressClick = false;
        });
        wake();
    }

    function onWindowSeekMove(event: PointerEvent) {
        if (!seeking) return;
        event.preventDefault();
        seekToRatio(ratioFromClientX(event.clientX));
    }

    function onWindowSeekUp(event: PointerEvent) {
        stopSeeking(event);
    }

    function onTrackPointerDown(event: PointerEvent) {
        if (event.button !== 0 || !trackEl) return;
        event.preventDefault();
        event.stopPropagation();
        seeking = true;
        trackHovering = true;
        wake();
        seekToRatio(ratioFromClientX(event.clientX));
        try {
            trackEl.setPointerCapture(event.pointerId);
        } catch {
            // Pointer capture is unavailable on some browsers; window listeners still seek.
        }
        window.addEventListener('pointermove', onWindowSeekMove);
        window.addEventListener('pointerup', onWindowSeekUp);
        window.addEventListener('pointercancel', onWindowSeekUp);
    }

    function onTrackPointerMove(event: PointerEvent) {
        if (seeking) return;
        hoverRatio = ratioFromClientX(event.clientX);
        trackHovering = true;
    }

    function onTrackPointerLeave() {
        if (!seeking) trackHovering = false;
    }

    function onTimeUpdate() {
        if (seeking || !videoEl) return;
        currentTime = videoEl.currentTime;
    }

    function updateBuffered() {
        if (!videoEl || !duration) {
            buffered = 0;
            return;
        }
        const ranges = videoEl.buffered;
        if (!ranges.length) {
            buffered = 0;
            return;
        }
        buffered = Math.min(1, ranges.end(ranges.length - 1) / duration);
    }

    function showFirstFrame() {
        updateBuffered();
        if (poster) return;
        if (videoEl && paused && currentTime < 0.05) {
            videoEl.currentTime = 0.05;
        }
    }

    function getFullscreenElement() {
        const doc = document as Document & { webkitFullscreenElement?: Element | null };
        return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
    }

    async function toggleFullscreen() {
        wake();
        const doc = document as Document & {
            webkitFullscreenElement?: Element | null;
            webkitExitFullscreen?: () => Promise<void> | void;
        };
        const root = playerEl as HTMLDivElement & {
            webkitRequestFullscreen?: () => Promise<void> | void;
        };
        try {
            if (getFullscreenElement()) {
                if (doc.exitFullscreen) {
                    await doc.exitFullscreen();
                } else {
                    await doc.webkitExitFullscreen?.();
                }
                return;
            }
            if (root.requestFullscreen) {
                await root.requestFullscreen();
                return;
            }
            await root.webkitRequestFullscreen?.();
        } catch {
            // Fullscreen can be rejected without a user gesture or on unsupported browsers.
        }
    }

    function onFullscreenChange() {
        fullscreen = getFullscreenElement() === playerEl;
    }

    function onPlayerClick(event: MouseEvent) {
        if (suppressClick || seeking) return;
        const target = event.target as HTMLElement | null;
        if (target?.closest('[data-video-controls], [data-video-play]')) return;
        togglePlay();
    }

    function onKeyDown(event: KeyboardEvent) {
        if (event.metaKey || event.altKey || event.ctrlKey) return;
        if (event.target instanceof HTMLElement && event.target.closest('[aria-disabled="true"]')) {
            return;
        }

        const key = event.key;
        const seek = (delta: number) => {
            if (!duration) return;
            currentTime = Math.min(duration, Math.max(0, currentTime + delta));
        };

        switch (key) {
            case ' ':
            case 'k':
            case 'K':
                event.preventDefault();
                togglePlay();
                break;
            case 'm':
            case 'M':
                event.preventDefault();
                toggleMute();
                break;
            case 'f':
            case 'F':
                event.preventDefault();
                toggleFullscreen();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                seek(-5);
                wake();
                break;
            case 'ArrowRight':
                event.preventDefault();
                seek(5);
                wake();
                break;
            case 'j':
            case 'J':
                event.preventDefault();
                seek(-10);
                wake();
                break;
            case 'l':
            case 'L':
                event.preventDefault();
                seek(10);
                wake();
                break;
            case 'Home':
                event.preventDefault();
                currentTime = 0;
                wake();
                break;
            case 'End':
                event.preventDefault();
                currentTime = duration;
                wake();
                break;
            default:
                break;
        }
    }

    function onPlayerMount(_node: HTMLDivElement) {
        document.addEventListener('fullscreenchange', onFullscreenChange);
        document.addEventListener('webkitfullscreenchange', onFullscreenChange);
        scheduleIdle();
        return {
            destroy() {
                document.removeEventListener('fullscreenchange', onFullscreenChange);
                document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
                clearTimeout(idleTimer);
            },
        };
    }

    onDestroy(() => {
        clearTimeout(idleTimer);
        if (!browser) return;
        window.removeEventListener('pointermove', onWindowSeekMove);
        window.removeEventListener('pointerup', onWindowSeekUp);
        window.removeEventListener('pointercancel', onWindowSeekUp);
    });

    const glassButton =
        'inline-flex h-8 shrink-0 items-center justify-center rounded-lg px-3 text-white transition-[background-color,backdrop-filter,box-shadow] duration-150 ease-out hover:bg-white/[0.16] hover:backdrop-blur-[8px] focus-visible:bg-white/[0.16] focus-visible:backdrop-blur-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40';
</script>

{#if youtubeId}
    <div
        class="player animate relative w-full overflow-hidden rounded-2xl bg-neutral-950 ring-1 ring-neutral-900/[0.06] dark:ring-white/[0.08]"
        role="region"
        aria-label={title}
    >
        <div class="player-frame relative aspect-video w-full overflow-hidden bg-black">
            {#if youtubePlaying}
                <iframe
                    class="absolute inset-0 h-full w-full border-0"
                    src={youtubeEmbed}
                    {title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            {:else}
                <button
                    type="button"
                    class="yt-facade"
                    aria-label="Play {title}"
                    on:click={() => (youtubePlaying = true)}
                >
                    <img
                        class="yt-thumb"
                        src={youtubePoster}
                        alt=""
                        draggable="false"
                    />
                    <span class="yt-play-layer">
                        <span class="yt-play">
                            <svg viewBox="0 0 68 48" width="54" height="38" aria-hidden="true">
                                <path
                                    d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                                    fill="#EA4335"
                                />
                                <path d="M45 24 27 14v20" fill="#fff" />
                            </svg>
                        </span>
                    </span>
                    {#if title || caption}
                        <span class="yt-info">
                            {#if title}
                                <span class="yt-info-title">{title}</span>
                            {/if}
                            {#if caption}
                                <span class="yt-info-meta">{caption}</span>
                            {/if}
                        </span>
                    {/if}
                </button>
            {/if}
        </div>
    </div>
{:else}
<!-- svelte-ignore a11y-no-noninteractive-tabindex a11y-no-noninteractive-element-interactions -->
<div
    bind:this={playerEl}
    use:onPlayerMount
    class="player animate group/video relative w-full overflow-hidden bg-neutral-950 outline-none ring-1 ring-neutral-900/[0.06] dark:ring-white/[0.08] {fullscreen
        ? 'rounded-none ring-0'
        : 'rounded-2xl'}"
    class:is-fullscreen={fullscreen}
    data-idle={idle}
    data-status={ended ? 'ended' : paused ? 'paused' : 'playing'}
    role="region"
    aria-label={title}
    tabindex="0"
    on:pointermove={wake}
    on:pointerdown={wake}
    on:pointerleave={sleep}
    on:keydown={onKeyDown}
    on:focus={wake}
    on:click={onPlayerClick}
>
    <div class="player-frame relative w-full overflow-hidden">
        <video
            bind:this={videoEl}
            class="player-video block aspect-video h-auto w-full bg-black object-cover"
            {src}
            {title}
            poster={poster || undefined}
            playsinline
            preload="metadata"
            controlslist="nodownload nofullscreen noremoteplayback"
            disablepictureinpicture
            bind:paused
            bind:muted
            bind:volume
            bind:duration
            bind:ended
            on:timeupdate={onTimeUpdate}
            on:waiting={() => (buffering = true)}
            on:playing={() => {
                buffering = false;
                hasPlayed = true;
            }}
            on:pause={() => (buffering = false)}
            on:canplay={() => (buffering = false)}
            on:progress={updateBuffered}
            on:loadedmetadata={updateBuffered}
            on:loadeddata={showFirstFrame}
        >
            <track kind="captions" srclang="en" label="English" />
        </video>

        {#if !hasPlayed}
            <button type="button" data-video-play class="play-cta" aria-label="Play" on:click={togglePlay}>
                <svg viewBox="0 0 24 24" class="play-cta-icon" fill="currentColor" aria-hidden="true">
                    <path d="M8 5.14v13.72L19 12 8 5.14Z" />
                </svg>
            </button>
        {/if}

        {#if hasPlayed}
        <div
            class="pointer-events-none absolute inset-0 transition-[opacity,transform] duration-300 ease-out {showChrome
                ? 'opacity-100'
                : 'opacity-0'}"
            data-video-chrome
        >
            <div
                class="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.28)_40px,rgba(0,0,0,0.08)_90px,transparent_120px)]"
            />
        </div>

        <div
            data-video-controls
            class="absolute inset-x-0 bottom-2.5 z-10 flex items-center gap-1.5 px-3 transition-[opacity,transform] duration-300 ease-out sm:bottom-4 sm:gap-3 sm:px-5 {showChrome
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-4 opacity-0 motion-reduce:translate-y-0'}"
            on:pointerenter={() => {
                controlsHovering = true;
                wake();
            }}
            on:pointerleave={() => {
                controlsHovering = false;
                scheduleIdle();
            }}
        >
            <button
                type="button"
                class={glassButton}
                aria-label={ended ? 'Replay' : paused ? 'Play' : 'Pause'}
                on:click={togglePlay}
            >
                {#if buffering && !paused}
                    <span
                        class="h-4 w-4 animate-spin rounded-full border-[1.5px] border-white/30 border-t-white"
                        aria-hidden="true"
                    />
                {:else if ended}
                    <svg viewBox="0 0 16 16" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path
                            d="M8 1.5a6.5 6.5 0 1 0 6.32 8.05.75.75 0 0 0-1.46-.3A5 5 0 1 1 8 3v1.75a.75.75 0 0 0 1.2.6l2.5-1.88a.75.75 0 0 0 0-1.2L9.2 1.4A.75.75 0 0 0 8 2V1.5Z"
                        />
                    </svg>
                {:else if paused}
                    <svg viewBox="0 0 16 16" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path
                            d="m5.604 2.41 7.23 4.502a1.375 1.375 0 0 1-.02 2.345L5.585 13.6a1.375 1.375 0 0 1-2.083-1.18V3.576A1.375 1.375 0 0 1 5.604 2.41Z"
                        />
                    </svg>
                {:else}
                    <svg viewBox="0 0 16 16" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <rect x="3.25" y="2.5" width="3" height="11" rx="0.9" />
                        <rect x="9.75" y="2.5" width="3" height="11" rx="0.9" />
                    </svg>
                {/if}
            </button>

            <div class="sound-wrap relative" data-sound>
                <button
                    type="button"
                    class={glassButton}
                    aria-label={muted || volume === 0 ? 'Unmute' : 'Mute'}
                    aria-pressed={muted || volume === 0}
                    on:click={toggleMute}
                >
                    {#if muted || volume === 0}
                        <svg viewBox="0 0 16 16" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                            <path
                                d="M8.2 2.3a.75.75 0 0 1 .3.6v10.2a.75.75 0 0 1-1.22.58L4.4 11.1H2.25A1.25 1.25 0 0 1 1 9.85v-3.7C1 5.47 1.56 4.9 2.25 4.9H4.4l2.88-2.58A.75.75 0 0 1 8.2 2.3Zm3.04 3.16 1.51 1.51 1.51-1.51a.75.75 0 1 1 1.06 1.06L13.81 8l1.51 1.51a.75.75 0 1 1-1.06 1.06L12.75 9.06l-1.51 1.51a.75.75 0 1 1-1.06-1.06L11.69 8l-1.51-1.51a.75.75 0 0 1 1.06-1.06Z"
                            />
                        </svg>
                    {:else}
                        <svg viewBox="0 0 16 16" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                            <path
                                d="M8.2 2.3a.75.75 0 0 1 .3.6v10.2a.75.75 0 0 1-1.22.58L4.4 11.1H2.25A1.25 1.25 0 0 1 1 9.85v-3.7C1 5.47 1.56 4.9 2.25 4.9H4.4l2.88-2.58A.75.75 0 0 1 8.2 2.3ZM11.6 5.22a.75.75 0 0 1 1.06.02 4.25 4.25 0 0 1 0 5.52.75.75 0 1 1-1.08-1.04 2.75 2.75 0 0 0 0-3.44.75.75 0 0 1 .02-1.06Z"
                            />
                        </svg>
                    {/if}
                </button>

                <div
                    class="volume-pop absolute bottom-[calc(100%+8px)] left-1/2 z-20 w-8 -translate-x-1/2 justify-center rounded-lg py-3"
                    aria-hidden="true"
                >
                    <div class="pointer-events-none absolute inset-0 rounded-lg bg-white/[0.16] backdrop-blur-[8px]" />
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        bind:this={volumeTrackEl}
                        class="relative h-14 w-1 cursor-pointer rounded-full bg-white/[0.16]"
                        on:pointerdown={onVolumePointerDown}
                        on:pointermove={onVolumePointerMove}
                        on:pointerup={onVolumePointerUp}
                        on:pointercancel={onVolumePointerUp}
                    >
                        <div
                            class="absolute inset-x-0 bottom-0 rounded-full bg-white"
                            style="height: {(muted ? 0 : volume) * 100}%"
                        />
                        <div
                            class="pointer-events-none absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white"
                            style="bottom: calc({(muted ? 0 : volume) * 100}% - 4px)"
                        />
                    </div>
                </div>
            </div>

            <div class="timeline">
                <span class="time time-current">
                    {formatTime(currentTime)}
                </span>

                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <div
                    bind:this={trackEl}
                    class="progress"
                    class:is-active={seeking}
                    class:is-hovering={trackHovering}
                    role="slider"
                    aria-label="Seek"
                    aria-valuemin={0}
                    aria-valuemax={Math.round(duration) || 0}
                    aria-valuenow={Math.round(currentTime)}
                    aria-valuetext={formatTime(currentTime)}
                    tabindex="0"
                    style="--played: {played * 100}; --buffered: {buffered * 100}; --hover: {(trackHovering || seeking ? hoverRatio : played) * 100}"
                    on:pointerdown={onTrackPointerDown}
                    on:pointermove={onTrackPointerMove}
                    on:pointerleave={onTrackPointerLeave}
                >
                    <div class="progress-track">
                        <div class="progress-mask">
                            <div class="progress-range progress-buffered" />
                            <div class="progress-range progress-played" />
                        </div>
                    </div>
                    <div class="progress-preview" aria-hidden="true" />
                    <div class="progress-timestamp" aria-hidden="true">
                        <span class="progress-timestamp-now">{formatTime(hoverTime)}</span>
                        <span class="progress-timestamp-rest">&nbsp;/&nbsp;{formatTime(duration)}</span>
                    </div>
                </div>

                <span class="time time-duration">
                    {formatTime(duration)}
                </span>
            </div>

            <button
                type="button"
                class="{glassButton} hidden sm:inline-flex"
                aria-label={fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                on:click={toggleFullscreen}
            >
                {#if fullscreen}
                    <svg viewBox="0 0 16 16" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                        <path d="M6 3.5H3.5V6M10 3.5h2.5V6M6 12.5H3.5V10M10 12.5h2.5V10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                {:else}
                    <svg viewBox="0 0 16 16" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                        <path d="M3.5 6V3.5H6M12.5 6V3.5H10M3.5 10v2.5H6M12.5 10v2.5H10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                {/if}
            </button>
        </div>
        {/if}
    </div>
</div>
{/if}

<style>
    video::-webkit-media-controls-enclosure,
    video::-webkit-media-controls {
        display: none !important;
    }

    .player,
    .player:focus,
    .player:focus-visible {
        outline: none;
    }

    .play-cta {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 10;
        display: flex;
        width: 56px;
        height: 56px;
        align-items: center;
        justify-content: center;
        padding: 0;
        transform: translate(-50%, -50%);
        border: none;
        background: transparent;
        color: #fff;
        cursor: pointer;
        filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.45));
        transition: opacity 0.16s ease, transform 0.16s ease;
    }

    .play-cta:hover {
        opacity: 0.85;
    }

    .play-cta:active {
        transform: translate(-50%, -50%) scale(0.96);
    }

    .play-cta:focus-visible {
        outline: 2px solid rgba(255, 255, 255, 0.7);
        outline-offset: 4px;
    }

    .play-cta-icon {
        width: 36px;
        height: 36px;
        margin-left: 3px;
    }

    .yt-facade {
        position: absolute;
        inset: 0;
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        border: none;
        overflow: hidden;
        background: #0f172a;
        cursor: pointer;
        appearance: none;
        text-align: inherit;
    }

    .yt-thumb {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.92;
        transition:
            transform 240ms cubic-bezier(0.22, 0.61, 0.36, 1),
            opacity 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .yt-facade:hover .yt-thumb,
    .yt-facade:focus-visible .yt-thumb {
        transform: scale(1.012);
        opacity: 1;
    }

    .yt-play-layer {
        position: absolute;
        inset: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(15, 23, 42, 0.18);
        pointer-events: none;
    }

    .yt-play {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        opacity: 0.9;
        filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
        transition:
            opacity 160ms cubic-bezier(0.22, 0.61, 0.36, 1),
            transform 160ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .yt-play svg {
        display: block;
    }

    .yt-facade:hover .yt-play,
    .yt-facade:focus-visible .yt-play {
        opacity: 1;
        transform: scale(1.03);
    }

    .yt-facade:focus-visible {
        outline: 2px solid rgba(255, 255, 255, 0.7);
        outline-offset: -4px;
    }

    .yt-info {
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 16px 24px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
        text-align: left;
        pointer-events: none;
    }

    .yt-info-title {
        color: #fff;
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1.3;
    }

    .yt-info-meta {
        color: rgba(255, 255, 255, 0.65);
        font-size: 0.78rem;
        line-height: 1.3;
    }

    @media (prefers-reduced-motion: reduce) {
        .yt-thumb,
        .yt-play {
            transition: none;
        }

        .yt-facade:hover .yt-thumb,
        .yt-facade:focus-visible .yt-thumb {
            transform: none;
        }

        .yt-facade:hover .yt-play,
        .yt-facade:focus-visible .yt-play {
            transform: none;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .play-cta {
            transition: none;
        }

        .play-cta:active {
            transform: translate(-50%, -50%);
        }
    }

    .player:fullscreen,
    .player:-webkit-full-screen {
        width: 100%;
        height: 100%;
        max-width: none;
        max-height: none;
        border-radius: 0;
        background: #000;
        box-shadow: none;
        outline: none;
    }

    .player:fullscreen .player-frame,
    .player:-webkit-full-screen .player-frame {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background: #000;
        border-radius: 0;
    }

    .player:fullscreen .player-video,
    .player:-webkit-full-screen .player-video {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        aspect-ratio: auto;
        object-fit: contain;
        background: #000;
    }

    .volume-pop {
        display: none;
        pointer-events: none;
    }

    .volume-pop::before {
        content: '';
        position: absolute;
        inset: -8px -8px -12px;
    }

    @media (any-hover: hover) {
        .sound-wrap:hover .volume-pop,
        .sound-wrap:focus-within .volume-pop,
        .volume-pop:hover {
            display: flex;
            pointer-events: auto;
        }
    }

    .timeline {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1 1 0%;
        min-width: 0;
    }

    .time {
        flex: none;
        min-width: 2.25rem;
        user-select: none;
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        color: #fff;
    }

    .time-current {
        text-align: right;
    }

    .progress {
        --track-size: 4px;
        position: relative;
        flex: 1 1 0%;
        min-width: 0;
        height: var(--track-size);
        cursor: pointer;
        touch-action: none;
        user-select: none;
    }

    .progress::before {
        content: '';
        position: absolute;
        inset: -24px -8px;
    }

    .progress-track {
        height: var(--track-size);
        border-radius: 999px;
        background: #ffffff29;
        transition: height 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .progress.is-hovering .progress-track,
    .progress.is-active .progress-track,
    .progress:active .progress-track {
        height: 7px;
    }

    .progress-mask {
        pointer-events: none;
        position: relative;
        height: 100%;
        overflow: hidden;
        border-radius: inherit;
    }

    .progress-range {
        pointer-events: none;
        position: absolute;
        inset-block: 0;
        border-radius: inherit;
    }

    .progress-buffered {
        background: #fff;
        opacity: 0.16;
        left: 0;
        right: calc(100% - var(--buffered, 0) * 1%);
    }

    .progress-played {
        background: #fff;
        left: 0;
        right: calc(100% - var(--played, 0) * 1%);
    }

    .progress-preview {
        pointer-events: none;
        position: absolute;
        width: 1px;
        inset-block: -16px;
        left: calc(var(--hover, 0) * 1%);
        border-radius: 999px;
        background: #ffffff7a;
        opacity: 0;
        transition: opacity 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .progress.is-hovering .progress-preview,
    .progress.is-active .progress-preview {
        opacity: 1;
    }

    .progress.is-active .progress-preview {
        background: #fff;
    }

    .progress-timestamp {
        pointer-events: none;
        position: absolute;
        left: calc(var(--hover, 0) * 1%);
        bottom: calc(100% + 16px);
        display: flex;
        width: max-content;
        height: 16px;
        align-items: center;
        transform: translateX(-50%);
        font-size: 11px;
        font-weight: 500;
        font-variant-numeric: tabular-nums;
        line-height: 16px;
        color: #fff;
        opacity: 0;
        transition: opacity 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        white-space: nowrap;
    }

    .progress-timestamp-rest {
        color: rgba(255, 255, 255, 0.48);
    }

    .progress.is-hovering .progress-timestamp,
    .progress.is-active .progress-timestamp {
        opacity: 1;
    }

    @media (max-width: 640px) {
        .progress-preview {
            display: none;
        }

        .progress-timestamp {
            bottom: calc(100% + 12px);
        }
    }
</style>
