<script>
    import Toggle from './ThemeToggle.svelte';
    export let custom = '';
    /** Homepage: more bottom padding when the full project list is open (long scroll). */
    export let extraScrollPadding = false;

    const iconWrap =
        'group inline-flex text-secondary-light opacity-[0.62] transition-[color,opacity] duration-100 ease-out hover:text-neutral-950 hover:opacity-100 dark:text-secondary-dark dark:opacity-[0.55] dark:hover:text-white dark:hover:opacity-100';
    const iconSvg =
        'h-6 w-6 stroke-current stroke-[1.65] transition-[stroke-width] duration-100 ease-out group-hover:stroke-[2] [vector-effect:non-scaling-stroke]';
</script>

<footer
    class="mt-auto w-full animate pt-12 sm:pt-16 {extraScrollPadding
        ? 'pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]'
        : 'pb-[max(0.25rem,env(safe-area-inset-bottom))]'} {custom}"
>
    <p
        class="mb-2 font-sans text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400"
    >
        Contact
    </p>

    <span class="inline-flex w-full justify-between">
        <span>
            <ul class="flex flex-wrap justify-center gap-4 lg:gap-4">
                <li>
                    <a href="mailto:contact@murrayb.com" class="{iconWrap}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="{iconSvg}" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/murraycbuchanan/" target="_blank" rel="noopener noreferrer" class="{iconWrap}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="{iconSvg}" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/MurrayBuchanan" target="_blank" rel="noopener noreferrer" class="{iconWrap}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="{iconSvg}" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/murray.c.buchanan/" target="_blank" rel="noopener noreferrer" class="{iconWrap}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="{iconSvg}" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                </li>
            </ul>
        </span>
        <Toggle />
    </span>
</footer>
