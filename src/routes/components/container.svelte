<script>
    export let custom = '';
</script>
  
<main class="flex flex-col justify-center items-center">
    <div class="mb-10 p-4 lg:w-1/2 rounded-3xl mx-2 lg:mx-24 {custom}">
        <slot></slot>
    </div>
</main>