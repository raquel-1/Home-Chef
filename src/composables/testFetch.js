const fetchRecipes = async () => {
  try {
    const API_KEY = 'TU_API_KEY' // Reemplaza 'TU_API_KEY' con tu clave de API Spoonacular
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=5`,
    )
    if (!response.ok) {
      throw new Error('Hubo un problema al solicitar los datos')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(`Error al obtener recetas: ${error}`)
  }
}

export { fetchRecipes }
