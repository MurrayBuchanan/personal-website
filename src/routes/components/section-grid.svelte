<script>
    import TextSection from './section-text.svelte';
    import image from '$lib/assets/placeholder.png';
</script>

<div class="grid grid-cols-2 gap-4 pb-32 animate">
    <div>
        <img src={image} alt="Profile Image" class="w-full h-auto mr-4 my-2 image" />
        <p class="pt-4 text-base text-gray-700 dark:text-gray-300 text-center">Login</p>
        <p class="text-base text-gray-400 dark:text-gray-500 text-center">Without depth sensor, we want to use eye saccades as a form of identification.</p>
    </div>

    <div>
        <img src="static/assets/placeholder.png" alt="Profile Image" class="w-full h-auto mr-4 my-2 image" />
        <p class="pt-4 text-base text-gray-700 dark:text-gray-300 text-center">Login</p>
        <p class="text-base text-gray-400 dark:text-gray-500 text-center">Without depth sensor, we want to use eye saccades as a form of identification.</p>
    </div>
</div>