<script>
    export let custom = '';
</script>
  
<main class="flex flex-col justify-center items-center">
    <div class="mb-2 lg:mb-6 p-4 lg:w-1/2 mx-2 lg:mx-24 rounded-3xl {custom}">
        <slot></slot>
    </div>
</main>