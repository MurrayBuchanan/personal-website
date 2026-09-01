<script lang="ts">
    import type { ContentImage } from '$lib/types';

    export let images: ContentImage[] = [];
    export let title = 'Photos';
    export let emphasis = 2;
</script>

{#if images.length > 0}
    <figure
        class="collage animate relative w-full overflow-hidden bg-neutral-950 ring-1 ring-black/[0.08] dark:ring-white/[0.08] {images.length ===
        5
            ? 'is-mosaic'
            : 'is-grid'}"
        aria-label={title}
    >
        {#each images as image, index (image.src)}
            {@const isHero = index === emphasis}
            <div
                class="cell"
                class:is-hero={isHero}
                data-index={index}
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    loading={isHero ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable="false"
                    style={image.objectPosition
                        ? `object-position: ${image.objectPosition}`
                        : undefined}
                />
            </div>
        {/each}
    </figure>
{/if}

<style>
    .collage {
        display: grid;
        gap: 3px;
        border-radius: 1rem;
    }

    .collage.is-mosaic {
        grid-template-columns: repeat(6, minmax(0, 1fr));
        grid-template-rows: 1.55fr 0.72fr;
        aspect-ratio: 8 / 5;
    }

    .collage.is-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        aspect-ratio: 4 / 3;
    }

    .cell {
        position: relative;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
        background: #0f1011;
    }

    .cell img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transform: scale(1.001);
        transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }

    @media (any-hover: hover) {
        .cell:hover img {
            transform: scale(1.045);
        }

        .cell.is-hero:hover img {
            transform: scale(1.03);
        }
    }

    .collage.is-mosaic .cell[data-index='2'] {
        grid-column: 1 / 5;
        grid-row: 1;
    }

    .collage.is-mosaic .cell[data-index='3'] {
        grid-column: 5 / 7;
        grid-row: 1;
    }

    .collage.is-mosaic .cell[data-index='0'] {
        grid-column: 1 / 3;
        grid-row: 2;
    }

    .collage.is-mosaic .cell[data-index='1'] {
        grid-column: 3 / 5;
        grid-row: 2;
    }

    .collage.is-mosaic .cell[data-index='4'] {
        grid-column: 5 / 7;
        grid-row: 2;
    }

    .collage.is-grid .cell.is-hero {
        grid-column: 1 / -1;
    }

    @media (max-width: 639px) {
        .collage.is-mosaic {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            aspect-ratio: auto;
        }

        .collage.is-mosaic .cell[data-index='2'] {
            grid-column: 1 / -1;
            grid-row: 1;
            aspect-ratio: 3 / 2;
        }

        .collage.is-mosaic .cell[data-index='0'],
        .collage.is-mosaic .cell[data-index='1'],
        .collage.is-mosaic .cell[data-index='3'],
        .collage.is-mosaic .cell[data-index='4'] {
            aspect-ratio: 4 / 3;
        }

        .collage.is-mosaic .cell[data-index='0'] {
            grid-column: 1;
            grid-row: 2;
        }

        .collage.is-mosaic .cell[data-index='1'] {
            grid-column: 2;
            grid-row: 2;
        }

        .collage.is-mosaic .cell[data-index='3'] {
            grid-column: 1;
            grid-row: 3;
        }

        .collage.is-mosaic .cell[data-index='4'] {
            grid-column: 2;
            grid-row: 3;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .cell img {
            transition: none;
        }

        .cell:hover img,
        .cell.is-hero:hover img {
            transform: none;
        }
    }
</style>
