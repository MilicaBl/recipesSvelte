const url ='https://www.themealdb.com/api/json/v1/1'

export async function fetchRandomMeals(count = 9) {
    const meals = [];
    for (let i = 0; i < count; i++) {
      const res = await fetch(`${url}/random.php`);
      const data = await res.json();
      if (data.meals) meals.push(data.meals[0]);
    }
    return meals;
  }
  
  export async function searchMeals(query) {
    const res = await fetch(`${url}/search.php?s=${query}`);
    const data = await res.json();
    return data.meals || [];
  }
  
  export async function fetchCategories() {
    const res = await fetch(`${url}/categories.php`);
    const data = await res.json();
    return data.categories || [];
  }
  
  export async function fetchByCategory(category) {
    const res = await fetch(`${url}/filter.php?c=${category}`);
    const data = await res.json();
    return data.meals || [];
  }