<script setup>
import { useRecipeStore } from '@/src/stores/recipeStore'

const recipeStore = useRecipeStore()
const recipes = recipeStore.data

console.log(recipes)
</script>

<template>
  <div>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id" style="color: red">
        {{ recipe?.title }}
      </li>
    </ul>
  </div>
</template>
