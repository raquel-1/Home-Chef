// /api/recipes.js
export default async function handler(req, res) {
  const appID = process.env.EDAMAM_APP_ID
  const appKey = process.env.EDAMAM_APP_KEY
  const mealType = req.query.mealType || 'breakfast'
  const count = req.query.count || 10

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=recipe&app_id=${appID}&app_key=${appKey}&mealType=${mealType}&to=${count}`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Edamam API error: ${response.status}`)
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error fetching recipes from Edamam' })
  }
}
