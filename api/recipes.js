// api/recipes.js
export default async function handler(req, res) {
  const { mealType, count } = req.query

  if (!mealType || !count) {
    return res.status(400).json({ error: 'Missing mealType or count' })
  }

  const appId = process.env.VITE_EDAMAM_APP_ID
  const appKey = process.env.VITE_EDAMAM_APP_KEY

  if (!appId || !appKey) {
    return res.status(500).json({ error: 'Missing API credentials' })
  }

  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=&app_id=${appId}&app_key=${appKey}&mealType=${mealType}&to=${count}`,
    )

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error from Edamam API' })
    }

    const data = await response.json()
    res.status(200).json(data.hits.map((hit) => hit.recipe))
  } catch (err) {
    console.error('Error fetching recipes:', err)
    res.status(500).json({ error: 'Failed to fetch recipes' })
  }
}
