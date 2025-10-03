// api/recipes.js
export default async function handler(req, res) {
  const { mealType, count } = req.query

  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=&app_id=${process.env.VITE_EDAMAM_APP_ID}&app_key=${process.env.VITE_EDAMAM_APP_KEY}&mealType=${mealType}&to=${count}`,
    )

    const data = await response.json()
    res.status(200).json(data.hits.map((hit) => hit.recipe))
  } catch (err) {
    console.error('Error fetching recipes:', err)
    res.status(500).json({ error: 'Failed to fetch recipes' })
  }
}
