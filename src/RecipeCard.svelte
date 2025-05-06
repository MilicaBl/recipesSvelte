<script>
  export let meal = {};
</script>

<div>
  <div class="card">
    <img src={meal.strMealThumb} alt={meal.strMeal} />
    <h3>{meal.strMeal}</h3>
    {#if meal.strInstructions}
      <p>{meal.strInstructions.slice(0, 100)}...</p>
    {/if}
  </div>
</div>

<style>
  .card {
    width: 250px;
    min-height: 440px;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    background-color: rgb(197, 215, 215);
  }
  img {
    width: 100%;
    border-radius: 8px;
  }
</style>
