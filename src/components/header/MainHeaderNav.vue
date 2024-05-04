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
  <nav class="header__nav">
    <ul class="nav-list">
      <li
        class="nav-list__item"
        :class="{ '--active': isActive('home') }"
        @click="handleClick('home')"
      >
        <a class="nav-list__item--home"><h2>Home</h2></a>
      </li>
      <li
        class="nav-list__item"
        :class="{ '--active': isActive('recipes') }"
        @click="handleClick('recipes')"
      >
        <a class="nav-list__item--recipes"><h2>Recipes</h2></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.header {
  &__nav {
    width: 15em;
    height: 100%;
    @include responsive(64em) {
      width: 11em;
      height: 100%;
    }
    @include responsive(43em) {
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
