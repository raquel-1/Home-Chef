import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useRecipeStore = defineStore('recipes', () => {
  const data = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  const setData = (newData) => {
    data.value = newData
    isLoading.value = false
  }

  const setError = (newError) => {
    error.value = newError
    isLoading.value = false
  }

  const startLoading = () => {
    isLoading.value = true
  }

  const getRecipesDataOrError = computed(() => {
    if (isLoading.value) {
      return 'Cargando...'
    }
    if (error.value) {
      return `Error: ${error.value.message}`
    }
    return data.value
  })

  // Acción para cargar los datos
  const loadRecipes = async () => {
    startLoading()
    try {
      const APP_ID = 'cc8cc6be'
      const APP_KEY = '4780bae104c5949415d89b10128fa192'
      const query = 'fish'
      const apiUrl = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}`

      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }
      const data = await response.json()
      setData(data.hits)
    } catch (error) {
      setError(error)
    } finally {
      isLoading.value = false
    }
  }

  // Ejecuta la acción al inicializar el store
  loadRecipes()

  return {
    data,
    error,
    isLoading,
    setData,
    setError,
    startLoading,
    getRecipesDataOrError,
  }
})
