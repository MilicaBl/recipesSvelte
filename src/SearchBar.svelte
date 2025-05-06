<script>
  import { createEventDispatcher } from "svelte";

  let query = "";
  const dispatch = createEventDispatcher();

  function handleSearch() {
    if (query.trim()) {
      dispatch("search", query.trim());
    }
  }
</script>

<div class="search">
  <input bind:value={query} placeholder="Search recipes..." />
  <button on:click={handleSearch}>Search</button>
</div>

<style>
  .search {
    margin-bottom: 1rem;
  }
  input {
    padding: 0.5rem;
    width: 200px;
  }
  button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
  }
</style>
