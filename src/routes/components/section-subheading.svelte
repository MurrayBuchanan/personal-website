<script>
  export let icon = '';
  export let title = '';
  export let desc = '';
  export let subDesc = '';
  export let url = '';
  export const favourite = false;
  

  let isHovered = false;
</script>
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- Object growth should not affect other components -->

<main class="relative flex items-center border border-primary-light dark:border-primary-dark overflow-hidden hover:border-tertiary-light hover:dark:border-tertiary-dark px-4 py-2 rounded-2xl hover:bg-primary-light dark:hover:bg-primary-dark cursor-pointer transition-transform duration-300 hover:scale-105 ease-out">
  <a href={url} class="relative block w-full"> 
    <!-- If link exists -->
    <div class="flex items-center">
        {#if icon}
        <img src={icon} alt="Thumbnail of {title}" style='stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"' class="w-8 h-8 object-contain mr-4 my-2 dark:invert dark:brightness-100" on:error="{() => icon = 'assets/icons/Placeholder.svg'}" />
        {/if}
      
      <div class="flex flex-col justify-center">
        {#if title}
          <h2 class="text-base font-normal text-secondary-light dark:text-secondary-dark">{title}</h2>
        {/if}
        {#if desc}
          <h3 class="text-xs font-normal text-tertiary-light dark:text-tertiary-dark">{desc}</h3>
        {/if}
        {#if subDesc}
          <h3 class="text-xs font-normal text-tertiary-light dark:text-tertiary-dark">{subDesc}</h3>
        {/if}
      </div>
    </div>
  </a>
</main>