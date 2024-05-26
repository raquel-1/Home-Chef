<script setup></script>

<template>
  <footer class="footer">
    <small class="footer__rights"
      ><strong> Home Chef</strong
      ><img src="../../../public/logo.ico" alt="Icono" class="ico" />
      - &copy; 2024 - All rights reserved
    </small>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: auto;
  @include flex();
  padding: 1em 0;
  font-size: small;
  font-size: map-get($map: $font-size, $key: fs-medium-small);
  @include responsive(31.25em) {
    font-size: map-get($map: $font-size, $key: fs-extra-small);
  }
  &__rights {
    @include flex();
    .ico {
      margin: 0 0.5em;
      max-width: 1.5em;
      height: 1.5em;
    }
  }
}
</style>
