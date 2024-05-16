<script setup>
import { useThemeStore } from '@/stores/theme'
import { defineAsyncComponent, ref } from 'vue'
import { LIGHT_MODE, DARK_MODE } from '@/constants/theme'

const Pan = defineAsyncComponent(() => import('@/assets/svgs/Pan.vue'))

const themeStore = useThemeStore()

const changeTheme = () => {
  themeStore.changeTheme()
}

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
          placeholder="Burguer"
          class="search-box__input"
        />
        <button
          class="search-box__pan"
          :class="{ hovered: isHovered }"
          @mouseover="isHovered = true"
        >
          <Pan :class="{ 'rotate-180': isHovered }" :width="'2em'" :height="'2em'" />
        </button>
      </article>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.theme-light {
  background-color: white;
  color: black;
}

.theme-dark {
  background-color: black;
  color: white;
}
.header {
  @include flex();
  height: 50vh;
  max-height: 50em;
  margin: map-get($map: $heights, $key: h-navbar) 1em 1em;
  margin-top: map-get($map: $heights, $key: h-navbar) + 1em;
  border-radius: 1em;
  background-image: url('../../assets/images/knife.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @include responsive(50em) {
    max-height: 20em;
  }
  @include responsive(31.25em) {
    margin-top: 1em;
  }
  @include responsive(27em) {
    max-height: 15em;
    margin: 0.5em;
  }
  @include responsive(25em) {
    margin: 0;
    border-radius: 0;
  }
  @include responsiveH(31.25em) {
    margin-top: 1em;
  }
  &__title {
    @include flex(column);
    width: 90%;
    font-size: map-get($map: $font-size, $key: fs-titular-big);
    margin-bottom: 0.5em;
    font-family: map-get($map: $fonts, $key: ff-font-extraBold);
    @include responsive() {
      font-size: map-get($map: $font-size, $key: fs-extra-big);
    }
    @include responsive(50em) {
      margin-bottom: 0.1em;
    }
    @include responsive(31.25em) {
      font-size: 2.5em;
    }
    @include responsive(27em) {
      font-size: map-get($map: $font-size, $key: fs-big);
      width: 95%;
    }
  }
  &__container {
    @include flex(column);
    width: 100%;
  }
  &__search-box {
    @include flex();
    width: 90%;
    max-width: 60em;
    background-color: map-get($map: $colors, $key: c-transparent-principal-color);
    height: 3em;
    border-radius: 2em;
    padding: 0 0 0 2em;
    overflow: hidden;
    @include responsive(27em) {
      padding: 0 0 0 1em;
    }
    @include responsive(27em) {
      width: 95%;
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
        font-size: 1.3em;
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
        @include responsive(30em) {
          padding: 0 1.4em 0 0.5em;
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
