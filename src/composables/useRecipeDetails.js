// src/ composables/useRecipeDetails
const fetchRecipeDetails = async (recipeId) => {
  const savedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'))
  if (savedRecipe?.uri === recipeId) {
    recipe.value = savedRecipe
  } else {
    errorMessage.value = 'Recipe not found. Redirecting to home...'
  }
}
