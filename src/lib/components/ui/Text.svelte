<script lang="ts">
  
  interface ContentItem {
    title?: string;
    desc?: string | string[];
  }
  
  export let content: ContentItem[] = [];
  export let custom: string = "";
</script>

<main>
  {#each content as item}
    <!-- Title -->
    {#if item.title}
      <p class="font-sans animate text-base font-normal leading-snug tracking-[-0.02em] text-secondary-light dark:text-secondary-dark sm:text-lg {custom}">{item.title}</p>
    {/if}
    
    <!-- Description(s) -->
    {#if typeof item.desc === 'string'}
      <!-- Single description -->
      {#if item.desc}
        <p class="animate pb-6 text-sm font-normal leading-[1.65] tracking-normal text-secondary-light dark:text-secondary-dark sm:text-[0.9375rem] {custom}">{item.desc}</p>
      {/if}
    {:else if Array.isArray(item.desc)}
      <!-- Multiple paragraphs -->
      {#each item.desc as paragraph}
        {#if paragraph}
          <p class="animate pb-6 text-sm font-normal leading-[1.65] tracking-normal text-secondary-light dark:text-secondary-dark sm:text-[0.9375rem] {custom}">{paragraph}</p>
        {/if}
      {/each}
    {/if}
  {/each}
</main>
