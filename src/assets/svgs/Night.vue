<template>
  <svg class="icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M46 44a26 26 0 0 1-24.94-33.36 24 24 0 1 0 32.3 32.3A26.24 26.24 0 0 1 46 44z"
    />
  </svg>
</template>

<style scoped lang="scss">
.icon {
  width: 2em; /* Tamaño del icono */
  height: 2em;
  stroke: map-get($map: $colors, $key: c-white);
  path {
    fill: map-get($map: $colors, $key: c-white);
  }
}
</style>
