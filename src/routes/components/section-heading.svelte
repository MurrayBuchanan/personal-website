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
          <a href={link.url} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mr-4" target="_blank">
              {link.title}
              <svg
                class="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
      {/each}
  </div>
</main>