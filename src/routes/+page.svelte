<script>
  import { fetchCategories, fetchRandomMeals, searchMeals, fetchByCategory } from "$lib";
  import { onMount } from "svelte";
  import SearchBar from "../SearchBar.svelte";
  import CategoryList from "../CategoryList.svelte";
  import RandomRecipes from "../RandomRecipes.svelte";
  import RecipeCard from "../RecipeCard.svelte";

  // import Users from "../Users.svelte";
  // import Form from "../Form.svelte";
  let randomMeals = [];
  let categories = [];
  let searchResults = [];
  let hasSearched = false;

  onMount(async () => {
    randomMeals = await fetchRandomMeals();
    categories = await fetchCategories();
  });
  async function handleSearch(query) {
    searchResults = await searchMeals(query);
    hasSearched = true;
  }
  async function handleCategoryClick(category) {
    searchResults = await fetchByCategory(category);
    console.log(searchResults);
    
  }
</script>

<main class="container">
  <!-- <h1>Hello all users</h1> -->
  <!-- <Form/>
    <Users/> -->
  <h1>Recipes</h1>
  <CategoryList {categories} onSelect={handleCategoryClick} />
  <SearchBar on:search={(e) => handleSearch(e.detail)} />
  {#if searchResults.length > 0}
    <div>
      <h2>Results</h2>
      <div class="grid">
        {#each searchResults as meal}
          <RecipeCard {meal} />
        {/each}
      </div>
    </div>
  {:else if hasSearched}
    <p>No results found</p>
  {/if}
  <RandomRecipes meals={randomMeals} />
</main>

<style>
  .container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-family: Arial, sans-serif;
    padding: 1rem;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
</style>
