<script lang="ts">
    import ThemeToggle from '$lib/components/layout/ThemeToggle.svelte';
    import Divider from '$lib/components/ui/Divider.svelte';
    import InlineLink from '$lib/components/ui/InlineLink.svelte';

    export let custom = '';
    export let extraScrollPadding = false;

    type FooterLink = {
        href: string;
        label: string;
        newTab?: boolean;
    };

    const year = new Date().getFullYear();

    const contactLinks: FooterLink[] = [
        { href: 'mailto:contact@murrayb.com', label: 'Email', newTab: false },
        {
            href: 'https://www.linkedin.com/in/murraycbuchanan/',
            label: 'LinkedIn',
        },
        { href: 'https://github.com/MurrayBuchanan', label: 'GitHub' },
        {
            href: 'https://www.instagram.com/murray.c.buchanan/',
            label: 'Instagram',
        },
    ];
</script>

<footer
    class="mt-auto w-full animate {extraScrollPadding
        ? 'pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]'
        : 'pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:pb-[max(1rem,env(safe-area-inset-bottom))]'} {custom}"
>
    <Divider spacing="footer" columns />

    <div class="flex w-full min-w-0 flex-col gap-4 sm:gap-5">
        <div
            class="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
        >
            <div class="flex min-w-0 flex-col gap-1 text-left">
                <p class="type-lead !max-w-none">Murray Buchanan</p>
                <p class="type-meta !max-w-none">© {year}</p>
            </div>

            <ThemeToggle />
        </div>

        <nav aria-label="Contact" class="w-full min-w-0">
            <ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
                {#each contactLinks as link (link.href)}
                    <li class="min-w-0">
                        <InlineLink
                            href={link.href}
                            label={link.label}
                            newTab={link.newTab ?? true}
                        />
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</footer>
