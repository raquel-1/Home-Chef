// src/stores/recipesStore.js

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchRecipes } from '@/services/recipesService'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const loadRecipes = async () => {
    isLoading.value = true
    error.value = null
    try {
      recipes.value = await fetchRecipes()
      if (!recipes.value) recipes.value = [] // fallback
    } catch (err) {
      console.error('Error loading recipes:', err)
      error.value = 'There was an error fetching recipes.'
      recipes.value = [] // fallback
    } finally {
      isLoading.value = false
    }
  }

  return { recipes, isLoading, error, loadRecipes }
})
