<script setup>
import { defineAsyncComponent, ref, computed } from 'vue'

const ThemeButtons = defineAsyncComponent(
  () => import('@/components/navBar/ThemeButtons.vue'),
)
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))
</script>

<template>
  <article class="nav__responsive">
    <ul class="nav-responsive">
      <li
        class="nav-responsive__item nav-responsive__item--direction animate-item"
        style="animation-delay: 0s"
      >
        <a><h2>Home</h2></a>
      </li>
      <li
        class="nav-responsive__item nav-responsive__item--direction animate-item"
        style="animation-delay: 0.3s"
      >
        <a><h2>Recipes</h2></a>
      </li>
      <li class="nav-responsive__item animate-item" style="animation-delay: 0.6s">
        <ThemeButtons />
      </li>
      <li
        class="nav-responsive__item nav-responsive__item--direction animate-item"
        style="animation-delay: 0.9s"
      >
        <Saved />
        <h2>Saved</h2>
      </li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
    visibility: visible;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
}

@keyframes slideUpAndFadeOut {
  0% {
    transform: translateY(100%);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}

.nav {
  &__responsive {
    visibility: hidden;
    @include responsive(50em) {
      visibility: visible;
      position: absolute;
      top: map-get($map: $heights, $key: h-navbar);
      right: 0;
    }
    .disappear {
      animation: slideUpAndFadeOut 0.3s ease-out forwards;
    }
    .nav-responsive {
      width: 10em;
      @include flex(column);
      .animate-item {
        visibility: hidden;
        opacity: 0;
        // Aparición
        animation: slideInFromRight 0.3s ease-out forwards;
        // Desaparición
      }

      .animate-item:nth-child(2) {
        animation-delay: 0.3s;
      }

      .animate-item:nth-child(3) {
        animation-delay: 0.6s;
      }

      .animate-item:nth-child(4) {
        animation-delay: 0.9s;
      }

      &__item {
        border-left: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        border-right: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
        width: 100%;
        @include flex(row, center, space-evenly);
        min-height: 4em;
        &--direction {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
