<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  activeItem: String,
})

const emits = defineEmits(['update:activeItem'])

// Función para determinar si un ítem está activo
const isActive = (item) => props.activeItem === item

// Función para manejar el clic en un ítem de la lista
const handleClick = (item) => {
  emits('update:activeItem', item)
}
</script>

<template>
  <div class="nav__nav">
    <ul class="nav-list">
      <li
        class="nav-list__item"
        :class="{ '--active': isActive('home') }"
        @click="handleClick('home')"
      >
        <router-link to="/home" class="nav-list__item--home"><h2>Home</h2></router-link>
      </li>
      <li
        class="nav-list__item"
        :class="{ '--active': isActive('recipes') }"
        @click="handleClick('recipes')"
      >
        <router-link to="/recipes" lass="nav-list__item--recipes"
          ><h2>Recipes</h2></router-link
        >
      </li>
    </ul>
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
