import { defineStore } from 'pinia'
import { fetchRecipes } from '@/services/recipesService'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async loadRecipes() {
      this.isLoading = true
      this.error = null
      try {
        this.recipes = await fetchRecipes()
      } catch (error) {
        this.error = 'Error recipes tabs'
      } finally {
        this.isLoading = false
      }
    },
  },
})
