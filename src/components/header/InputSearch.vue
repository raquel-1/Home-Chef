<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import useSearch from '@/composables/useSearch'

const Pan = defineAsyncComponent(() => import('@/assets/svgs/Pan.vue'))

const isHovered = ref(false)
const query = ref('')

const { handleSearch } = useSearch()
const route = useRoute()

const onSearch = () => {
  handleSearch(query.value, route.path)
}

const onKeyDown = (event) => {
  if (event.key === 'Enter') {
    onSearch()
  }
}
</script>

<template>
  <article class="header__search-box search-box">
    <input
      v-model="query"
      type="text"
      id="search-trasparent"
      name="search"
      placeholder="Pizza . . ."
      class="search-box__input"
      @keydown="onKeyDown"
    />
    <button
      class="search-box__pan"
      id="search"
      :class="{ hovered: isHovered }"
      @mouseover="isHovered = true"
      @click="onSearch"
    >
      <Pan :class="{ 'rotate-180': isHovered }" />
    </button>
  </article>
</template>

<style lang="scss" scoped>
.header {
  &__search-box {
    @include flex();
    width: 80%;
    max-width: 60em;
    background-color: map-get($map: $colors, $key: c-transparent-principal-color);
    height: 2.5em;
    border-radius: 2em;
    padding: 0 0 0 1.5em;
    overflow: hidden;
    @include responsive(50em) {
      height: 2.2em;
    }
    @include responsive(27em) {
      padding: 0 0 0 1em;
      width: 95%;
    }
    @include responsive(22em) {
      padding: 0 0 0 0.5em;
    }
    .search-box {
      &__input {
        background-color: map-get($map: $colors, $key: c-transparent);
        flex-grow: 1;
        height: 100%;
        outline: 0;
        border: 0;
        text-decoration: none;
        @include flex();
        font-size: map-get($map: $font-size, $key: fs-small);
        @include responsive(31.25em) {
          font-size: map-get($map: $font-size, $key: fs-extra-small);
        }
        &::placeholder {
          color: map-get($map: $colors, $key: c-white);
          transform: translateY(0.1em);
        }
      }
      &__pan {
        background-color: map-get($map: $colors, $key: c-principal-color);
        height: 100%;
        padding: 0 1.6em 0 0.9em;
        cursor: pointer;
        position: relative;
        @include responsive() {
          padding: 0 1.3em 0 0.5em;
        }
        @include responsive(31.25em) {
          padding: 0 0.8em 0 0.2em;
        }
        .rotate-180 {
          transition: transform 0.3s ease-in-out;
          transform: rotate(-90deg);
        }
      }
    }
  }
}
</style>
