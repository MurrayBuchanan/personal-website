<script>
    export let custom = '';
</script>
  
<main
    class="flex w-full flex-1 flex-col items-center px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32"
>
    <div
        class="mb-6 flex w-full flex-1 flex-col rounded-3xl px-4 pt-5 sm:pt-7 lg:w-full lg:max-w-[40rem] xl:max-w-[48rem] 2xl:max-w-[56rem] {custom}"
    >
        <slot></slot>
    </div>
</main>