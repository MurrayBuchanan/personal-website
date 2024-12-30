<script>
  export let title = "";
  export let desc = "";
  export let custom = "";
</script>

<main class="py-6 animate">
  <p class="pt-4 text-base text-gray-700 dark:text-gray-300 {custom}">{title}</p>
  <p class="text-base text-gray-400 dark:text-gray-500 {custom}">{desc}</p>
</main>