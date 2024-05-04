<script setup>
import { defineAsyncComponent } from 'vue'

const RecipeInfo = defineAsyncComponent(() => import('@/src/components/RecipeInfo.vue'))
const MainHeader = defineAsyncComponent(
  () => import('@/src/components/header/MainHeader.vue'),
)
</script>

<template>
  <MainHeader></MainHeader>
  <section>
    <h1>hello</h1>
  </section>
</template>

<style lang="scss" scoped>
.header {
  line-height: 1.5;
}
section {
  height: 100vh;
  margin-top: map-get($map: $heights, $key: h-navbar);
}
</style>
