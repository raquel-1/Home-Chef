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
    default: '2.5em',
  },
  width: {
    type: String,
    default: '2.5em',
  },
})
</script>

<template>
  <svg
    class="icon"
    :fill="fill"
    :stroke="stroke"
    :height="height"
    :width="width"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="15" />
    <line x1="32" y1="8" x2="32" y2="16" />
    <line x1="32" y1="56" x2="32" y2="48" />
    <line x1="56" y1="32" x2="48" y2="32" />
    <line x1="8" y1="32" x2="16" y2="32" />
    <line x1="48.97" y1="15.03" x2="43.31" y2="20.69" />
    <line x1="15.03" y1="48.97" x2="20.69" y2="43.31" />
    <line x1="48.97" y1="48.97" x2="43.31" y2="43.31" />
    <line x1="15.03" y1="15.03" x2="20.69" y2="20.69" />
  </svg>
</template>

<style scoped lang="scss">
.svg-light {
  stroke: map-get($map: $colors, $key: c-black);
}
</style>
