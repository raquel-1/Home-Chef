<script setup>
import { defineAsyncComponent, ref } from 'vue'

const InputSearch = defineAsyncComponent(
  () => import('@/components/header/InputSearch.vue'),
)
</script>

<template>
  <header class="header">
    <div class="header__container">
      <h2 class="header__title">Your favourite meal?</h2>
      <InputSearch />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @include flex();
  height: 50vh;
  max-height: 50em;
  padding: map-get($map: $sizes, $key: s-general-padding);
  margin-top: map-get($map: $heights, $key: h-navbar);
  padding-top: 1em;
  @include responsive() {
    padding: map-get($map: $sizes, $key: s-general-padding-tablet);
    padding-top: 1em;
  }
  @include responsive(50em) {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
    max-height: 20em;
    padding-top: 1em;
  }
  @include responsive(31.25em) {
    padding: 0;
    margin: 0;
  }
  @include responsive(27em) {
    max-height: 15em;
  }
  @include responsiveH(31.25em) {
    margin-top: 0;
    min-height: 15em;
  }
  &__container {
    @include flex(column);
    border-radius: 1em;
    background-image: url('../../assets/images/knife.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    @include responsive(31.25em) {
      border-radius: 0;
    }
  }
  &__title {
    @include flex(column);
    color: map-get($map: $colors, $key: c-white);
    width: 90%;
    font-size: map-get($map: $font-size, $key: fs-extra-big);
    margin-bottom: 0.5em;
    @include responsive() {
      font-size: map-get($map: $font-size, $key: fs-more-big);
    }
    @include responsive(50em) {
      margin-bottom: 0.1em;
    }
    @include responsive(31.25em) {
      font-size: map-get($map: $font-size, $key: fs-big);
    }
    @include responsive(27em) {
      width: 95%;
    }
  }
}
</style>
