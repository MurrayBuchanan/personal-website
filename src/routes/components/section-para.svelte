<script>
     /**
     * @type {string[]}
     */
      export let paragraphs = [];
</script>

<main class="animate">
    {#each paragraphs as paragraph}
        <p class="pb-6 text-base font-normal text-tertiary-light dark:text-tertiary-dark">{paragraph}</p>
    {/each}
</main>