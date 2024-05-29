// timeUnit.js
export function formatTime(minutes) {
  let times = ''
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (hours > 0 && remainingMinutes > 0) {
    times = `${hours} hours ${remainingMinutes} minutes`
  } else if (hours === 0 && remainingMinutes > 0) {
    times = `${remainingMinutes} minutes`
  } else if (hours > 0 && remainingMinutes === 0) {
    times = `${hours} hours `
  } else if (hours === 0 && remainingMinutes === 0) {
    times = `15 minutes`
  }
  return times
}
export function countIngredients(ingredientLines) {
  return ingredientLines.length
}

export function calories(cal, servings) {
  const numero = cal / servings
  const redondeado = numero.toFixed(2)
  return redondeado
}
export function calDigest(calDigest, servings) {
  const numero = calDigest / servings
  const redondeado = numero.toFixed(1)
  return redondeado
}
