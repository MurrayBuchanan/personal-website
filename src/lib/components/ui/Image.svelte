<script lang="ts">
    export let url: string;
    export let alt: string = '';
    let imageVisible = true;
    
    function handleError() {
        imageVisible = false;
    }
</script>

<div class="animate">
{#if imageVisible}
    <img 
        src={url} 
        {alt}
        class="w-3/4 h-auto rounded-xl overflow-hidden mb-4 object-cover justify-center mx-auto"
        loading="lazy"
        on:error={handleError}
    />
{/if}
</div>