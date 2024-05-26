<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const currentRoute = computed(() => route.path)
</script>

<template>
  <div class="nav__nav">
    <article class="nav-list">
      <router-link
        to="/home"
        class="nav-list__item"
        :class="{ '--active': currentRoute === '/home' }"
        ><h2>Home</h2>
      </router-link>
      <router-link
        to="/recipes"
        class="nav-list__item"
        :class="{ '--active': currentRoute === '/recipes' }"
      >
        <h2>Recipes</h2>
      </router-link>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  &__nav {
    width: 17em;
    height: 100%;
    @include responsive(71.87em) {
      width: 14.5em;
    }
    @include responsive() {
      width: 13em;
    }
    @include responsive(56.25em) {
      width: 11em;
    }
    @include responsive(50em) {
      display: none;
    }
    @include responsiveH(31.25em) {
      display: none;
    }
    .nav-list {
      @include flex(row, center, space-between);
      height: 100%;
      &__item {
        font-size: map-get($map: $font-size, $key: fs-medium);
        height: 100%;
        @include flex(row, center, center);
        cursor: pointer;
        &.--active {
          border-bottom: 0.2em solid map-get($map: $colors, $key: c-principal-color);
        }
      }
    }
  }
}
</style>
