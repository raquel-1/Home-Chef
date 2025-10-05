export default async function handler(req, res) {
  const appID = process.env.EDAMAM_APP_ID
  const appKey = process.env.EDAMAM_APP_KEY
  const mealType = req.query.mealType || 'breakfast'
  const count = req.query.count || 10

  // Si el frontend pide "all", buscamos varias categorías
  const mealTypes =
    mealType === 'all' ? ['breakfast', 'brunch', 'lunch', 'dinner', 'snack'] : [mealType]

  try {
    const results = await Promise.all(
      mealTypes.map(async (type) => {
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=recipe&app_id=${appID}&app_key=${appKey}&mealType=${type}&to=${count}`
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Edamam API error: ${response.status}`)
        const data = await response.json()
        return data.hits || []
      }),
    )

    const allRecipes = results.flat() // unimos todas las recetas

    res.status(200).json({ hits: allRecipes })
  } catch (error) {
    console.error('Error fetching recipes:', error)
    res.status(500).json({ error: 'Error fetching recipes from Edamam' })
  }
}
