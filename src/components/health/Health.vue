<script setup>
import healthPreferences from '@/composables/healthPreferences'
</script>

<template>
  <selection class="health">
    <h2 class="health__title">Choose your health preference:</h2>
    <p class="health__subtitle">
      Remember that choosing your healthy diet is an important step towards a healthier
      lifestyle.
    </p>
    <ul class="health__buttons-container">
      <li
        v-for="preference in healthPreferences"
        :key="preference"
        class="health__buttons"
      >
        <router-link to="/recipes" class="button">{{ preference }}</router-link>
      </li>
    </ul>
  </selection>
</template>

<style lang="scss" scoped>
.health {
  @include flex(column);
  min-width: 100%;
  padding: 1em 0;
  &__title {
    font-size: 1.7em;
    @include responsive() {
      font-size: 1.7em;
    }
    @include responsive(50em) {
      padding: map-get($map: $sizes, $key: s-general-padding-tablet);
    }
    @include responsive(31.25em) {
      padding: map-get($map: $sizes, $key: s-general-padding-mobile);
      font-size: map-get($map: $font-size, $key: fs-medium);
    }
  }
  &__subtitle {
    font-size: map-get($map: $font-size, $key: fs-small);
    padding: map-get($map: $sizes, $key: s-general-padding);
    margin: 0.5em 0 0.7em;
    @include responsive() {
      font-size: map-get($map: $font-size, $key: fs-extra-small);
      padding: 0.35em 0;
    }
    @include responsive(50em) {
      padding: map-get($map: $sizes, $key: s-general-padding-tablet);
    }
    @include responsive(31.25em) {
      padding: map-get($map: $sizes, $key: s-general-padding-mobile);
      font-size: map-get($map: $font-size, $key: fs-extra-small-button);
    }
  }
  &__buttons-container {
    @include flex();
    flex-wrap: wrap;
    padding: map-get($map: $sizes, $key: s-general-padding);
    @include responsive(50em) {
      padding: map-get($map: $sizes, $key: s-general-padding-tablet);
    }
    @include responsive(31.25em) {
      padding: map-get($map: $sizes, $key: s-general-padding-mobile);
    }
  }
  &__buttons {
    margin: 0.3em;
    @include responsive(31.25em) {
      margin: 0.15em;
    }
    .button {
      padding: 0.6em 1em;
      background-color: map-get($map: $colors, $key: c-transparent-dark-principal-color);
      border-radius: 2em;
      transition: background-color map-get($map: $transitions, $key: t-button);
      @include responsive(50em) {
        padding: 0.6em 0.8em;
      }
      @include responsive(31.25em) {
        padding: 0.4em 0.6em;
        font-size: map-get($map: $font-size, $key: fs-extra-small-button);
      }
      &:hover {
        background-color: map-get($map: $colors, $key: c-principal-light-color);
      }
    }
  }
}
</style>
