<script>
    // import { useAnimate } from "../animation/animation";
    export let custom = '';
</script>
  
<main class="flex flex-col justify-center items-center">
    <div class="mb-10 p-8 lg:w-1/2 rounded-3xl overflow-hidden mx-2 lg:mx-24 {custom}">
        <slot></slot>
    </div>
</main>