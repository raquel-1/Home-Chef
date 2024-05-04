<script setup>
import { defineAsyncComponent } from 'vue'
const Day = defineAsyncComponent(() => import('@/assets/svgs/Day.vue'))
const Night = defineAsyncComponent(() => import('@/assets/svgs/Night.vue'))
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))
</script>

<template>
  <div class="header__buttons">
    <button class="time"><Day /> <Night /></button>
    <button class="saved">
      <Saved />
      <p>Saved</p>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__buttons {
    width: 20em;
    height: 100%;
    background-color: rgb(248, 152, 152);
    @include flex(row, center, space-between);
    .saved {
      height: 3em;
      width: 9em;
      padding: 0 1em;
      background-color: map-get($map: $colors, $key: c-principal-color);
      @include flex(row, center, space-between);
      border-radius: 2em;
      p {
        font-size: 1.2em;
      }
    }
  }
}
</style>
