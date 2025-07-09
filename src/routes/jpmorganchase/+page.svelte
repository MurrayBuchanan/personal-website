<script lang="ts">
    import { useAnimate } from '../animation/animation';
    import Container from '../components/container.svelte';
    import Media from '../components/section-media.svelte';
    import Paragraphs from '../components/section-para.svelte';
    import Paragraph from '../components/section-text.svelte';
    import Footer from '../components/footer.svelte';
    import Heading from '../components/section-heading.svelte';

    // Image loading states
    let isLoading = true;
    let hasError = false;
    let imageLoaded = false;

    function handleImageLoad() {
        isLoading = false;
        imageLoaded = true;
        hasError = false;
    }

    function handleImageError() {
        isLoading = false;
        hasError = true;
        imageLoaded = false;
    }
</script>

<body class="bg-primary-light dark:bg-primary-dark" use:useAnimate={0.1}>
    <Container>
        <Heading
            title="JPMorganChase"
            desc="2024-Now · Fintech, Insight, Summer Analyst"
            newPage={true}
            links={[
                { url: "https://www.jpmorganchase.com/", title: "Visit Website" }
            ]}
        />
      
        <div class="animate w-full overflow-hidden pb-6 relative">
            <!-- Skeleton Loader -->
            {#if isLoading}
                <div class="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse flex items-center justify-center">
                    <div class="text-gray-400 dark:text-gray-500">
                        <svg class="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                </div>
            {/if}

            <!-- Error Placeholder -->
            {#if hasError}
                <div class="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <svg class="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p class="text-gray-500 dark:text-gray-400 text-center">
                        <span class="font-medium">Cannot load image</span><br>
                        <span class="text-sm">Please check your connection and try again</span>
                    </p>
                </div>
            {/if}

            <!-- Actual Image -->
            <img 
                src="/assets/banners/jpmorganchase.jpg" 
                alt="JPMorganChase" 
                class="w-full h-auto object-contain rounded-3xl {isLoading || hasError ? 'hidden' : ''}" 
                on:load={handleImageLoad}
                on:error={handleImageError}
                draggable="false"
                loading="lazy"
                aria-label="JPMorganChase"
            />
        </div>

        <Paragraph 
            title="My Journey" 
            desc="I first joined JPMC through the Spring into Tech Insight Program - a week-long experience featuring networking events, technical workshops, presentations, and a hackathon, where my team took first place. The following year, I was invited back as a Software Engineering Intern within Research, contributing to a Cloud-focused team." 
        />
        
        
        <Footer />
    </Container>
</body>