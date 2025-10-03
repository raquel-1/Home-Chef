// api/recipes.js
import fetch from 'node-fetch'

export default async function handler(req, res) {
  const { mealType, count } = req.query
  const APP_ID = process.env.EDAMAM_APP_ID
  const APP_KEY = process.env.EDAMAM_APP_KEY

  const url = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}&to=${count}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json(data.hits.map((hit) => hit.recipe))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch recipes' })
  }
}
