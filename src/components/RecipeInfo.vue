<script setup>
import { useRecipeStore } from '@/stores/recipeStoreTest'
import { watchEffect } from 'vue'

const recipeStore = useRecipeStore()
const recipes = recipeStore.getRecipesDataOrError
watchEffect(() => {
  console.log('Actualizando recetas:', recipes)
})
console.log('Actualizando recetas:', recipes)
</script>

<template>
  <div>
    {{ recipes }}
    <p v-if="recipeStore.isLoading">Cargando...</p>
    <ul v-else-if="recipes && !recipeStore.isLoading">
      <li
        v-for="recipe in recipes"
        :key="recipe.uri"
        style="color: red; list-style-type: none"
      >
        <img
          :src="recipe.image"
          alt="Imagen de la receta"
          style="width: 100px; height: auto"
        />
        <p>{{ recipe.label }}</p>
      </li>
    </ul>
    <p v-else>No hay recetas disponibles.</p>
  </div>
</template>

<style lang="scss" scoped>
p {
  color: aqua;
}
ul {
  min-height: 30em;
  width: 100%;
  li {
    display: flex;
    flex-direction: column;
    p {
      color: aqua;
    }
  }
}
</style>
