// api/recipes.js
export default async function handler(req, res) {
  const { mealType, count } = req.query

  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=&app_id=${process.env.VITE_EDAMAM_APP_ID}&app_key=${process.env.VITE_EDAMAM_APP_KEY}&mealType=${mealType}&to=${count}`,
    )

    if (!response.ok) {
      throw new Error(`Edamam API error: ${response.statusText}`)
    }

    const data = await response.json()
    res.status(200).json(data.hits.map((hit) => hit.recipe))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch recipes' })
  }
}
