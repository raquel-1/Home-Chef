// src/services/recipesService.js
const getRecipesByMealType = async (mealType, count) => {
  try {
    const response = await fetch(`/api/recipes?mealType=${mealType}&count=${count}`)
    if (!response.ok) throw new Error(`Fetch failed for ${mealType}`)
    const data = await response.json()
    return data.hits ? data.hits.map((hit) => hit.recipe) : []
  } catch (err) {
    console.error(err)
    return []
  }
}

export const fetchRecipes = async () => {
  const [breakfast, brunch, snack] = await Promise.all([
    getRecipesByMealType('breakfast', 10),
    getRecipesByMealType('brunch', 10),
    getRecipesByMealType('snack', 10),
  ])
  return [...breakfast, ...brunch, ...snack]
}

export const fetchRecipesByDiet = async (diet) => {
  try {
    const response = await fetch(`/api/recipes?diet=${diet}&mealType=all&count=15`)
    if (!response.ok) throw new Error('Failed to fetch recipes by diet')
    const data = await response.json()
    return data.hits ? data.hits.map((hit) => hit.recipe) : []
  } catch (error) {
    console.error('Error fetching recipes by diet:', error)
    return []
  }
}
