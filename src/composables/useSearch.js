// src/composables/useSearch.js
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { APP_ID, APP_KEY } from '@/constants/credentials'

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
      const response = await fetch(
        `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      if (data.hits.length > 0) {
        results.value = data.hits.map((hit) => hit.recipe)
      } else {
        errorMessage.value = 'No recipes found'
      }
    } catch (error) {
      console.error('Error searching recipes:', error)
      errorMessage.value =
        'There was an error fetching the recipes. Please try again later.'
    } finally {
      isLoading.value = false
    }
  }

  const handleSearch = async (query, currentPath) => {
    await searchRecipes(query)
    if (currentPath === '/home') {
      router.push('/recipes')
    }
  }

  return {
    results,
    isLoading,
    errorMessage,
    searchRecipes,
    handleSearch,
  }
}
