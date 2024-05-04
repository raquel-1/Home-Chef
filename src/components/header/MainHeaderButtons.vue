<script setup>
import { useThemeStore } from '@/src/stores/theme'
import { defineAsyncComponent } from 'vue'

const Day = defineAsyncComponent(() => import('@/assets/svgs/Day.vue'))
const Night = defineAsyncComponent(() => import('@/assets/svgs/Night.vue'))
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))

const themeStore = useThemeStore()

const changeTheme = () => {
  themeStore.changeTheme()
}
</script>

<template>
  <div class="header__buttons">
    <article>
      <button
        class="time"
        :class="{ '--active': themeStore.theme === 'day' }"
        @click="changeTheme"
      >
        <Day />
      </button>
      <button
        class="time"
        :class="{ '--active': themeStore.theme === 'night' }"
        @click="changeTheme"
      >
        <Night />
      </button>
    </article>
    <button class="saved">
      <Saved />
      <p>Saved</p>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__buttons {
    width: 20em;
    height: 100%;
    @include flex(row, center, space-between);
    @include responsive(67em) {
      width: 17em;
    }
    @include responsive(43em) {
      @include flex(row, center, flex-end);
    }
    article {
      @include flex(row, center, space-between);
      width: 7em;

      .time {
        width: 3em;
        height: 3em;
        @include flex();
        border-radius: 50%;
        &.--active {
          border: 0.2em solid map-get($map: $colors, $key: c-principal-color);
        }
      }
    }
    .saved {
      height: 3em;
      width: 9em;
      padding: 0 1em;
      background-color: map-get($map: $colors, $key: c-principal-color);
      @include flex(row, center, space-between);
      border-radius: 2em;
      @include responsive(43em) {
        visibility: hidden;
        width: 0;
        padding: 0;
      }
      p {
        font-size: 1.2em;
      }
    }
  }
}
</style>
