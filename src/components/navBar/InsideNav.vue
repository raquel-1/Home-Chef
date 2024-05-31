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
        ><h2 class="title">Home</h2>
      </router-link>

      <router-link
        to="/recipes"
        class="nav-list__item"
        :class="{ '--active': currentRoute === '/recipes' }"
      >
        <h2 class="title">Recipes</h2>
      </router-link>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  &__nav {
    width: 15em;
    height: 100%;
    @include responsive() {
      width: 12em;
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
        height: 100%;
        @include flex(row, center, center);
        cursor: pointer;
        &.--active {
          border-bottom: 0.2em solid map-get($map: $colors, $key: c-principal-color);
        }
        .title {
          font-size: map-get($map: $font-size, $key: fs-medium);
          @include responsive() {
            font-size: map-get($map: $font-size, $key: fs-medium-small);
          }
        }
      }
    }
  }
}
</style>
