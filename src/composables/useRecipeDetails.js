// src/composables/useRecipeDetails.js
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { APP_ID, APP_KEY } from '@/constants/credentials'

export default function useRecipeDetails(recipeId) {
  const recipe = ref(null)
  const router = useRouter()

  const fetchRecipeDetails = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${encodeURIComponent(recipeId)}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      )
      const data = await response.json()
      if (data.hits.length > 0) {
        recipe.value = data.hits[0].recipe
      } else {
        throw new Error('Recipe not found')
      }
    } catch (error) {
      console.error('Error fetching recipe details:', error)
      router.push('/home')
    }
  }

  return {
    recipe,
    fetchRecipeDetails,
  }
}
