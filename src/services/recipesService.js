import { APP_ID, APP_KEY } from '@/constants/credentials'

const getRecipesByMealType = async (mealType, count) => {
  const url = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}&to=${count}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText)
  }

  const data = await response.json()
  return data.hits.map((hit) => hit.recipe)
}

export const fetchRecipes = async () => {
  try {
    const [breakfastRecipes, brunchRecipes, snackRecipes] = await Promise.all([
      getRecipesByMealType('breakfast', 10),
      getRecipesByMealType('brunch', 10),
      getRecipesByMealType('snack', 10),
    ])

    const allRecipes = [...breakfastRecipes, ...brunchRecipes, ...snackRecipes]

    return allRecipes
  } catch (error) {
    console.error('Error fetching recipes:', error)
    throw error
  }
}
