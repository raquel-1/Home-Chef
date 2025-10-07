// src/composables/usesearch.js

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const results = ref([])
const isLoading = ref(false)
const errorMessage = ref('')

export default function useSearch() {
  const router = useRouter()

  const searchRecipes = async (query) => {
    isLoading.value = true
    results.value = []
    errorMessage.value = ''

    try {
      const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=30`
      const response = await fetch(url) // <- falta esto
      if (!response.ok) throw new Error(await response.text())
      const data = await response.json()
      results.value = data.hits || []
    } catch (error) {
      console.error('Error searching recipes:', error)
      errorMessage.value = 'Error fetching recipes. Intenta de nuevo más tarde.'
    } finally {
      isLoading.value = false
    }
  }

  return { results, isLoading, errorMessage, searchRecipes }
}
