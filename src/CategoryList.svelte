<script>
  export let categories = [];
  export let onSelect;
</script>

<div class="categories">
  <h2>Categories</h2>
  {#each categories as cat}
    <button class="chip" on:click={() => onSelect(cat.strCategory)}>{cat.strCategory}</button>
  {/each}
</div>

<style>
  h2 {
    width: 100%;
  }
  .categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  .chip {
    all: unset;
    background: #eee;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    cursor: pointer;
  }
  .chip:hover {
    background-color: rgb(197, 215, 215);
  }
</style>
