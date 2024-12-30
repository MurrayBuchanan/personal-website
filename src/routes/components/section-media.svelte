<script>
    import TextSection from './section-text.svelte';

    export let image ="";
    export let title = "";
    export let desc = "";
    export let custom = "text-center";
</script>

<main class="pt-20 pb-6">
    {#if image}
        <img src="{image}" alt="Preview of {title}" class="w-full rounded-3xl h-auto mr-4 my-2 image" />
    {/if}
    <TextSection
        {title} {desc} {custom}
    />
</main>