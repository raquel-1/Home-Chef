// src/stores/recipesStore.js

import { fetchRecipes } from '@/services/recipesService'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])
  const selectedRecipe = ref(null)
  const errorMessage = ref('')

  const loadRecipes = async () => {
    try {
      recipes.value = await fetchRecipes()
    } catch (error) {
      console.error('Error loading recipes:', error)
      errorMessage.value = 'There was an error fetching the recipes.'
    }
  }

  return { recipes, selectedRecipe, errorMessage, loadRecipes }
})
