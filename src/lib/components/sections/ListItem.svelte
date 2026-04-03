<script>
  export let icon = '';
  export let title = '';
  export let desc = '';
  export let subDesc = '';
  export let url = '';
  export const favourite = false;
  /** Softer presentation when expanded list includes older/auxiliary entries */
  export let subdued = false;
</script>
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- Object growth should not affect other components -->

<div
    class="relative flex items-start overflow-hidden rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 {subdued
        ? 'opacity-[0.78] dark:opacity-[0.82]'
        : ''}"
>
  <a
      href={url}
      class="group relative block w-full cursor-pointer touch-manipulation outline-none transition-colors duration-100 ease-out focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary-light/30 dark:focus-visible:ring-secondary-dark/40 rounded-xl"
  >
    <div
        class="grid min-w-0 grid-cols-[2rem_1fr] items-center gap-x-3 sm:grid-cols-[2.25rem_1fr] sm:gap-x-3.5"
    >
        {#if icon}
        <div
            class="flex w-full items-center justify-center"
            aria-hidden="true"
        >
            <img
                src={icon}
                alt=""
                style='stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"'
                class="h-6 w-6 object-contain opacity-[0.68] transition-opacity duration-100 ease-out group-hover:opacity-100 dark:opacity-[0.55] dark:invert dark:brightness-100 dark:group-hover:opacity-100 sm:h-7 sm:w-7"
                on:error="{() => icon = 'assets/icons/Placeholder.svg'}"
            />
        </div>
        {:else}
        <div class="min-w-0"></div>
        {/if}

      <div class="flex min-w-0 flex-col gap-0.5 sm:gap-0.5">
        {#if title}
          <h2 class="text-base font-medium leading-snug tracking-[-0.02em] text-secondary-light dark:text-secondary-dark sm:text-lg">
            {title}
          </h2>
        {/if}
        {#if desc}
          <p
              class="font-sans text-[0.8125rem] font-normal leading-snug tracking-normal text-neutral-600 transition-colors duration-100 ease-out group-hover:text-neutral-950 dark:text-neutral-300 dark:group-hover:text-white sm:text-sm"
          >
            {desc}
          </p>
        {/if}
        {#if subDesc}
          <p
              class="font-sans text-[0.8125rem] font-normal leading-snug tracking-normal text-neutral-600 transition-colors duration-100 ease-out group-hover:text-neutral-950 dark:text-neutral-300 dark:group-hover:text-white sm:text-sm"
          >
            {subDesc}
          </p>
        {/if}
      </div>
    </div>
  </a>
</div>
