<script lang="ts">
    import { onMount } from 'svelte';
    
    onMount(() => {
        window.location.href = 'https://www.linkedin.com/in/murraycbuchanan/';
    });
</script>

<!-- This page will redirect to LinkedIn -->
<div class="flex items-center justify-center min-h-screen bg-primary-light dark:bg-primary-dark">
    <div class="text-center">
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">Redirecting to LinkedIn...</p>
        <a href="https://www.linkedin.com/in/murraycbuchanan/" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
            Click here if you're not redirected automatically
        </a>
    </div>
</div>