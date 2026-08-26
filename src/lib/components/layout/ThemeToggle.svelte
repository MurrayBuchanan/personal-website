<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from '$lib/components/ui/Icon.svelte';

    type Theme = 'light' | 'dark' | 'auto';
    let theme: Theme = 'auto';

    let prefersDarkScheme: MediaQueryList;

    const themes: { id: Theme; label: string; icon: 'sun' | 'moon' | 'monitor' }[] = [
        { id: 'light', label: 'Light theme', icon: 'sun' },
        { id: 'dark', label: 'Dark theme', icon: 'moon' },
        { id: 'auto', label: 'System theme', icon: 'monitor' },
    ];

    const btnBase =
        'group inline-flex cursor-pointer text-secondary-light transition-[color,opacity] duration-100 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40 dark:text-secondary-dark dark:focus-visible:ring-accent-dark/40';
    const btnActive =
        'opacity-100 hover:text-neutral-950 dark:hover:text-secondary-dark';
    const btnInactive =
        'opacity-[0.62] hover:text-neutral-950 hover:opacity-100 dark:opacity-[0.55] dark:hover:text-secondary-dark dark:hover:opacity-100';
    const iconClass =
        'group-hover:[stroke-width:1.75] group-aria-pressed:[stroke-width:1.75]';

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

        return () => prefersDarkScheme.removeEventListener('change', applySystemTheme);
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
                    <Icon name={option.icon} className={iconClass} />
                </button>
            </li>
        {/each}
    </ul>
</div>
