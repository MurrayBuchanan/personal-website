<script>
  export let placeholder = "Adaptive Placeholder";
</script>

<main class="animate">
  <div class="relative w-full">
    <input 
      type="text" 
      required 
      placeholder=" " 
      class="peer w-full px-4 py-3 bg-primary-light dark:bg-primary-dark border border-tertiary-light dark:border-tertiary-dark rounded-full focus:border-secondary-light focus:dark:border-secondary-dark focus:outline-none transition duration-150 ease-in-out"
    />
    
    <label 
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-light dark:bg-primary-dark px-2 text-secondary-light dark:text-secondary-dark text-sm duration-150 ease-in-out 
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-tertiary-light dark:peer-placeholder-shown:text-tertiary-dark 
      peer-focus:top-0 peer-focus:text-sm peer-focus:text-secondary-light dark:peer-focus:text-secondary-dark peer-valid:top-0 peer-valid:text-sm peer-valid:text-secondary-light dark:peer-valid:text-secondary-dark">
      {placeholder}
    </label>
  </div>
</main>