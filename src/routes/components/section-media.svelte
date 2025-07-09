<script lang="ts">
    import TextSection from './section-text.svelte';
    import { onMount } from 'svelte';

    /**
     * @type {string[]}
     */
    export let images: string[] = [];
    export let title = "";
    export let desc = "";
    export let custom = "text-center";

    let loadingStates: boolean[] = [];
    let errorStates: boolean[] = [];

    onMount(() => {
        loadingStates = new Array(images.length).fill(true);
        errorStates = new Array(images.length).fill(false);
    });

    function handleImageLoad(index: number): void {
        loadingStates[index] = false;
        loadingStates = [...loadingStates];
    }

    function handleImageError(index: number): void {
        loadingStates[index] = false;
        errorStates[index] = true;
        loadingStates = [...loadingStates];
        errorStates = [...errorStates];
    }
</script>

<main class="pt-2 animate">
    {#if images.length === 1}
        <div class="w-full overflow-hidden pb-6">
            {#if loadingStates[0]}
                <div class="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse flex items-center justify-center">
                    <div class="text-gray-400 dark:text-gray-500">Loading...</div>
                </div>
            {/if}
            {#if errorStates[0]}
                <div class="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                    <div class="text-gray-500 dark:text-gray-400">Failed to load image</div>
                </div>
            {/if}
            <img 
                src="{images[0]}" 
                alt="Preview of {title}" 
                class="w-full h-auto object-contain rounded-3xl {loadingStates[0] ? 'hidden' : ''}" 
                on:load={() => handleImageLoad(0)}
                on:error={() => handleImageError(0)}
            />
        </div>
    {:else if images.length === 2}
        <div class="grid grid-cols-2 gap-4 pb-6">
            {#each images as image, index}
                <div class="relative">
                    {#if loadingStates[index]}
                        <div class="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse flex items-center justify-center">
                            <div class="text-gray-400 dark:text-gray-500">Loading...</div>
                        </div>
                    {/if}
                    {#if errorStates[index]}
                        <div class="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                            <div class="text-gray-500 dark:text-gray-400">Failed to load</div>
                        </div>
                    {/if}
                    <img 
                        src="{image}" 
                        alt="Preview of {title}" 
                        class="w-full h-auto object-contain rounded-3xl {loadingStates[index] ? 'hidden' : ''}" 
                        on:load={() => handleImageLoad(index)}
                        on:error={() => handleImageError(index)}
                    />
                </div>
            {/each}
        </div>
    {:else if images.length === 3}
        <div class="grid grid-cols-2 gap-4 pb-6">
            <div class="col-span-2 relative">
                {#if loadingStates[0]}
                    <div class="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse flex items-center justify-center">
                        <div class="text-gray-400 dark:text-gray-500">Loading...</div>
                    </div>
                {/if}
                {#if errorStates[0]}
                    <div class="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                        <div class="text-gray-500 dark:text-gray-400">Failed to load</div>
                    </div>
                {/if}
                <img 
                    src="{images[0]}" 
                    alt="Preview of {title}" 
                    class="w-full h-auto object-contain rounded-3xl col-span-2 {loadingStates[0] ? 'hidden' : ''}" 
                    on:load={() => handleImageLoad(0)}
                    on:error={() => handleImageError(0)}
                />
            </div>
            <div class="relative">
                {#if loadingStates[1]}
                    <div class="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse flex items-center justify-center">
                        <div class="text-gray-400 dark:text-gray-500">Loading...</div>
                    </div>
                {/if}
                {#if errorStates[1]}
                    <div class="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                        <div class="text-gray-500 dark:text-gray-400">Failed to load</div>
                    </div>
                {/if}
                <img 
                    src="{images[1]}" 
                    alt="Preview of {title}" 
                    class="w-full h-auto object-contain rounded-3xl {loadingStates[1] ? 'hidden' : ''}" 
                    on:load={() => handleImageLoad(1)}
                    on:error={() => handleImageError(1)}
                />
            </div>
            <div class="relative">
                {#if loadingStates[2]}
                    <div class="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse flex items-center justify-center">
                        <div class="text-gray-400 dark:text-gray-500">Loading...</div>
                    </div>
                {/if}
                {#if errorStates[2]}
                    <div class="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                        <div class="text-gray-500 dark:text-gray-400">Failed to load</div>
                    </div>
                {/if}
                <img 
                    src="{images[2]}" 
                    alt="Preview of {title}" 
                    class="w-full h-auto object-contain rounded-3xl {loadingStates[2] ? 'hidden' : ''}" 
                    on:load={() => handleImageLoad(2)}
                    on:error={() => handleImageError(2)}
                />
            </div>
        </div>
    {:else if images.length >= 4}
        <div class="grid grid-cols-2 gap-4 pb-6">
            {#each images.slice(0, 4) as image, index}
                <div class="relative">
                    {#if loadingStates[index]}
                        <div class="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse flex items-center justify-center">
                            <div class="text-gray-400 dark:text-gray-500">Loading...</div>
                        </div>
                    {/if}
                    {#if errorStates[index]}
                        <div class="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                            <div class="text-gray-500 dark:text-gray-400">Failed to load</div>
                        </div>
                    {/if}
                    <img 
                        src="{image}" 
                        alt="Preview of {title}" 
                        class="w-full h-auto object-contain rounded-3xl {loadingStates[index] ? 'hidden' : ''}" 
                        on:load={() => handleImageLoad(index)}
                        on:error={() => handleImageError(index)}
                    />
                </div>
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