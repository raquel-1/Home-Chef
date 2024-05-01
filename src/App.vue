<script setup>
import { defineAsyncComponent } from 'vue'

const RecipeInfo = defineAsyncComponent(() => import('@/components/RecipeInfo.vue'))
</script>

<template>
  <RecipeInfo />
</template>

<style lang="scss" scoped>
.header {
  line-height: 1.5;
  background-color: aqua;
}
</style>
