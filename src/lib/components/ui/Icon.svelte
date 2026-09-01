<script lang="ts">
    import type { IconName } from '$lib/types';
    import IconArrowRightRegular from 'phosphor-icons-svelte/IconArrowRightRegular.svelte';
    import IconArrowSquareOutRegular from 'phosphor-icons-svelte/IconArrowSquareOutRegular.svelte';
    import IconArrowUpRightRegular from 'phosphor-icons-svelte/IconArrowUpRightRegular.svelte';
    import IconCaretDownRegular from 'phosphor-icons-svelte/IconCaretDownRegular.svelte';
    import IconEnvelopeSimpleRegular from 'phosphor-icons-svelte/IconEnvelopeSimpleRegular.svelte';
    import IconGithubLogoRegular from 'phosphor-icons-svelte/IconGithubLogoRegular.svelte';
    import IconHouseRegular from 'phosphor-icons-svelte/IconHouseRegular.svelte';
    import IconInstagramLogoRegular from 'phosphor-icons-svelte/IconInstagramLogoRegular.svelte';
    import IconLinkedinLogoRegular from 'phosphor-icons-svelte/IconLinkedinLogoRegular.svelte';
    import IconMonitorRegular from 'phosphor-icons-svelte/IconMonitorRegular.svelte';
    import IconMoonRegular from 'phosphor-icons-svelte/IconMoonRegular.svelte';
    import IconSunRegular from 'phosphor-icons-svelte/IconSunRegular.svelte';

    export let name: IconName;
    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let className = '';

    const icons = {
        home: IconHouseRegular,
        mail: IconEnvelopeSimpleRegular,
        linkedin: IconLinkedinLogoRegular,
        github: IconGithubLogoRegular,
        instagram: IconInstagramLogoRegular,
        sun: IconSunRegular,
        moon: IconMoonRegular,
        monitor: IconMonitorRegular,
        external: IconArrowSquareOutRegular,
        'arrow-up-right': IconArrowUpRightRegular,
        'arrow-right': IconArrowRightRegular,
        'chevron-down': IconCaretDownRegular,
    };

    const sizes: Record<typeof size, string> = {
        sm: 'h-4 w-4 text-base',
        md: 'h-[1.125rem] w-[1.125rem] text-[1.125rem] sm:h-5 sm:w-5 sm:text-[1.25rem]',
        lg: 'h-6 w-6 text-2xl',
    };

    $: svgClass = ['shrink-0', sizes[size], className].filter(Boolean).join(' ');
</script>

<svelte:component this={icons[name]} class={svgClass} />
