// src/services/recipesService.js
const getRecipesByMealType = async (mealType, count) => {
  const response = await fetch(`/api/recipes?mealType=${mealType}&count=${count}`)
  const data = await response.json()
  return data
}

export const fetchRecipes = async () => {
  const [breakfastRecipes, brunchRecipes, snackRecipes] = await Promise.all([
    getRecipesByMealType('breakfast', 10),
    getRecipesByMealType('brunch', 10),
    getRecipesByMealType('snack', 10),
  ])

  return [...breakfastRecipes, ...brunchRecipes, ...snackRecipes]
}
