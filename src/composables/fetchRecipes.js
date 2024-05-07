import { watchEffect } from 'vue'

export function fetchRecipes(store) {
  const fetchData = async () => {
    try {
      const APP_ID = 'cc8cc6be'
      const APP_KEY = '4780bae104c5949415d89b10128fa192'
      const query = 'cake'
      const apiUrl = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}`

      const response = await fetch(apiUrl)

      if (!response.ok) {
        throw new Error('Hubo un problema al solicitar los datos')
      }

      const data = await response.json()
      store.setData(data.hits)
    } catch (error) {
      store.setError(error)
    }
  }

  fetchData()
}
