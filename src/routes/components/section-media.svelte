<script>
    import TextSection from './section-text.svelte';

    /**
     * @type {any[]}
     */
    export let images = [];
    export let title = "";
    export let desc = "";
    export let custom = "text-center";
</script>

<main class="pt-2 pb-6 animate">
    {#if images.length === 1}
        <div class="w-full overflow-hidden pb-6">
            <img src="{images[0]}" alt="Preview of {title}" class="w-full h-auto object-contain rounded-3xl" />
        </div>
    {:else if images.length === 2}
        <div class="grid grid-cols-2 gap-4 pb-6">
            {#each images as image}
                <img src="{image}" alt="Preview of {title}" class="w-full h-auto object-contain rounded-3xl" />
            {/each}
        </div>
    {:else if images.length === 3}
        <div class="grid grid-cols-2 gap-4 pb-6">
            <img src="{images[0]}" alt="Preview of {title}" class="w-full h-auto object-contain rounded-3xl col-span-2" />
            <img src="{images[1]}" alt="Preview of {title}" class="w-full h-auto object-contain rounded-3xl" />
            <img src="{images[2]}" alt="Preview of {title}" class="w-full h-auto object-contain rounded-3xl" />
        </div>
    {:else if images.length >= 4}
        <div class="grid grid-cols-2 gap-4 pb-6">
            {#each images.slice(0, 4) as image}
                <img src="{image}" alt="Preview of {title}" class="w-full h-auto object-contain rounded-3xl" />
            {/each}
        </div>
    {/if}
    
    <TextSection
        {title} {desc} {custom}
    />
</main>

<style>
    @media (max-width: 640px) {
        .grid-cols-2 {
            grid-template-columns: 1fr;
        }
    }
</style>