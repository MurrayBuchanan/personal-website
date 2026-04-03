<script>
    export let title = "";
    export let desc = "";
    /** Optional one line under `desc` (e.g. homepage bio). Kept quieter than the role line. */
    export let intro = "";
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

    /** Homepage-only motif; tinted like subtitle text (`neutral-600` / `neutral-300`), no panel. Ignored off `/`. */
    export let graphic = '';
    export let graphicAlt = '';

    /** @param {string} url */
    function isNavActive(url) {
        return url.startsWith('/') && $page.url.pathname === url.split('?')[0];
    }

    const navLinkBase =
        'font-sans text-[0.8125rem] font-normal no-underline transition-colors duration-100 ease-out sm:text-sm py-0.5';

    /** Match `Footer` contact/social links: opacity + color + stroke, no scale. */
    const homeIconWrap =
        'group inline-flex text-secondary-light opacity-[0.62] transition-[color,opacity] duration-100 ease-out hover:text-neutral-950 hover:opacity-100 dark:text-secondary-dark dark:opacity-[0.55] dark:hover:text-white dark:hover:opacity-100';
    const homeIconSvg =
        'h-6 w-6 stroke-current stroke-[1.65] transition-[stroke-width] duration-100 ease-out group-hover:stroke-[2] [vector-effect:non-scaling-stroke]';

    /** Same block as banner mask so `<h2>` starts on the same baseline as the launch screen. */
    const heroSlot =
        'mb-2.5 w-full min-h-[5.5rem] sm:mb-3 sm:min-h-[6.75rem] md:min-h-[7.75rem] lg:min-h-[8.5rem]';
</script>

<!-- Same top safe-area + rhythm as launch; subpages add home link below. -->
<main class="animate mt-0 pt-[max(0.25rem,env(safe-area-inset-top))]">
    {#if !isHomepage}
        <div class="animate flex flex-col justify-end {heroSlot}">
            <a href="../" class="{homeIconWrap}" aria-label="Home">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="{homeIconSvg}"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="fill-primary-light dark:fill-primary-dark"
                    />
                </svg>
            </a>
        </div>
    {/if}

  {#if isHomepage && graphic}
    <div class="animate flex flex-col justify-end {heroSlot}">
      <div
          class="h-[5.5rem] w-full bg-neutral-600 dark:bg-neutral-300 sm:h-[6.75rem] md:h-[7.75rem] lg:h-[8.5rem]"
          style="-webkit-mask-image: url({JSON.stringify(graphic)}); -webkit-mask-size: cover; -webkit-mask-position: 50% 32%; -webkit-mask-repeat: no-repeat; mask-image: url({JSON.stringify(graphic)}); mask-size: cover; mask-position: 50% 32%; mask-repeat: no-repeat;"
          role={graphicAlt ? 'img' : undefined}
          aria-label={graphicAlt || undefined}
          aria-hidden={graphicAlt ? undefined : 'true'}
      ></div>
    </div>
  {/if}

  <h2
      class="animate text-[1.375rem] font-semibold leading-tight tracking-[-0.02em] text-secondary-light dark:text-secondary-dark sm:text-[1.625rem] {!desc
          ? 'mb-6'
          : ''}"
  >
    {title}
  </h2>
  {#if desc}
    <p
        class="animate max-w-prose pb-1 pt-1 font-sans text-sm font-normal leading-snug tracking-normal text-secondary-light dark:text-secondary-dark sm:text-[0.9375rem]"
    >
      {desc}
    </p>
  {/if}

  {#if links.length}
    <nav
        class="animate flex flex-wrap gap-x-5 gap-y-1.5 sm:gap-x-6 {desc ? 'mt-0.5' : ''} {intro
          ? 'pb-3 sm:pb-3.5'
          : 'pb-5 sm:pb-6'}"
        aria-label="Primary"
    >
        {#each links as link}
            <a
                href={link.url}
                class="{navLinkBase} {isNavActive(link.url)
                  ? 'font-medium text-neutral-950 dark:text-white'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'}"
                target={newPage ? '_blank' : undefined}
                rel={newPage ? 'noopener noreferrer' : undefined}
                aria-current={isNavActive(link.url) ? 'page' : undefined}>{link.title}</a>
        {/each}
    </nav>
  {/if}
  {#if intro}
    <p
        class="animate max-w-prose pb-3 pt-0 font-sans text-[0.8125rem] font-normal leading-snug tracking-normal text-neutral-600 dark:text-neutral-400 sm:text-sm sm:pb-4"
    >
      {intro}
    </p>
  {/if}
</main>
