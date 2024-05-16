<script setup>
const props = defineProps({
  fill: {
    type: String,
    default: '#ffffff',
  },
  stroke: {
    type: String,
    default: '#ffffff',
  },
  height: {
    type: String,
    default: '2em',
  },
  width: {
    type: String,
    default: '2em',
  },
})
</script>

<template>
  <svg
    :height="height"
    :width="width"
    :stroke="stroke"
    class="icon"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :fill="fill"
      d="M46 44a26 26 0 0 1-24.94-33.36 24 24 0 1 0 32.3 32.3A26.24 26.24 0 0 1 46 44z"
    />
  </svg>
</template>

<style scoped lang="scss">
.svg-light {
  stroke: map-get($map: $colors, $key: c-black);
  path {
    fill: map-get($map: $colors, $key: c-black);
  }
}
</style>
