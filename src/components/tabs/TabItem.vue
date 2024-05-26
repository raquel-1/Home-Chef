<script>
import { inject, computed } from 'vue'

export default {
  props: ['title'],
  setup(props) {
    // inyecta selected de padre tabs
    const selected = inject('selected')
    // true si el titulo de esta pestaña es igual al titulo seleccionado
    const isActive = computed(() => props.title === selected.value)

    return {
      isActive,
    }
  },
}
</script>

<template>
  <div class="tab-item" v-show="isActive">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tab-item {
  min-width: 100%;
  @include flex(center, center, flex-start);
  gap: 1em;
  white-space: nowrap;
  overflow-x: auto; /* Permitir desplazamiento horizontal */
  -webkit-overflow-scrolling: touch; /* Añadir desplazamiento suave para dispositivos iOS */
  scroll-snap-type: x mandatory; /* Permite el desplazamiento suave */
  -webkit-overflow-scrolling: touch;
  margin-bottom: 2em;
}
.tab-item::-webkit-scrollbar {
  height: 1.4em;
  background-color: map-get($map: $colors, $key: c-transparent-dark-principal-color);
  border-radius: 1rem;
  opacity: 0.4;
  @include responsive(31.25em) {
    border-radius: 0;
    height: 1em;
  }
}

.tab-item::-webkit-scrollbar-thumb {
  background: map-get($map: $colors, $key: c-principal-light-color);
  border-radius: 1.1rem;
  @include responsive(31.25em) {
    border-radius: 0;
  }
}
</style>
