// src/composables/useRecipeDetails.js
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { APP_ID, APP_KEY } from '@/constants/credentials'

export default function useRecipeDetails(recipeId) {
  const recipe = ref(null)
  const errorMessage = ref('')
  const router = useRouter()

  const fetchRecipeDetails = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${encodeURIComponent(recipeId)}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      if (data.hits.length > 0) {
        recipe.value = data.hits[0].recipe
      } else {
        throw new Error('Recipe not found')
      }
    } catch (error) {
      errorMessage.value =
        'There was an error fetching the recipe details. Redirecting to home page...'
      console.error('Error fetching recipe details:', error)
      setTimeout(() => {
        router.push('/home')
      }, 3000)
    }
  }

  return {
    recipe,
    errorMessage,
    fetchRecipeDetails,
  }
}
