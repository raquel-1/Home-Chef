// src/stores/recipesStore.js
import { defineStore } from 'pinia'
import { fetchRecipes } from '@/services/recipesService'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [],
  }),
  actions: {
    async loadRecipes() {
      try {
        this.recipes = await fetchRecipes()
      } catch (err) {
        console.error('Error loading recipes:', err)
      }
    },
  },
})
