// src/composables/useDiet.js
import { ref } from 'vue'
import { fetchRecipesByDiet } from '@/services/recipesService'

export function useDiet() {
  const recipes = ref([])
  const errorMessage = ref('')

  const fetchRecipes = async (diet) => {
    try {
      recipes.value = await fetchRecipesByDiet(diet)
    } catch (error) {
      console.error('Error fetching recipes by diet:', error)
      errorMessage.value = 'There was an error fetching recipes for this diet.'
    }
  }

  return {
    recipes,
    errorMessage,
    fetchRecipes,
  }
}
