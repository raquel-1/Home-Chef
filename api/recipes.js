// src/composables/useRecipeDetails.js
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useRecipeDetails() {
  const recipe = ref(null)
  const errorMessage = ref('')
  const router = useRouter()

  const fetchRecipeDetails = async (recipeId) => {
    try {
      const response = await fetch(`/api/recipes?mealType=brunch&count=50`)
      if (!response.ok) throw new Error('Error fetching recipe details')

      const data = await response.json()

      console.log('Decoded recipeId:', recipeId)
      console.log(
        'All fetched recipe URIs:',
        data.hits.map((hit) => hit.recipe.uri),
      )

      const shortId = recipeId.split('#recipe_')[1]

      recipe.value = data.hits.find((r) => r.recipe.uri.endsWith(shortId)) || null

      if (!recipe.value) throw new Error('Recipe not found')
    } catch (error) {
      errorMessage.value = 'Error fetching recipe details'
      console.error(error)
      setTimeout(() => router.push('/home'), 3000)
    }
  }

  return {
    recipe,
    errorMessage,
    fetchRecipeDetails,
  }
}
