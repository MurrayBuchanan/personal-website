<script>
  export let image = '';
  export let title = '';
  export let desc = '';
  export let subDesc = '';
  export let link = '';
</script>

<main class="px-4 py-3 rounded-3xl hover:bg-secondary-light hover:dark:bg-primary-dark hover:bg-gray-200 transition-transform transform hover:-translate-y-1 cursor-pointer">
<a href={link}> 
  <!-- If link exists -->
  <div class="flex items-center">
      {#if image}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={image} alt="Profile Image" class="w-12 h-auto mr-4 my-2 image" />
      {/if}
    
    <div class="flex flex-col justify-center">
      {#if title}
        <h2 class="text-xl text-gray-900 dark:text-gray-200 text">{title}</h2>
      {/if}
      {#if desc}
        <h3 class="text-sm text-gray-900 dark:text-gray-200 text">{desc}</h3>
      {/if}
      {#if subDesc}
        <h3 class="text-sm text-gray-500 dark:text-gray-400 text">{subDesc}</h3>
      {/if}
    </div>
  </div>
</a>
</main>

<style>
  .image {
    opacity:0;
    transform: scale(0.5);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .text {
    transform: translateX(-5rem);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  main:hover .image,
  main:hover .text {
    opacity: 1;
    transform: translateX(0);
  }
</style>