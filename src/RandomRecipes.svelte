<script>
  export let meals = [];
  import RecipeCard from "./RecipeCard.svelte";
</script>

<h2>Random Recipes</h2>
<div class="recipes">
  {#each meals as meal}
    <RecipeCard {meal} />
  {/each}
</div>

<style>
  .recipes {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
</style>
