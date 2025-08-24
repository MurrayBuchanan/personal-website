<script lang="ts">
  import { onMount } from 'svelte';

  type Theme = 'light' | 'dark' | 'auto';
  let theme: Theme = 'auto';

  let prefersDarkScheme: MediaQueryList;

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

    // Add event listener only after mount
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
  <!-- Hover -> Selected -> Default -->
  <div class="w-36 h-6 relative flex items-center space-between cursor-pointer">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class={`hover:bg-primary-dark dark:hover:bg-primary-light text-secondary-light dark:text-secondary-dark hover:text-secondary-dark dark:hover:text-secondary-light h-6 px-0.5 flex-1 flex items-center justify-center cursor-pointer rounded-lg transition-transform duration-150 hover:scale-105 ease-out ${theme === 'light' ? 'text-secondary-light dark:text-secondary-dark border border-tertiary-light dark:border-tertiary-dark' : 'text-secondary-light dark:text-secondary-dark'}`} on:click={() => setTheme('light')}>
      <p class="text-sm font-normal">Light</p>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class={`hover:bg-primary-dark dark:hover:bg-primary-light text-secondary-light dark:text-secondary-dark hover:text-secondary-dark dark:hover:text-secondary-light h-6 px-0.5 flex-1 flex items-center justify-center cursor-pointer rounded-lg transition-transform duration-150 hover:scale-105 ease-out ${theme === 'dark'  ? 'text-secondary-light dark:text-secondary-dark border border-tertiary-light dark:border-tertiary-dark' : 'text-secondary-light dark:text-secondary-dark'}`} on:click={() => setTheme('dark')}>
      <p class="text-sm font-normal">Dark</p>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class={`hover:bg-primary-dark dark:hover:bg-primary-light text-secondary-light dark:text-secondary-dark hover:text-secondary-dark dark:hover:text-secondary-light h-6 px-0.5 flex-1 flex items-center justify-center cursor-pointer rounded-lg transition-transform duration-150 hover:scale-105 ease-out ${theme === 'auto'  ? 'text-secondary-light dark:text-secondary-dark border border-tertiary-light dark:border-tertiary-dark' : 'text-secondary-light dark:text-secondary-dark'}`} on:click={() => setTheme('auto')}>
      <p class="text-sm font-normal">Auto</p>
    </div>
  </div>
</main>