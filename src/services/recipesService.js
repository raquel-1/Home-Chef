// src/services/recipesService.js
const getRecipesByMealType = async (mealType, count) => {
  const url = `/api/recipes?mealType=${mealType}&count=${count}`
  const response = await fetch(url)
  if (!response.ok) {
    console.error('Error fetching', mealType, await response.text())
    return []
  }
  return response.json()
}

export const fetchRecipes = async () => {
  const [breakfastRecipes, brunchRecipes, snackRecipes] = await Promise.all([
    getRecipesByMealType('breakfast', 10),
    getRecipesByMealType('brunch', 10),
    getRecipesByMealType('snack', 10),
  ])

  return [...breakfastRecipes, ...brunchRecipes, ...snackRecipes]
}
