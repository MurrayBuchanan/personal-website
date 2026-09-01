<script lang="ts">
    import PageLayout from '$lib/components/layout/PageLayout.svelte';
    import IconLink from '$lib/components/ui/IconLink.svelte';

    export let error;

    $: status = error?.status ?? 404;
    $: message = error?.message ?? 'Page not found';
</script>

<svelte:head>
    <title>Murray Buchanan | {status}</title>
</svelte:head>

<PageLayout>
    <div
        class="animate mt-0 flex w-full min-h-[2.75rem] flex-col items-start justify-end pt-[env(safe-area-inset-top,0px)] mb-4 sm:mb-5 sm:min-h-[3rem] md:min-h-[3.25rem] lg:min-h-[3.5rem]"
    >
        <IconLink href="../" label="Home" name="home" size="lg" />
    </div>

    <div
        class="animate flex flex-1 items-center justify-center py-12 sm:py-16 md:py-20"
        role="alert"
    >
        <div class="flex items-stretch gap-5 sm:gap-7 md:gap-9">
            <span
                class="font-sans text-3xl font-medium tabular-nums tracking-tight text-secondary-light dark:text-secondary-dark sm:text-4xl md:text-5xl"
            >
                {status}
            </span>
            <div
                role="separator"
                aria-orientation="vertical"
                class="w-px shrink-0 self-stretch rounded-full bg-black/[0.08] dark:bg-white/[0.08]"
            ></div>
            <p
                class="font-sans text-3xl font-medium tracking-tight text-secondary-light dark:text-secondary-dark sm:text-4xl md:text-5xl"
            >
                {message}
            </p>
        </div>
    </div>
</PageLayout>
