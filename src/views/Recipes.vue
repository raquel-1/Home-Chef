<script setup>
import { defineAsyncComponent, onMounted, computed, ref } from 'vue'
import { useRecipesStore } from '@/stores/recipesStore'
import { useRoute } from 'vue-router'
import { APP_ID, APP_KEY } from '@/constants/credentials'

const InputSearch = defineAsyncComponent(
  () => import('@/components/header/InputSearch.vue'),
)
const Card = defineAsyncComponent(() => import('@/components/tabs/Card.vue'))

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
</script>

<template>
  <div class="recipes">
    <article class="recipes__search">
      <InputSearch />
    </article>
    <template v-if="recipesStore.isLoading">Loading...</template>
    <template v-else-if="recipesStore.error">{{ recipesStore.error }}</template>
    <section
      class="recipes__tabs-recipes"
      v-else-if="
        !recipesStore.error &&
        !recipesStore.isLoading &&
        recipesStore.recipes.length === 30
      "
    >
      <template v-for="recipe in recipesStore.recipes" :key="recipe.uri">
        <Card :dataObject="{ recipe: recipe }" />
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
