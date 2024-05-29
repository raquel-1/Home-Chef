<script setup>
import { defineAsyncComponent, ref } from 'vue'

const Pan = defineAsyncComponent(() => import('@/assets/svgs/Pan.vue'))

const isHovered = ref(false)
</script>

<template>
  <header class="header">
    <div class="header__container">
      <h2 class="header__title">Your favourite meal?</h2>
      <article class="header__search-box search-box">
        <input
          type="text"
          id="search-trasparent"
          name="search"
          placeholder="Burguer . . ."
          class="search-box__input"
        />
        <button
          class="search-box__pan"
          :class="{ hovered: isHovered }"
          @mouseover="isHovered = true"
        >
          <Pan :class="{ 'rotate-180': isHovered }" />
        </button>
      </article>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @include flex();
  height: 50vh;
  max-height: 50em;
  padding: 1em;
  margin-top: map-get($map: $heights, $key: h-navbar);
  @include responsive(50em) {
    max-height: 20em;
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
