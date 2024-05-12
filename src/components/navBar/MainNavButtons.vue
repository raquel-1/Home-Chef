<script setup>
import { defineAsyncComponent } from 'vue'

const ThemeButtons = defineAsyncComponent(
  () => import('@/components/navBar/ThemeButtons.vue'),
)
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))
</script>

<template>
  <div class="nav__buttons">
    <article>
      <ThemeButtons />
    </article>
    <button class="saved">
      <Saved />
      <p>Saved</p>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  &__buttons {
    width: 18em;
    height: 100%;
    @include flex(row, center, space-between);
    @include responsive(67em) {
      width: 17em;
    }
    @include responsive(50em) {
      display: none;
    }
    article {
      @include flex(row, center, space-between);
      width: 7em;
    }
    .saved {
      height: 3em;
      width: 9em;
      padding: 0 1em;
      background-color: map-get($map: $colors, $key: c-principal-color);
      @include flex(row, center, space-between);
      border-radius: 2em;
      cursor: pointer;
      p {
        font-size: 1.2em;
      }
    }
  }
}
</style>
