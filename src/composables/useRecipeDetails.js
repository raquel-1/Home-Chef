// src/ comopsables/useRecipeDetails
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
      recipe.value = data.hits.find((r) => r.recipe.uri.endsWith(recipeId)) || null

      if (!recipe.value) {
        errorMessage.value = 'Recipe not found. Redirecting to home...'
        setTimeout(() => router.push('/home'), 3000)
      }
    } catch (error) {
      errorMessage.value = 'Oops! Something went wrong while fetching the recipe.'
      console.error(error)
    }
  }

  return {
    recipe,
    errorMessage,
    fetchRecipeDetails,
  }
}
