export function formatTime(minutes) {
  let times = ''
  const days = Math.floor(minutes / 1440)
  const remainingMinutesAfterDays = minutes % 1440
  const hours = Math.floor(remainingMinutesAfterDays / 60)
  const remainingMinutes = remainingMinutesAfterDays % 60

  if (days > 0) {
    times = `${days} day${days > 1 ? 's' : ''}`
    if (hours > 0) {
      times += ` ${hours} hour${hours > 1 ? 's' : ''}`
    }
    if (remainingMinutes > 0) {
      times += ` ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`
    }
  } else if (hours > 0) {
    times = `${hours} hour${hours > 1 ? 's' : ''}`
    if (remainingMinutes > 0) {
      times += ` ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`
    }
  } else if (remainingMinutes > 0) {
    times = `${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`
  } else {
    times = '15 minutes'
  }

  return times
}

export function countIngredients(ingredientLines) {
  return ingredientLines.length
}

export function calories(cal, servings) {
  const numero = cal / servings
  const redondeado = numero.toFixed(1)
  return redondeado
}
export function calDigest(calDigest, servings) {
  const numero = calDigest / servings
  const redondeado = numero.toFixed(1)
  return redondeado
}

export function formatTimeRecipeInfo(minutes) {
  if (minutes === 0) {
    return { value: '15', unit: 'minutes' }
  }

  const days = Math.floor(minutes / (60 * 24))
  const remainingMinutes = minutes % (60 * 24)
  const hours = Math.floor(remainingMinutes / 60)
  const remainingMinutesInHour = remainingMinutes % 60

  let value = ''
  let unit = ''

  if (days > 0) {
    value = days.toString()
    unit = days === 1 ? 'day' : 'days'
  } else if (hours > 0) {
    value = `${hours}:${remainingMinutesInHour < 10 ? '0' : ''}${remainingMinutesInHour}`
    unit = 'hours'
  } else {
    value = remainingMinutes.toString()
    unit = 'minutes'
  }

  return { value, unit }
}
