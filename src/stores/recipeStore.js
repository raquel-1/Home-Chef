// recipeStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecipeStore = defineStore('recipes', () => {
  const data = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  const setData = (newData) => {
    data.value = newData
    isLoading.value = false
    console.log('Data updated:', data.value) // si veo valores
  }

  const setError = (newError) => {
    error.value = newError
    isLoading.value = false
  }

  const startLoading = () => {
    isLoading.value = true
  }

  const getters = {
    getRecipesDataOrError: () => {
      if (error.value) {
        return `Error: ${error.value.message}`
      }
      return data.value
    },
  }
  return { data, error, isLoading, setData, setError, startLoading, ...getters }
})
