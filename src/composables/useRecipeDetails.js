// src/ comopsables/useRecipeDetails
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useRecipeDetails() {
  const recipe = ref(null)
  const errorMessage = ref('')
  const router = useRouter()

  const fetchRecipeDetails = async (recipeId) => {
    try {
      const response = await fetch(`/api/recipes?mealType=brunch&count=50`) // fetch mas recetas y filtras por id
      if (!response.ok) throw new Error('Error fetching recipe details')
      const data = await response.json()
      recipe.value = data.hits.find((r) => r.recipe.uri.includes(recipeId)) || null
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
