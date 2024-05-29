<script setup>
import { defineAsyncComponent, computed, ref, onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'
import { useRoute } from 'vue-router'
import { APP_ID, APP_KEY } from '@/constants/credentials'

const Card = defineAsyncComponent(() => import('@/components/tabs/Card.vue'))

const themeStore = useThemeStore()
const route = useRoute()

const themeClass = computed(() => {
  return themeStore.theme === LIGHT_MODE ? 'theme-light' : 'theme-dark'
})

const recipes = ref([])

const fetchRecipes = async (healthLabel) => {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}&from=0&to=20`,
    )
    const data = await response.json()
    recipes.value = data.hits
  } catch (error) {
    console.error('Error fetching recipes:', error)
  }
}

onMounted(() => {
  const healthLabel = route.query.health
  if (healthLabel) {
    fetchRecipes(healthLabel)
  }
})
</script>

<template>
  <div class="recipes">
    <h2 class="recipes__title">Recipes</h2>
    <div v-if="recipes.length" class="recipes__results">
      <div v-for="recipe in recipes" :key="recipe.recipe.uri" class="recipe">
        <Card :dataObject="recipe" />
      </div>
    </div>
    <div v-else>
      <p>No recipes found.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recipes {
  padding: map-get($map: $sizes, $key: s-general-padding);
  padding-top: map-get($map: $heights, $key: h-navbar);
  min-height: 100vh; /** quitar esto */

  @include responsive(50em) {
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
    padding: 1em 0;
  }
  &__results {
    margin: 0;
    padding: 0;
    width: 100%;
    @include flex(row, center, space-between);
    flex-wrap: wrap;
    gap: 2em;
  }
}
</style>
