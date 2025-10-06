<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRecipesStore } from '@/stores/recipesStore'
import useSavedRecipes from '@/composables/useSavedRecipes'
import {
  countIngredients,
  calories,
  calDigest,
  formatTimeRecipeInfo,
} from '@/composables/recipeUtils'
import { shareOnWhatsApp } from '@/composables/whatsappUtils'
import { generatePDF } from '@/composables/genratePdf'

import NotSaved from '@/components/svgs/NotSaved.vue'
import Saved from '@/components/svgs/Saved.vue'

function base64Decode(str) {
  try {
    return decodeURIComponent(escape(atob(str)))
  } catch (error) {
    return null
  }
}

const route = useRoute()
const router = useRouter()
const recipesStore = useRecipesStore()
const { isSaved, toggleSaved } = useSavedRecipes()

const recipeId = route.params.recipeId
const decodedRecipeId = base64Decode(recipeId)

// Computed seguro para la receta
const recipe = computed(() => {
  return recipesStore.selectedRecipe?.uri === decodedRecipeId
    ? recipesStore.selectedRecipe
    : null
})

// Si no hay receta, intenta cargar desde todas las recetas o redirige
onMounted(() => {
  if (!recipe.value) {
    const found = recipesStore.recipes.find((r) => r.uri === decodedRecipeId)
    if (found) recipesStore.selectedRecipe = found
    else setTimeout(() => router.push('/home'), 3000)
  }
})

const ingredientCount = computed(() =>
  recipe.value ? countIngredients(recipe.value.ingredientLines) : 0,
)
const ingredientCalories = computed(() =>
  recipe.value ? calories(recipe.value.calories, recipe.value.yield) : 0,
)
const formattedTime = computed(() =>
  recipe.value ? formatTimeRecipeInfo(recipe.value.totalTime) : [],
)

const shareRecipeOnWhatsAppHandler = () => {
  if (!recipe.value) return
  shareOnWhatsApp(window.location.href)
}

const toggleRecipeSaved = () => {
  if (!recipe.value) return
  toggleSaved(recipe.value)
}
</script>

<template>
  <section class="info-recipe">
    <template v-if="recipe">
      <div class="info-recipe__title">
        <article @click="toggleRecipeSaved" class="heart">
          <NotSaved
            v-if="!isSaved(recipe)"
            :fill="'rgb(248, 0, 186)'"
            :height="'100%'"
            :width="'100%'"
          />
          <Saved v-else :fill="'rgb(248, 0, 186)'" :height="'100%'" :width="'100%'" />
        </article>
        <h2 class="title">{{ recipe.label }}</h2>
      </div>
      <div class="info-recipe__info info">
        <div class="info__img">
          <img class="card-photo" :src="recipe.image" :alt="recipe.label" />
        </div>
        <div class="info__details details">
          <div class="details__source">
            <p>Full recipe in</p>
            <a :href="recipe.url" target="_blank" class="source">{{ recipe.source }}</a>
          </div>
          <ul class="details__i-m-c">
            <li class="imc">
              <span class="imc__number">{{ ingredientCount }}</span>
              <p class="imc__string">ingredients</p>
            </li>
            <div class="imc">
              <span class="imc__number">{{ formattedTime.value }}</span>
              <p class="imc__string">{{ formattedTime.unit }}</p>
            </div>
            <div class="imc">
              <span class="imc__number">{{ ingredientCalories }}</span>
              <p class="imc__string">calories/serving</p>
            </div>
          </ul>
          <ul class="details__labels labels">
            <li
              class="labels__label"
              v-for="dietLabels in recipe.dietLabels"
              :key="recipe.uri"
            >
              <p>{{ dietLabels }}</p>
            </li>
            <li
              class="labels__label"
              v-for="cuisineType in recipe.cuisineType"
              :key="recipe.uri"
            >
              <p>{{ cuisineType }}</p>
            </li>
            <li
              class="labels__label"
              v-for="mealType in recipe.mealType"
              :key="recipe.uri"
            >
              <p>{{ mealType }}</p>
            </li>
          </ul>
          <div class="details__servings">
            <p>Ingredients</p>
            <p>For {{ recipe.yield }} servings</p>
          </div>
          <ul class="details__ingredients">
            <li
              class="ingredient"
              v-for="ingredient in recipe.ingredientLines"
              :key="recipe.uri"
            >
              - {{ ingredient }}
            </li>
          </ul>
          <div class="details__nutrition">
            <p>Nutrition/serving</p>
          </div>
          <ul class="details__digest digest">
            <li class="digest__item" v-for="digest in recipe.digest" :key="recipe.uri">
              <p>{{ digest.label }}</p>
              <p>{{ calDigest(digest.total, recipe.yield) }}{{ digest.unit }}</p>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="error-message">
        <p>Oops! Recipe not found. Redirecting to home...</p>
      </div>
    </template>

    <article v-if="recipe" class="bottom-butons">
      <button
        @click="generatePDF(recipe)"
        aria-label="Download pdf"
        class="bottom-butons__button"
      >
        Generate PDF
      </button>
      <button
        @click="shareRecipeOnWhatsApp"
        aria-label="Share the nutritional information of the recipe on WhatsApp"
        class="bottom-butons__button bottom-butons__button--share"
      >
        Share in WhatsApp
      </button>
    </article>
  </section>
</template>

<style lang="scss" scoped>
/* stylelint-disable-next-line scss/at-import-partial-extension */
@import '../assets/styles/scss/recipeinfo.scss';
</style>
