<script>
    export let title = "";
    export let desc = "";
    export let newPage = false;
    
    import { page } from '$app/stores';

    let isHomepage = false;

    $: {
    $page.url.pathname === '/' ? isHomepage = true : isHomepage = false;
    }
    
    /**
     * @type {{url: string, title: string, newPage?: boolean}[]}
     */
    export let links = [];
</script>

<!-- Return to home -->
<main class="animate mt-24 lg:mt-48" >
    {#if isHomepage}
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-6 invisible">
              <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fill-primary-light dark:fill-primary-dark stroke-2 stroke-secondary-light dark:stroke-secondary-dark"/>
            </svg>
        {:else}
        <a href="../">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-6">
              <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-150 hover:scale-105 ease-out cursor-pointer fill-primary-light dark:fill-primary-dark stroke-2 stroke-secondary-light dark:stroke-secondary-dark hover:duration-150"/>
            </svg>
        </a>
        {/if}
  

  <h2 class="text-2xl font-normal text-secondary-light dark:text-secondary-dark">{title}</h2>
  <p class="pb-6 text-sm font-normal text-secondary-light dark:text-secondary-dark">{desc}</p>

  <!-- each link -->
  <div class="flex pb-6">
      {#each links as link}
        {#if newPage}
          <a href={link.url} class="mr-4 text-base font-normal text-secondary-light dark:text-secondary-dark hover:underline underline-offset-2 transition-transform duration-150 ease-out cursor-pointer" target="_blank">{link.title}</a>
        {:else}
          <a href={link.url} class="mr-4 text-base font-normal text-secondary-light dark:text-secondary-dark hover:underline underline-offset-2 transition-transform duration-150 ease-out cursor-pointer">{link.title}</a>
        {/if}
      {/each}
  </div>
</main>