// fetchRecipes.js
import { watchEffect } from 'vue'

export function fetchRecipes(store) {
  const fetchData = async () => {
    try {
      const API_KEY = 'eb620343b4bb4607a9669db3bcbb609d'
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1`,
      )
      if (!response.ok) {
        throw new Error('Hubo un problema al solicitar los datos')
      }
      const data = await response.json()
      store.setData(data)
      console.log(data) // si veo datos
    } catch (error) {
      store.setError(error)
      throw new Error(`Error al obtener recetas: ${error}`)
    }
  }
  watchEffect(() => {
    fetchData()
  })
}
