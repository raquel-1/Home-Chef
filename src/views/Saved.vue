<script setup>
import { defineAsyncComponent, computed } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/tabs/Card.vue'))
</script>

<template>
  <section class="saved">
    <h2 class="saved__title">All your saved recipes</h2>
    <p class="saved__no-saved-yet">You have not saved any recipe yet</p>
    <ul class="saved__container">
      <li><Card /></li>
      <li><Card /></li>
      <li><Card /></li>
      <li><Card /></li>
      <li><Card /></li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.saved {
  padding: map-get($map: $sizes, $key: s-general-padding);
  padding-top: map-get($map: $heights, $key: h-navbar);
  min-height: 100vh; /** quitar esto */

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
  &__title {
    padding: 1em 0;
  }
  &__no-saved-yet {
    padding: 0.3em 0;
  }
  &__container {
    width: 100%;
    @include flex(row, center, space-between);
    gap: 1em;
    flex-wrap: wrap;
    @include responsive(31.25em) {
      @include flex();
    }
  }
}
</style>
