import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { APP_ID, APP_KEY } from '@/constants/credentials'

export function useHealth() {
  const recipes = ref([])
  const errorMessage = ref('')
  const router = useRouter()

  const fetchRecipes = async (healthLabel) => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}&from=0&to=20`,
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      recipes.value = data.hits
    } catch (error) {
      console.error('Error fetching recipes:', error)
      errorMessage.value =
        'There was an error fetching the recipes. Redirecting to home page...'
      setTimeout(() => {
        router.replace('/home')
      }, 3000)
    }
  }

  return {
    recipes,
    errorMessage,
    fetchRecipes,
  }
}
