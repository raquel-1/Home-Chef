// src/services/recipesService.js
const getRecipesByMealType = async (mealType, count) => {
  const response = await fetch(`/api/recipes?mealType=${mealType}&count=${count}`)

  if (!response.ok) {
    throw new Error(`Fetch failed for ${mealType}: ${response.statusText}`)
  }

  const data = await response.json()

  return data.hits ? data.hits.map((hit) => hit.recipe) : []
}

export const fetchRecipes = async () => {
  try {
    const [breakfastRecipes, brunchRecipes, snackRecipes] = await Promise.all([
      getRecipesByMealType('breakfast', 10),
      getRecipesByMealType('brunch', 10),
      getRecipesByMealType('snack', 10),
    ])

    return [...breakfastRecipes, ...brunchRecipes, ...snackRecipes]
  } catch (error) {
    console.error('Error fetching recipes:', error)
    throw error
  }
}
