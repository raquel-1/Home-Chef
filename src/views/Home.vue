<script setup>
import { defineAsyncComponent, onMounted, computed } from 'vue'
import { useRecipesStore } from '@/stores/recipesStore'

const Header = defineAsyncComponent(() => import('@/components/header/Header.vue'))
const Tabs = defineAsyncComponent(() => import('@/components/tabs/Tabs.vue'))
const TabItem = defineAsyncComponent(() => import('@/components/tabs/TabItem.vue'))
const Card = defineAsyncComponent(() => import('@/components/tabs/Card.vue'))
const ShowMore = defineAsyncComponent(() => import('@/components/tabs/ShowMore.vue'))
const Health = defineAsyncComponent(() => import('@/components/health/Health.vue'))

const recipesStore = useRecipesStore()

onMounted(async () => {
  try {
    if (recipesStore.recipes.length === 0) {
      await recipesStore.loadRecipes()
    }
  } catch (err) {
    console.error('Error recipes tabs:', err)
  }
})

function filterRecipesByMealType(mealType) {
  return computed(() => {
    return recipesStore.recipes.filter((recipe) => {
      return recipe.mealType.includes(mealType)
    })
  })
}

const filteredBreakfastRecipes = filterRecipesByMealType('breakfast')
const filteredBrunchRecipes = filterRecipesByMealType('brunch')
const filteredSnackRecipes = filterRecipesByMealType('snack')
</script>

<template>
  <Header />
  <article v-if="recipesStore.isLoading" class="alternative">Loading...</article>
  <article v-else-if="recipesStore.error" class="alternative">
    {{ recipesStore.error }}
  </article>
  <article
    v-else-if="
      !recipesStore.error && !recipesStore.isLoading && recipesStore.recipes.length === 30
    "
  >
    <Tabs>
      <TabItem title="breakfast">
        <template v-for="recipe in filteredBreakfastRecipes" :key="recipe.uri">
          <Card :dataObject="{ recipe: recipe }" />
        </template>
        <ShowMore />
      </TabItem>
      <TabItem title="brunch">
        <template v-for="recipe in filteredBrunchRecipes" :key="recipe.uri">
          <Card :dataObject="{ recipe: recipe }" />
        </template>
        <ShowMore />
      </TabItem>
      <TabItem title="snack">
        <template v-for="recipe in filteredSnackRecipes" :key="recipe.uri">
          <Card :dataObject="{ recipe: recipe }" />
        </template>
        <ShowMore />
      </TabItem>
    </Tabs>
  </article>

  <Health />
</template>

<style lang="scss" scoped>
.alternative {
  padding: map-get($map: $sizes, $key: s-general-padding);
  @include flex();
  padding: 0.5em;

  @include responsive(50em) {
    padding: map-get($map: $sizes, $key: s-general-padding-tablet);
  }
  @include responsive(31.25em) {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
  }
  @include responsiveH(31.25em) {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
  }
}
</style>
