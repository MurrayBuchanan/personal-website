<script lang="ts">
    export let text = '';
    export let accent = false;
</script>

<span
    class="inline-flex h-5 shrink-0 translate-y-[2px] items-center justify-center rounded-full px-2 font-sans text-meta font-normal {accent
        ? 'bg-secondary-light/10 text-secondary-light dark:bg-secondary-dark/15 dark:text-secondary-dark'
        : 'bg-black/[0.06] text-muted-light dark:bg-white/[0.08] dark:text-muted-dark'}"
>
    {text}
</span>
