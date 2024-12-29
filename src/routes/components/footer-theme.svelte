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
  <div class="relative flex items-center w-36 h-6 border-2 border-gray-900 dark:border-gray-200 rounded-full cursor-pointer overflow-hidden">
    <div class={`flex-1 flex items-center justify-center cursor-pointer ${theme === 'light' ? 'bg-gray-900 text-white rounded-full px-0.5' : 'text-gray-900 dark:text-gray-200'}`} on:click={() => setTheme('light')}>
      <p class="text-sm">Light</p>
    </div>
    <div class={`flex-1 flex items-center justify-center cursor-pointer ${theme === 'dark' ? 'bg-gray-200 text-gray-900 rounded-full px-0.5' : 'text-gray-900 dark:text-gray-200'}`} on:click={() => setTheme('dark')}>
      <p class="text-sm">Dark</p>
    </div>
    <div class={`flex-1 flex items-center justify-center cursor-pointer ${theme === 'auto' ? 'bg-gray-900 text-white dark:bg-gray-200 dark:text-gray-900 rounded-full px-0.5' : 'text-gray-900 dark:text-gray-200'}`} on:click={() => setTheme('auto')}>
      <p class="text-sm">Auto</p>
    </div>
  </div>
</main>