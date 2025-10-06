<script setup>
import dietPreferences from '@/composables/dietPreferences'
import { useRouter } from 'vue-router'

const router = useRouter()

const handlePreferenceClick = (preference) => {
  router.push({ path: '/diet-preference', query: { diet: preference } })
}
</script>

<template>
  <section class="diet">
    <h2 class="diet__title">Choose your Diet preference:</h2>
    <p class="diet__subtitle">
      Remember that choosing your healthy diet is an important step towards a healthier
      lifestyle.
    </p>
    <ul class="diet__buttons-container">
      <li v-for="preference in dietPreferences" :key="preference" class="diet__buttons">
        <button @click="handlePreferenceClick(preference)" class="button">
          {{ preference }}
        </button>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.diet {
  @include flex(column);
  min-width: 100%;
  padding: 1em 0;
  padding: map-get($map: $sizes, $key: s-general-padding);

  @include responsive() {
    padding: map-get($map: $sizes, $key: s-general-padding-tablet);
  }
  @include responsive(50em) {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
  }
  @include responsive(31.25em) {
    padding: 0;
  }
  &__title {
    font-size: 1.7em;
    @include responsive() {
      font-size: 1.7em;
    }
    @include responsive(31.25em) {
      font-size: map-get($map: $font-size, $key: fs-medium);
    }
  }
  &__subtitle {
    font-size: map-get($map: $font-size, $key: fs-small);
    margin: 0.5em 0 0.7em;
    text-align: center;
    @include responsive() {
      font-size: map-get($map: $font-size, $key: fs-extra-small);
      padding: 0.35em 0;
    }
    @include responsive(31.25em) {
      font-size: map-get($map: $font-size, $key: fs-extra-small-button);
    }
  }
  &__buttons-container {
    @include flex();
    flex-wrap: wrap;
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
      text-transform: capitalize;

      @include responsive(50em) {
        padding: 0.6em 0.8em;
      }
      @include responsive(31.25em) {
        padding: 0.4em 0.6em;
        font-size: map-get($map: $font-size, $key: fs-extra-small-button);
      }
      &:hover {
        background-color: map-get($map: $colors, $key: c-principal-light-color);
        transition-duration: 0.6s;
      }
    }
  }
}
</style>
