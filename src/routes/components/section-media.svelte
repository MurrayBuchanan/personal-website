<script lang="ts">
    import TextSection from './section-text.svelte';
    import { onMount } from 'svelte';

    export let image: string = "";
    export let title = "";
    export let desc = "";
    export let custom = "text-center";

    let isLoading = true;
    let hasError = false;

    onMount(() => {
        isLoading = true;
        hasError = false;
    });

    function handleImageLoad(): void {
        isLoading = false;
    }

    function handleImageError(): void {
        isLoading = false;
        hasError = true;
    }
</script>

<main class="pt-2 animate">
    <div class="w-full overflow-hidden pb-6">
        {#if isLoading}
            <div class="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse flex items-center justify-center">
                <div class="text-gray-400 dark:text-gray-500">Loading...</div>
            </div>
        {/if}
        {#if hasError}
            <div class="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                <div class="text-gray-500 dark:text-gray-400">Failed to load image</div>
            </div>
        {/if}
        <img 
            src="{image}" 
            alt="Preview of {title}" 
            class="w-full h-auto object-contain rounded-3xl {isLoading ? 'hidden' : ''}" 
            on:load={handleImageLoad}
            on:error={handleImageError}
        />
    </div>
    
    <TextSection
        {title} {desc} {custom}
    />
</main>