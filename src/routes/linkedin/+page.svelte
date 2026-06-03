<script lang="ts">
    import { onMount } from 'svelte';
    import InlineLink from '$lib/components/ui/InlineLink.svelte';

    const LINKEDIN_URL = 'https://www.linkedin.com/in/murraycbuchanan/';

    onMount(() => {
        window.location.replace(LINKEDIN_URL);
    });
</script>

<svelte:head>
    <meta http-equiv="refresh" content="0;url=https://www.linkedin.com/in/murraycbuchanan/" />
</svelte:head>

<p class="type-body">
    <InlineLink href={LINKEDIN_URL} label="Redirecting to LinkedIn…" />
</p>
