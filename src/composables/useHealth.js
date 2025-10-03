// src/composables/useHealth.js
import { ref } from 'vue'
import { fetchRecipes } from '@/services/recipesService'

export function useHealth() {
  const recipes = ref([])
  const errorMessage = ref('')

  const loadHealthRecipes = async () => {
    try {
      recipes.value = await fetchRecipes()
    } catch (error) {
      console.error('Error fetching recipes:', error)
      errorMessage.value = 'There was an error fetching the recipes.'
    }
  }

  return {
    recipes,
    errorMessage,
    loadHealthRecipes,
  }
}
