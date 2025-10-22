<script setup>
import { defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { useRecipesStore } from '@/stores/recipesStore'
import { useRoute, useRouter } from 'vue-router'
import useSearch from '@/composables/useSearch'

window.scrollTo(0, 0)

const router = useRouter()

const InputSearch = defineAsyncComponent(
  () => import('@/components/header/InputSearch.vue'),
)
const Card = defineAsyncComponent(() => import('@/components/tabs/Card.vue'))

const { results, isLoading, errorMessage, searchRecipes } = useSearch()
const recipesStore = useRecipesStore()
const route = useRoute()

const showDefaultRecipes = ref(true)

onMounted(async () => {
  const queryFromRoute = route.query.query
  if (queryFromRoute) {
    showDefaultRecipes.value = false
    await searchRecipes(queryFromRoute)
  } else if (recipesStore.recipes.length === 0) {
    await recipesStore.loadRecipes()
  }
})

watch(
  () => route.query.query,
  async (newQuery, oldQuery) => {
    if (newQuery && newQuery !== oldQuery) {
      showDefaultRecipes.value = false
      await searchRecipes(newQuery)
    }
  },
)

const handleSearch = async (query) => {
  showDefaultRecipes.value = false
  await searchRecipes(query)

  router.replace({ query: { query } })
}
</script>

<template>
  <div class="recipes">
    <article class="recipes__search">
      <InputSearch @search="handleSearch" />
    </article>

    <template v-if="isLoading">Loading...</template>
    <template v-else-if="errorMessage">{{ errorMessage }}</template>

    <section class="recipes__tabs-recipes">
      <template v-if="results.length > 0">
        <template v-for="recipe in results" :key="recipe.uri">
          <Card :dataObject="{ recipe: recipe }" />
        </template>
      </template>

      <template v-else>
        <template v-if="showDefaultRecipes && !isLoading">
          <template v-for="recipe in recipesStore.recipes" :key="recipe.uri">
            <Card :dataObject="{ recipe: recipe }" />
          </template>
        </template>
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
