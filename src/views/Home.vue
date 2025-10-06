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
  if (recipesStore.recipes.length === 0) {
    await recipesStore.loadRecipes()
  }
})

function filterRecipesByMealType(mealType) {
  return computed(() =>
    recipesStore.recipes.filter((recipe) => recipe.mealType.includes(mealType)),
  )
}

const filteredBreakfastRecipes = filterRecipesByMealType('breakfast')
const filteredBrunchRecipes = filterRecipesByMealType('brunch')
const filteredSnackRecipes = filterRecipesByMealType('snack')
</script>

<template>
  <Header />

  <article v-if="recipesStore.isLoading">Loading...</article>
  <article v-else-if="recipesStore.error">{{ recipesStore.error }}</article>

  <article v-else>
    <Tabs>
      <TabItem title="Breakfast">
        <template v-for="recipe in filteredBreakfastRecipes" :key="recipe.uri">
          <Card :dataObject="{ recipe }" />
        </template>
        <ShowMore />
      </TabItem>
      <TabItem title="Brunch">
        <template v-for="recipe in filteredBrunchRecipes" :key="recipe.uri">
          <Card :dataObject="{ recipe }" />
        </template>
        <ShowMore />
      </TabItem>
      <TabItem title="Snack">
        <template v-for="recipe in filteredSnackRecipes" :key="recipe.uri">
          <Card :dataObject="{ recipe }" />
        </template>
        <ShowMore />
      </TabItem>
    </Tabs>
  </article>

  <Health />
</template>

<style lang="scss" scoped>
/* Tus estilos existentes */
</style>

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
