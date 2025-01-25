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
  <div class="relative flex items-center w-36 h-6 overflow-hidden border border-gray-900 dark:border-gray-200 rounded-lg cursor-pointer">
    <div class={`hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black  flex-1 flex items-center justify-center cursor-pointer px-0.5 rounded-md transition-transform duration-150 hover:scale-105 ease-out ${theme === 'light' ? 'bg-gray-900 text-white border border-gray-900 dark:border-gray-200' : 'text-black dark:text-white'}`} on:click={() => setTheme('light')}>
      <p class="text-sm">Light</p>
    </div>
    <div class={`hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black  flex-1 flex items-center justify-center cursor-pointer px-0.5 rounded-md transition-transform duration-150 hover:scale-105 ease-out ${theme === 'dark' ? 'bg-gray-200 text-black border border-gray-200 dark:border-gray-200' : 'text-black dark:text-white'}`} on:click={() => setTheme('dark')}>
      <p class="text-sm">Dark</p>
    </div>
    <div class={`hover:bg-gray-900 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black flex-1 flex items-center justify-center cursor-pointer px-0.5 rounded-md transition-transform duration-150 hover:scale-105 ease-out ${theme === 'auto' ? 'bg-gray-900 text-white border border-gray-900 dark:border-gray-200 dark:bg-gray-200 dark:text-black ' : 'text-black dark:text-white'}`} on:click={() => setTheme('auto')}>
      <p class="text-sm">Auto</p>
    </div>
  </div>
</main>