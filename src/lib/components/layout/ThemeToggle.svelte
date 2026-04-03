<script lang="ts">
  import { onMount } from 'svelte';

  type Theme = 'light' | 'dark' | 'auto';
  let theme: Theme = 'auto';

  let prefersDarkScheme: MediaQueryList;

  const segment =
    'min-w-0 flex-1 cursor-pointer py-0.5 text-center text-xs tracking-normal transition-colors duration-100 ease-out sm:text-sm';
  const inactive =
    'text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white';
  const active = 'font-medium text-neutral-950 dark:text-white';

  onMount(() => {
    prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'auto';
    theme = savedTheme;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      applySystemTheme();
    }

    prefersDarkScheme.addEventListener('change', applySystemTheme);
  });

  function applySystemTheme() {
    if (theme === 'auto') {
      if (prefersDarkScheme.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  function setTheme(newTheme: Theme) {
    theme = newTheme;
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      applySystemTheme();
      localStorage.setItem('theme', 'auto');
    }
  }
</script>

<main>
  <div class="font-sans flex w-[9.25rem] items-stretch gap-1" role="group" aria-label="Theme">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="{segment} {theme === 'light' ? active : inactive}"
      on:click={() => setTheme('light')}
    >
      Light
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="{segment} {theme === 'dark' ? active : inactive}"
      on:click={() => setTheme('dark')}
    >
      Dark
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="{segment} {theme === 'auto' ? active : inactive}"
      on:click={() => setTheme('auto')}
    >
      Auto
    </div>
  </div>
</main>
