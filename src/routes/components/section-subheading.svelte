<script>
  export let image = '';
  export let title = '';
  export let desc = '';
  export let subDesc = '';
  export let link = '';
  export const favourite = false;
</script>

<main class="transition-transform duration-150 hover:scale-105 ease-out px-4 py-3 rounded-3xl hover:bg-secondary-light hover:dark:bg-primary-dark hover:bg-gray-200 cursor-pointer animate">
<a href={link}> 
  <!-- If link exists -->
  <div class="flex items-center">
      {#if image}
      <img src={image} alt="Thumbnail of {title}" class="w-8 h-8 object-contain mr-4 my-2" on:error="{() => image = 'assets/placeholder.png'}" />
      {/if}
    
    <div class="flex flex-col justify-center">
      {#if title}
        <h2 class="text-lg text-gray-900 dark:text-gray-200">{title}</h2>
      {/if}
      {#if desc}
        <h3 class="text-sm text-gray-900 dark:text-gray-200">{desc}</h3>
      {/if}
      {#if subDesc}
        <h3 class="text-sm text-gray-500 dark:text-gray-400">{subDesc}</h3>
      {/if}
    </div>
  </div>
</a>
</main>
