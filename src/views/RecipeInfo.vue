<script setup>
import { defineAsyncComponent, ref } from 'vue'

const NotSaved = defineAsyncComponent(() => import('@/assets/svgs/NotSaved.vue'))
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))

const isSaved = ref(false)

const toggleSaved = () => {
  isSaved.value = !isSaved.value
}
const dietLabels = ['High-Protein', 'Low-Fat']
const cuisineType = ['south east asian']
const mealType = ['lunch/dinner']
/**
 * truncar calorias
 * yield=servings
 * Labels: dietLabels, cuisineType, mealType
 */
</script>

<template>
  <section class="info-recipe">
    <div class="info-recipe__title">
      <article @click="toggleSaved" class="heart">
        <NotSaved
          v-if="!isSaved"
          :fill="'rgb(248, 0, 186)'"
          :height="'4em'"
          :width="'4em'"
        />
        <Saved v-else :fill="'rgb(248, 0, 186)'" :height="'4em'" :width="'4em'" />
      </article>
      <h2 class="title">Curry-Crusted Fish</h2>
    </div>
    <div class="info-recipe__info info">
      <div class="info__img">
        <img class="card-photo" src="../assets/images/horizontal.jpg" />
      </div>
      <div class="info__details details">
        <div class="details__source">
          <p>by</p>
          <a
            href="http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html"
            target="_blank"
            class="source"
            >Serious Eats</a
          >
        </div>
        <ul class="details__i-m-c">
          <li class="imc">
            <span class="imc__number">4</span>
            <p class="imc__string">ingredients</p>
          </li>
          <div class="imc">
            <span class="imc__number">31</span>
            <p class="imc__string">minutes</p>
          </div>
          <div class="imc">
            <span class="imc__number">2926</span>
            <p class="imc__string">calories</p>
          </div>
        </ul>
        <ul class="details__labels">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.info-recipe {
  padding: map-get($map: $sizes, $key: s-general-padding);
  padding-top: map-get($map: $heights, $key: h-navbar);
  min-height: 100vh; /** quitar esto */

  @include responsive(50em) {
    padding: map-get($map: $sizes, $key: s-general-padding-tablet);
    padding-top: map-get($map: $heights, $key: h-navbar);
  }
  @include responsive(31.25em) {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
    padding-top: 0;
  }
  @include responsiveH(31.25em) {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
    padding-top: 0;
  }
  &__title {
    padding: 1.5em 0;
    @include flex(row, center, flex-start);
    .heart {
      padding-right: 1em;
    }
    .title {
      transform: translateY(0.05em);
      font-size: map-get($map: $font-size, $key: fs-extra-big);
    }
  }
  &__info {
    @include flex(row, flex-start, flex-start);
    gap: 2em;
    .info {
      &__img {
        @include flex(row, center, flex-start);
        border-radius: 1em;
        overflow: hidden;
        height: 40em;
        width: 40em;
        min-height: 40em;
        min-width: 40em;
        .card-photo {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      }
      &__details {
        @include flex(column, flex-start, flex-start);
        width: 100%;
        .details {
          &__source {
            @include flex(row, center, flex-start);
            .source {
              font-family: map-get($map: $fonts, $key: f-font-bold);
              margin-left: 0.3em;
            }
          }
          &__i-m-c {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 3em 0;
            .imc {
              &__number {
                font-size: map-get($map: $font-size, $key: fs-titular-big);
              }
              &__string {
                font-size: map-get($map: $font-size, $key: fs-medium-small);
              }
            }
          }
          &__labels {
          }
        }
      }
    }
  }
}
</style>
