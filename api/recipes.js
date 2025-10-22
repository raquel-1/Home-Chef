// api/recipes.js
export default async function handler(req, res) {
  const appID = process.env.EDAMAM_APP_ID
  const appKey = process.env.EDAMAM_APP_KEY

  const query = req.query.q?.trim() || 'recipe'
  const mealType = req.query.mealType?.trim() || ''
  const diet = req.query.diet?.trim() || ''
  const count = parseInt(req.query.count) || 30

  try {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(query)}&app_id=${appID}&app_key=${appKey}&to=${count}`

    if (mealType && mealType !== 'all') {
      url += `&mealType=${encodeURIComponent(mealType)}`
    }

    if (diet) {
      url += `&diet=${encodeURIComponent(diet)}`
    }

    const response = await fetch(url)

    if (!response.ok) {
      console.error(`❌ Edamam error: ${response.status} ${response.statusText}`)
      return res.status(response.status).json({
        hits: [],
        error: `Edamam API error: ${response.statusText}`,
      })
    }

    const data = await response.json()

    const validHits = (data.hits || []).filter(
      (hit) => hit.recipe && hit.recipe.label && hit.recipe.image,
    )

    res.status(200).json({ hits: validHits.slice(0, 30) })
  } catch (error) {
    console.error('❌ Error fetching recipes:', error)
    res.status(500).json({
      hits: [],
      error: 'Error fetching recipes. Try again later.',
    })
  }
}
