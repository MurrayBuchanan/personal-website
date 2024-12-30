<script> 
    export let title = "";
    export let desc = "";
    /**
     * @type {{url: string, title: string}[]}
     */
    export let links = [];
</script>

<!-- Return to home -->
<main class="animate mt-24 lg:mt-48" >
  <a href="../">
      <svg  width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-6 transition-transform transform hover:-translate-y-1 hover: duration-150">
          <path d="M18 44V24H30V44M6 18L24 4L42 18V40C42 41.0609 41.5786 42.0783 40.8284 42.8284C40.0783 43.5786 39.0609 44 38 44H10C8.93913 44 7.92172 43.5786 7.17157 42.8284C6.42143 42.0783 6 41.0609 6 40V18Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="fill-primary-light dark:fill-secondary-dark cursor-pointer stroke-gray-900 dark:stroke-gray-200"></path>
      </svg>
  </a>

  <h2 class="text-2xl text-gray-900 dark:text-white">{title}</h2>
  <p class="pb-6 text-sm font-normal text-gray-500 dark:text-gray-400">{desc}</p>

  <!-- each link -->
  <div class="flex pb-6">
      {#each links as link}
          <a href={link.url} class="transition-transform transform hover:-translate-y-1 cursor-pointer text-gray-900 text-base underline underline-offset-2 hover:text-blue-700 focus:outline-none focus:text-blue-700 dark:text-gray-200 dark:hover:text-white mr-4" target="_blank">{link.title}</a>
      {/each}
  </div>
</main>