<script setup>
import { ref, onMounted, watch, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  countIngredients,
  calories,
  calDigest,
  formatTimeRecipeInfo,
} from '@/composables/recipeUtils'
import useSavedRecipes from '@/composables/useSavedRecipes'
import useRecipeDetails from '@/composables/useRecipeDetails'
import { shareOnWhatsApp } from '@/composables/whatsappUtils.js'

import { generatePDF } from '@/composables/genratePdf'

const NotSaved = defineAsyncComponent(() => import('@/assets/svgs/NotSaved.vue'))
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))

function base64Decode(str) {
  try {
    return decodeURIComponent(escape(atob(str)))
  } catch (error) {
    throw new Error('Failed to decode base64 string')
  }
}

const route = useRoute()
const router = useRouter()
const recipeId = route.params.recipeId

const { recipe, fetchRecipeDetails, errorMessage } = useRecipeDetails(recipeId)
const { isSaved, toggleSaved } = useSavedRecipes()

const ingredientCount = ref(0)
const ingredientCalories = ref(0)
const formattedTime = ref([])

const decodeAndFetchRecipe = async () => {
  try {
    const decodedRecipeId = base64Decode(recipeId)
    await fetchRecipeDetails(decodedRecipeId)
  } catch (error) {
    errorMessage.value = 'Invalid recipe ID. Redirecting to home page...'
    console.error('Error fetching recipe details:', error)
    setTimeout(() => {
      router.push('/home')
    }, 3000)
  }
}

onMounted(() => {
  decodeAndFetchRecipe()
})

watch(recipe, () => {
  if (recipe.value) {
    ingredientCount.value = countIngredients(recipe.value.ingredientLines)
    ingredientCalories.value = calories(recipe.value.calories, recipe.value.yield)
    formattedTime.value = formatTimeRecipeInfo(recipe.value.totalTime)
  }
})

const shareRecipeOnWhatsApp = () => {
  const currentRecipeURL = window.location.href // optengo la url de la receta actual basada en la ruta de vue Router

  shareOnWhatsApp(currentRecipeURL)
}
</script>

<template>
  <section class="info-recipe">
    <template v-if="recipe">
      <div class="info-recipe__title">
        <article @click="toggleSaved(recipe)" class="heart">
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
    <template v-else-if="errorMessage">
      <div class="error-message">
        <p>Oops! Something went wrong while fetching recipes.</p>
        <p>Please check your internet connection and try again later.</p>
        <p>{{ errorMessage }}</p>
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
        Compartir en WhatsApp
      </button>
    </article>
  </section>
</template>

<style lang="scss" scoped>
/* stylelint-disable-next-line scss/at-import-partial-extension */
@import '../assets/styles/scss/recipeinfo.scss';
</style>
