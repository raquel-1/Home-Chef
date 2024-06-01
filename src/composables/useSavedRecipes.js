import { ref, watchEffect } from 'vue'

const savedRecipes = ref(JSON.parse(localStorage.getItem('savedRecipes')) || [])

const updateLocalStorage = () => {
  localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes.value))
}

const useSavedRecipes = () => {
  const isSaved = (recipe) => {
    return savedRecipes.value.some((savedRecipe) => savedRecipe.uri === recipe.uri)
  }

  const toggleSaved = (recipe) => {
    if (isSaved(recipe)) {
      savedRecipes.value = savedRecipes.value.filter(
        (savedRecipe) => savedRecipe.uri !== recipe.uri,
      )
    } else {
      savedRecipes.value.push(recipe)
    }
    updateLocalStorage()
  }

  return {
    savedRecipes,
    isSaved,
    toggleSaved,
  }
}

export default useSavedRecipes
