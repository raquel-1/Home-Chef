// src/services/recipesService.js
const getRecipesByMealType = async (mealType, count) => {
  const url = `/api/recipes?mealType=${mealType}&count=${count}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.error('Error fetching', mealType, await response.text())
      return []
    }
    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.error('Fetch failed for', mealType, err)
    return []
  }
}

export const fetchRecipes = async () => {
  const [breakfastRecipes, brunchRecipes, snackRecipes] = await Promise.all([
    getRecipesByMealType('breakfast', 10),
    getRecipesByMealType('brunch', 10),
    getRecipesByMealType('snack', 10),
  ])
  return [...breakfastRecipes, ...brunchRecipes, ...snackRecipes]
}
