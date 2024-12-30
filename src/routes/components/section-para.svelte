<script>
     /**
     * @type {string[]}
     */
      export let paragraphs = [];
</script>

<main class="animate">
    {#each paragraphs as paragraph}
        <p class="text-base text-gray-700 dark:text-gray-300 pb-6">{paragraph}</p>
    {/each}
</main>