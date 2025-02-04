<script>
  export let title = "";
  export let desc = "";
  export let custom = "";
</script>

<main class="animate">
  <p class="text-base font-normal text-secondary-light dark:text-secondary-dark {custom}">{title}</p>
  <p class="pb-6 text-base font-normal text-tertiary-light dark:text-tertiary-dark {custom}">{desc}</p>
</main>