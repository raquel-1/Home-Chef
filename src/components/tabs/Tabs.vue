<script>
import { ref, provide } from 'vue'

export default {
  setup(props, { slots }) {
    const tabtitles = ref(slots.default().map((tab) => tab.props.title))
    const selected = ref(tabtitles.value[0])
    provide('selected', selected)

    const selectTab = (title) => {
      selected.value = title
    }

    return {
      selected,
      tabtitles,
      selectTab,
    }
  },
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
  margin: map-get($map: $sizes, $key: s-general-padding);
  @include flex(column);
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
        border-bottom: 0.05em solid map-get($map: $colors, $key: c-medium-grey);
        font-size: map-get($map: $font-size, $key: fs-medium-small);
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
