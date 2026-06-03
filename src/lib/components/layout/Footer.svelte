<script lang="ts">
    import ThemeToggle from '$lib/components/layout/ThemeToggle.svelte';
    import Divider from '$lib/components/ui/Divider.svelte';
    import IconLink from '$lib/components/ui/IconLink.svelte';
    import type { IconName } from '$lib/types';

    export let custom = '';
    export let extraScrollPadding = false;

    type SocialLink = {
        href: string;
        label: string;
        icon: IconName;
    };

    const year = new Date().getFullYear();

    const socialLinks: SocialLink[] = [
        { href: 'mailto:contact@murrayb.com', label: 'Email', icon: 'mail' },
        {
            href: 'https://www.linkedin.com/in/murraycbuchanan/',
            label: 'LinkedIn',
            icon: 'linkedin',
        },
        { href: 'https://github.com/MurrayBuchanan', label: 'GitHub', icon: 'github' },
        {
            href: 'https://www.instagram.com/murray.c.buchanan/',
            label: 'Instagram',
            icon: 'instagram',
        },
    ];
</script>

<footer
    class="mt-auto w-full animate {extraScrollPadding
        ? 'pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]'
        : 'pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:pb-[max(1rem,env(safe-area-inset-bottom))]'} {custom}"
>
    <Divider spacing="footer" />

    <div class="flex flex-col gap-5 sm:gap-6">
        <div
            class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
        >
            <div class="min-w-0 flex flex-col gap-2">
                <p class="type-section">Contact</p>
                <nav aria-label="Social">
                    <ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
                        {#each socialLinks as link (link.href)}
                            <li>
                                <IconLink
                                    href={link.href}
                                    label={link.label}
                                    name={link.icon}
                                />
                            </li>
                        {/each}
                    </ul>
                </nav>
            </div>

            <div class="flex shrink-0 flex-col gap-2">
                <p class="type-section">Theme</p>
                <ThemeToggle />
            </div>
        </div>

        <p class="type-meta">© {year} Murray Buchanan</p>
    </div>
</footer>
