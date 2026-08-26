<script lang="ts">
    import ContentPage from '$lib/components/layout/ContentPage.svelte';
</script>

<ContentPage
    title="Dementia Linguistic Anomaly Detection"
    desc="Researcher & Developer • Speech • NLP • Anomaly Detection"
    links={[{ url: 'https://github.com/MurrayBuchanan/verba-tool', title: 'View Source' }]}
    content={[
        {
            desc: 'This was my final-year dissertation at the University of Strathclyde, supervised by Dr Kieren Egan and awarded a distinction. The question was how to use speech as a signal in dementia rehabilitation: not to diagnose, but to notice linguistic change over time and make that change visible to the people supporting someone living with dementia.',
        },
        {
            title: 'From Conversation to Indicators',
            desc: 'A conversation is recorded on a phone, transcribed and diarised with Azure Speech Services, then run through NLP and LLM feature extraction. An ensemble of models pulls out linguistic markers rather than relying on a single extractor. Those indicators are stored and shown over time—so a shift in language is something you can actually look at, not just a hunch.',
        },
        {
            title: 'Anomaly Detection',
            desc: "Indicators are tracked with statistical process control, using adapted Nelson rules. The aim is to flag meaningful deviations from a person's own baseline, not to compare them against a generic threshold. That distinction mattered: rehabilitation monitoring is about change for this person, not a one-size-fits-all score.",
        },
        {
            title: 'The Tool',
            desc: 'The client is a mobile app for recording, managing profiles and interventions, and viewing metrics and conversation history. The backend handles audio processing, transcription, analysis, and storage on PostgreSQL, with Azure OpenAI in the extraction pipeline and Entra ID for authentication.',
        },
        {
            title: 'Ethics',
            desc: 'This sits in medical informatics, so access control, data handling, and what the tool claims—and does not claim—were part of the design. The source is open; configuration and development access are available on request.',
        },
    ]}
/>
