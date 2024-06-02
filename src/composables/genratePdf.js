/* eslint-disable new-cap */
import { jsPDF } from 'jspdf'
import { calories, calDigest } from '@/composables/recipeUtils'

export const generatePDF = (recipe) => {
  const doc = new jsPDF()

  doc.text(recipe.label, 10, 10)

  doc.text('- NUTRITIONAL INFORMATION - ', 20, 20)

  const caloriesServing = calories(recipe.calories, recipe.yield)
  doc.text(`Calories: ${caloriesServing}`, 30, 30)

  let y = 40
  recipe.digest.forEach((digest) => {
    doc.text(
      `${digest.label}: ${calDigest(digest.total, recipe.yield)} ${digest.unit}`,
      30,
      y,
    )
    y += 10 // posicion de la siguiente linea
  })

  doc.save('recipe.pdf')
}
