<script lang="ts">
    import TextSection from './section-text.svelte';
    import { onMount } from 'svelte';

    export let image: string = "";
    export let title: string = "";
    export let desc: string = "";
    export let custom: string = "text-center";

    let isLoading = true;
    let hasError = false;

    // Reset state if image changes
    $: if (image) {
        isLoading = true;
        hasError = false;
    }

    function handleImageLoad() {
        isLoading = false;
    }

    function handleImageError() {
        isLoading = false;
        hasError = true;
    }
</script>

<main class="pt-2 animate">
    <div class="w-full overflow-hidden pb-6">
        {#if isLoading}
            <div class="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse flex items-center justify-center">
                <div class="text-gray-400 dark:text-gray-500" aria-live="polite">Loading image...</div>
            </div>
        {:else if hasError}
            <div class="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                <div class="text-gray-500 dark:text-gray-400" aria-live="assertive">Failed to load image</div>
            </div>
        {:else}
        <img src={image} alt={title ? `Preview of ${title}` : 'Image preview'} />
            <!-- <img
                src={image}
                alt={title ? `Preview of ${title}` : 'Image preview'}
                class="w-full h-auto object-contain rounded-3xl"
                on:load={handleImageLoad}
                on:error={handleImageError}
                draggable="false"
                loading="lazy"
                aria-label={title ? `Preview of ${title}` : 'Image preview'}
            /> -->
        {/if}
    </div>
    <TextSection {title} {desc} {custom} />
</main>