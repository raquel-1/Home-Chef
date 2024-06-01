<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { useRecipesStore } from '@/stores/recipesStore'
import { useRoute } from 'vue-router'
import useSearch from '@/composables/useSearch'

const InputSearch = defineAsyncComponent(
  () => import('@/components/header/InputSearch.vue'),
)
const Card = defineAsyncComponent(() => import('@/components/tabs/Card.vue'))

const { results, isLoading, errorMessage, searchRecipes } = useSearch()
const recipesStore = useRecipesStore()
const route = useRoute()

const showDefaultRecipes = ref(true)

onMounted(async () => {
  if (route.path === '/recipes' && results.value.length === 0) {
    try {
      if (recipesStore.recipes.length === 0) {
        await recipesStore.loadRecipes()
      }
    } catch (err) {
      console.error('Error recipes tabs:', err)
    }
  }
})

const handleSearch = async (query) => {
  showDefaultRecipes.value = false
  await searchRecipes(query)
  if (results.value.length === 0 && !errorMessage.value) {
    showDefaultRecipes.value = true
  }
}
</script>

<template>
  <div class="recipes">
    <article class="recipes__search">
      <InputSearch @search="handleSearch" />
    </article>
    <template v-if="isLoading">Loading...</template>
    <template v-else-if="errorMessage">{{ errorMessage }}</template>
    <section class="recipes__tabs-recipes" v-else>
      <template v-if="results.length > 0">
        <template v-for="recipe in results" :key="recipe.uri">
          <Card :dataObject="{ recipe: recipe }" />
        </template>
      </template>
      <template v-else-if="showDefaultRecipes">
        <template v-for="recipe in recipesStore.recipes" :key="recipe.uri">
          <Card :dataObject="{ recipe: recipe }" />
        </template>
      </template>
      <template v-else>
        <p>No recipe found, try another one.</p>
        <section class="recipes__tabs-recipes">
          <template v-for="recipe in recipesStore.recipes" :key="recipe.uri">
            <Card :dataObject="{ recipe: recipe }" />
          </template>
        </section>
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.recipes {
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
  &__search {
    width: 100%;
    @include flex();
    padding: 1em 0;
  }
  &__tabs-recipes {
    margin: 2em 0;
    @include flex(center, center, space-between);
    gap: 1.5em;
    flex-wrap: wrap;
  }
}
</style>
