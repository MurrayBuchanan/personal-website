<script>
    export let custom = '';
</script>
  
<main
    class="flex min-h-0 min-w-0 flex-1 flex-col items-center px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32"
>
    <div
        class="mb-6 flex min-h-0 w-full max-w-xl flex-1 flex-col rounded-3xl px-4 pt-4 {custom}"
    >
        <slot></slot>
    </div>
</main>