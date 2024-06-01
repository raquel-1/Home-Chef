<script setup>
import { defineAsyncComponent, ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  countIngredients,
  calories,
  calDigest,
  formatTimeRecipeInfo,
} from '@/composables/recipeUtils'
import useSavedRecipes from '@/composables/useSavedRecipes'
import useRecipeDetails from '@/composables/useRecipeDetails'
import { createSharedComposable } from '@vueuse/core'

const NotSaved = defineAsyncComponent(() => import('@/assets/svgs/NotSaved.vue'))
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))

const route = useRoute()
const recipeId = route.params.recipeId

const { recipe, fetchRecipeDetails, errorMessage } = useRecipeDetails(recipeId)
const { isSaved, toggleSaved } = useSavedRecipes()

onMounted(() => {
  fetchRecipeDetails()
})

const ingredientCount = ref(0)
const ingredientCalories = ref(0)
const formattedTime = ref([])

watch(recipe, () => {
  if (recipe.value) {
    ingredientCount.value = countIngredients(recipe.value.ingredientLines)
    ingredientCalories.value = calories(recipe.value.calories, recipe.value.yield)
    formattedTime.value = formatTimeRecipeInfo(recipe.value.totalTime)
  }
})
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
  </section>
</template>

<style lang="scss" scoped>
.info-recipe {
  padding: map-get($map: $sizes, $key: s-general-padding);
  padding-top: map-get($map: $heights, $key: h-navbar);
  min-height: 100vh;
  @include responsive() {
    padding: map-get($map: $sizes, $key: s-general-padding-tablet);
    padding-top: map-get($map: $heights, $key: h-navbar);
  }

  @include responsive(31.25em) {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
    padding-top: 0;
  }
  @include responsiveH(31.25em) {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
    padding-top: 0;
  }
  &__title {
    padding: 1.5em 0;
    width: 100%;
    @include flex(row, flex-start, flex-start);
    .heart {
      min-width: 2.5em;
      min-height: 2.5em;
      max-width: 2.5em;
      max-height: 2.5em;
      overflow: hidden;
      margin-right: 1em;
      @include responsive() {
        min-width: 2em;
        min-height: 2em;
        max-width: 2em;
        max-height: 2em;
      }
    }
    .title {
      flex-grow: 1;
      transform: translateY(0.05em);
      font-size: map-get($map: $font-size, $key: fs-big);
      @include responsive() {
        font-size: map-get($map: $font-size, $key: fs-medium);
      }
      @include responsive(31.25em) {
        font-size: map-get($map: $font-size, $key: fs-medium);
      }
    }
  }
  &__info {
    @include flex(row, flex-start, flex-start);
    gap: 2em;
    @include responsive(50em) {
      @include flex(column, flex-start, flex-start);
      gap: 0.7em;
    }
    .info {
      &__img {
        @include flex(row, center, flex-start);
        border-radius: 1em;
        overflow: hidden;
        height: 35em;
        width: 35em;
        min-height: 35em;
        min-width: 35em;
        max-height: 35em;
        max-width: 35em;
        @include responsive(75em) {
          height: 30em;
          width: 30em;
          min-height: 30em;
          min-width: 30em;
          max-height: 30em;
          max-width: 30em;
        }
        @include responsive(67em) {
          height: 25em;
          width: 25em;
          min-height: 25em;
          min-width: 25em;
          max-height: 25em;
          max-width: 25em;
        }
        @include responsive(56.25em) {
          height: 20em;
          width: 20em;
          min-height: 20em;
          min-width: 20em;
          max-height: 20em;
          max-width: 20em;
        }
        @include responsive(23em) {
          height: 18em;
          width: 18em;
          min-height: 18em;
          min-width: 18em;
          max-height: 18em;
          max-width: 18em;
        }
        .card-photo {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      }
      &__details {
        @include flex(column, flex-start, flex-start);
        width: 100%;
        .details {
          &__source {
            @include flex(row, center, flex-start);
            .source {
              font-family: map-get($map: $fonts, $key: f-font-bold);
              margin-left: 0.3em;
            }
          }
          &__i-m-c {
            width: 100%;
            @include flex(center, center, space-between);
            flex-wrap: wrap;
            padding: 2.5em 0;
            gap: 0.5em;
            @include responsive(50em) {
              padding: 1.5em 0;
            }
            .imc {
              border-left: 0.05em solid map-get($map: $colors, $key: c-principal-color);
              padding-left: 0.5em;
              padding-right: 0.5em;
              margin: 0.5em 0;
              &__number {
                font-size: map-get($map: $font-size, $key: fs-extra-big);
                @include responsive(75em) {
                  font-size: map-get($map: $font-size, $key: fs-more-big);
                }
                @include responsive(50em) {
                  font-size: map-get($map: $font-size, $key: fs-big);
                }
                @include responsive(31.25em) {
                  font-size: map-get($map: $font-size, $key: fs-medium);
                }
              }
              &__string {
                font-size: map-get($map: $font-size, $key: fs-small);
                @include responsive(31.25em) {
                  font-size: map-get($map: $font-size, $key: fs-extra-small);
                }
              }
            }
          }
          &__labels {
            width: 100%;
            @include flex(row, center, flex-start);
            flex-wrap: wrap;
            gap: 1em;
            @include responsive(31.25em) {
              gap: 0.5em;
            }
            .labels {
              &__label {
                padding: 0.6em 1.2em;
                border: 0.05em solid map-get($map: $colors, $key: c-principal-color);
                border-radius: 2em;
                color: map-get($map: $colors, $key: c-principal-color);
                @include responsive(50em) {
                  padding: 0.4em 0.8em;
                }
              }
            }
          }
          &__servings {
            width: 100%;
            @include flex(row, center, space-between);
            margin-top: 3em;
            padding-bottom: 1em;
            margin-bottom: 1.5em;
            border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
          }
          &__ingredients {
            list-style-type: disc;
            width: 100%;
            .ingredient {
              margin-bottom: 0.55em;
              text-transform: capitalize;
            }
          }
          &__nutrition {
            width: 100%;
            @include flex(row, center, space-between);
            margin-top: 3em;
            padding-bottom: 1em;
            margin-bottom: 1.5em;
            border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
          }
          &__digest {
            width: 100%;
            @include flex(column, flex-start, center);
            padding: map-get($map: $sizes, $key: s-general-padding-tablet);
            @include responsive(75em) {
              padding: 0;
            }
            @include responsive(50em) {
              padding: map-get($map: $sizes, $key: s-general-padding-tablet);
            }
            @include responsive(31.25em) {
              padding: 0;
            }
            .digest {
              &__item {
                width: 100%;
                @include flex(row, center, space-between);
                margin-bottom: 0.55em;
                border-bottom: 0.05em dotted
                  map-get($map: $colors, $key: c-transparent-dark-principal-color);
                margin-bottom: 0.9em;

                p {
                  margin: 0;
                  padding: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
