<script lang="ts">
  
  interface ContentItem {
    title?: string;
    desc?: string | string[];
  }
  
  export let content: ContentItem[] = [];
  export let custom: string = "";
</script>

<main class="animate">
  {#each content as item}
    <!-- Title -->
    {#if item.title}
      <p class="text-base font-normal text-secondary-light dark:text-secondary-dark {custom}">{item.title}</p>
    {/if}
    
    <!-- Description(s) -->
    {#if typeof item.desc === 'string'}
      <!-- Single description -->
      {#if item.desc}
        <p class="pb-6 text-base font-normal text-tertiary-light dark:text-tertiary-dark {custom}">{item.desc}</p>
      {/if}
    {:else if Array.isArray(item.desc)}
      <!-- Multiple paragraphs -->
      {#each item.desc as paragraph}
        {#if paragraph}
          <p class="pb-6 text-base font-normal text-tertiary-light dark:text-tertiary-dark {custom}">{paragraph}</p>
        {/if}
      {/each}
    {/if}
  {/each}
</main>
