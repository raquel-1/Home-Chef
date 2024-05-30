<script setup>
import { ref, provide, onMounted, getCurrentInstance } from 'vue'

const tabtitles = ref([])

// pestaña seleccionada
const selected = ref('')

provide('selected', selected)

// accede a la instancia actual para obtener los slots
const instance = getCurrentInstance()

// coge titulos de las pestañas a partir de los slots (TabItem)
onMounted(() => {
  tabtitles.value = instance.slots.default().map((tab) => tab.props.title)
  selected.value = tabtitles.value[0] // Selecciona la primera pestaña por defecto
})

// seleccionar pestaña
const selectTab = (title) => {
  selected.value = title
}
</script>

<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        class="header__title"
        v-for="title in tabtitles"
        :key="title"
        @click="selectTab(title)"
        :class="{ 'header__title--active': title === selected }"
      >
        {{ title }}
      </li>
    </ul>
    <div class="tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  max-width: 100%;
  @include flex(column);
  margin: map-get($map: $sizes, $key: s-general-padding);
  @include responsive() {
    margin: map-get($map: $sizes, $key: s-general-padding-tablet);
  }
  @include responsive(50em) {
    margin: map-get($map: $sizes, $key: s-general-padding-mobile);
  }
  @include responsive(31.25em) {
    margin: 0;
  }
  &__header {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    .header {
      &__title {
        @include flex(column);
        padding: 1em;
        cursor: pointer;
        flex-shrink: 1;
        border-bottom: 0.05em solid
          map-get($map: $colors, $key: c-transparent-dark-principal-color);
        font-size: map-get($map: $font-size, $key: fs-small);
        @include responsive() {
          font-size: map-get($map: $font-size, $key: fs-extra-small);
        }
        @include responsive(31.25em) {
          font-size: map-get($map: $font-size, $key: fs-extra-small-button);
        }
        &--active {
          border-bottom: 0.3em solid map-get($map: $colors, $key: c-principal-color);
        }
      }
    }
  }
  &__content {
    margin-top: 1em;
    width: 100%;
    min-width: 100%;
    height: auto;
  }
}
</style>
