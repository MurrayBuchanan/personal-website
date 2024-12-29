<script lang="ts">
    import { slideUpOnScrollOld } from '../animation/launchanimation';
    import { onMount } from 'svelte';
    
    let showScrollMessage = false;
    let hasScrolled = false;
    
    onMount(() => {
        const handleScroll = () => {
            hasScrolled = true;
            window.removeEventListener('scroll', handleScroll);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        setTimeout(() => {
            if (!hasScrolled) {
                showScrollMessage = true;
            }
        }, 3000);
    });
    </script>
    
    <main class="h-lvh flex flex-col items-center justify-center text-center">
        <div use:slideUpOnScrollOld={{ offset: 100, duration: 500 }}>
            <!-- svelte-ignore a11y-missing-content -->
            <h2 class="text-base uppercase font-normal text-gray-900 dark:text-gray-400"></h2>
            <h1 class="text-5xl font-semibold my-4 text-gray-900 dark:text-white">Murray Buchanan</h1>
            <ul class="flex space-x-6 justify-center">
                <li class="px-2"><a href="mailto:contact@murrayb.com"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-gray-500 dark:stroke-gray-400 hover: duration-150 hover:stroke-gray-900 hover:dark:stroke-white"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></li>
                <li class="px-2"><a href="https://www.linkedin.com/in/murray-buchanan-33519220a/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-gray-500 dark:stroke-gray-400 hover: duration-150 hover:stroke-gray-900 hover:dark:stroke-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
                <li class="px-2"><a href="https://github.com/MurrayBuchanan" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-gray-500 hover: duration-150 dark:stroke-gray-400 hover:stroke-gray-900 hover:dark:stroke-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                <li class="px-2"><a href="https://www.instagram.com/murray.c.buchanan/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-gray-500 dark:stroke-gray-400 hover: duration-150 hover:stroke-gray-900 hover:dark:stroke-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
            </ul>
            {#if showScrollMessage}
                <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 absolute bottom-20 left-1/2 transform -translate-x-1/2">Scroll down</p>
            {/if}
        </div>
    </main>