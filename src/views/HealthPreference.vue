<script setup>
import { defineAsyncComponent, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useHealth } from '@/composables/useHealth'

window.scrollTo(0, 0)

const Card = defineAsyncComponent(() => import('@/components/tabs/Card.vue'))

const router = useRouter()
const route = useRoute()
const healthLabel = ref(route.query.health || '')
const { recipes, errorMessage, fetchRecipes } = useHealth()

onMounted(() => {
  if (healthLabel.value) {
    fetchRecipes(healthLabel.value)
  } else {
    errorMessage.value = 'Health label is required. Redirecting to home page...'
    setTimeout(() => {
      router.replace('/home')
    }, 3000)
  }
})
</script>

<template>
  <div class="health">
    <template v-if="recipes.length">
      <h2 class="health__title">{{ healthLabel }}</h2>
      <div class="health__results">
        <div v-for="recipe in recipes" :key="recipe.recipe.uri" class="recipe">
          <Card :dataObject="recipe" />
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
  </div>
</template>

<style lang="scss" scoped>
.health {
  padding: map-get($map: $sizes, $key: s-general-padding);
  padding-top: map-get($map: $heights, $key: h-navbar);
  min-height: 100vh;

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
    text-transform: capitalize;
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
