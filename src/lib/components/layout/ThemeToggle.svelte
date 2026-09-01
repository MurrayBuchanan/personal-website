<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from '$lib/components/ui/Icon.svelte';

    type Theme = 'light' | 'dark' | 'auto';
    let theme: Theme = 'auto';

    let prefersDarkScheme: MediaQueryList;

    const themes: { id: Exclude<Theme, 'auto'>; label: string; icon: 'sun' | 'moon' }[] = [
        { id: 'light', label: 'Light theme', icon: 'sun' },
        { id: 'dark', label: 'Dark theme', icon: 'moon' },
    ];

    const btnBase =
        'group inline-flex cursor-pointer text-secondary-light transition-[color,opacity] duration-100 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary-light/40 dark:text-secondary-dark dark:focus-visible:ring-secondary-dark/40';
    const btnActive =
        'opacity-100 hover:text-secondary-light dark:hover:text-secondary-dark';
    const btnInactive =
        'opacity-[0.62] hover:text-secondary-light hover:opacity-100 dark:opacity-[0.55] dark:hover:text-secondary-dark dark:hover:opacity-100';

    onMount(() => {
        prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const savedTheme = localStorage.getItem('theme');
        theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'auto';

        applyTheme();
        prefersDarkScheme.addEventListener('change', applySystemTheme);

        return () => prefersDarkScheme.removeEventListener('change', applySystemTheme);
    });

    function applySystemTheme() {
        if (theme !== 'auto') return;
        applyTheme();
    }

    function applyTheme() {
        const isDark =
            theme === 'dark' || (theme === 'auto' && prefersDarkScheme.matches);
        document.documentElement.classList.toggle('dark', isDark);
    }

    function setTheme(newTheme: Exclude<Theme, 'auto'>) {
        theme = newTheme;
        localStorage.setItem('theme', newTheme);
        applyTheme();
    }
</script>

<div role="group" aria-label="Theme">
    <ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
        {#each themes as option (option.id)}
            <li>
                <button
                    type="button"
                    class="{btnBase} {theme === option.id ? btnActive : btnInactive}"
                    aria-label={option.label}
                    aria-pressed={theme === option.id}
                    on:click={() => setTheme(option.id)}
                >
                    <Icon name={option.icon} />
                </button>
            </li>
        {/each}
    </ul>
</div>
