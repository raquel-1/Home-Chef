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
 * ingredientLines.length,totalTime, calories/yield
 * truncar calorias divideir entre yield
 * yield=servings
 *
 *
 * Labels: dietLabels, cuisineType, mealType
 *
 *
 * ingredientLines       yield=servings
 *
 *
 * (Divir todo entre yield)
 * cosas a mostrar dentro de digest:
 * label.....(total/4) unit
 * sub: no lo enseño,
 *
 *
 */
</script>

<template>
  <section class="info-recipe">
    <div class="info-recipe__title">
      <article @click="toggleSaved" class="heart">
        <NotSaved
          v-if="!isSaved"
          :fill="'rgb(248, 0, 186)'"
          :height="'100%'"
          :width="'100%'"
        />
        <Saved v-else :fill="'rgb(248, 0, 186)'" :height="'100%'" :width="'100%'" />
      </article>
      <h2 class="title">Curry-Crusted Fish</h2>
    </div>
    <div class="info-recipe__info info">
      <div class="info__img">
        <img class="card-photo" src="../assets/images/horizontal.jpg" />
      </div>
      <div class="info__details details">
        <div class="details__source">
          <p>Full recipe in</p>
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
            <span class="imc__number">732</span>
            <p class="imc__string">calories/serving</p>
          </div>
        </ul>
        <ul class="details__labels labels">
          <li class="labels__label"><p>Low-Carb</p></li>
          <li class="labels__label"><p>south east asian</p></li>
          <li class="labels__label"><p>lunch/dinner</p></li>
          <li class="labels__label"><p>Low-Carb</p></li>
          <li class="labels__label"><p>south east asian</p></li>
          <li class="labels__label"><p>lunch/dinner</p></li>
          <li class="labels__label"><p>Low-Carb</p></li>
          <li class="labels__label"><p>south east asian</p></li>
          <li class="labels__label"><p>lunch/dinner</p></li>
          <li class="labels__label"><p>Low-Carb</p></li>
          <li class="labels__label"><p>south east asian</p></li>
          <li class="labels__label"><p>lunch/dinner</p></li>
        </ul>
        <div class="details__servings">
          <p>Ingredients</p>
          <p>for 4 servings</p>
        </div>
        <ul class="details__ingredients">
          <li class="ingredient">- small knob of butter</li>
          <li class="ingredient">- 1 onion , roughly chopped</li>
          <li class="ingredient">- 1kg white fish heads and bones</li>
          <li class="ingredient">- 250ml white wine</li>
          <li class="ingredient">
            - bouquet garni of 2 parsley stalks, 2 sprigs of thyme and 1 bay leaf tied
            with string
          </li>
          <li class="ingredient">- small knob of butter</li>
          <li class="ingredient">- 1 onion , roughly chopped</li>
          <li class="ingredient">- 1kg white fish heads and bones</li>
          <li class="ingredient">- 250ml white wine</li>
          <li class="ingredient">
            - bouquet garni of 2 parsley stalks, 2 sprigs of thyme and 1 bay leaf tied
            with string
          </li>
        </ul>
        <div class="details__nutrition">
          <p>Nutrition</p>
        </div>
        <ul class="details__digest digest">
          <li class="digest__item">
            <p>Fat</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Carbs</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Protein</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Cholesterol</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Sodium</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Calcium</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Magnesium</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Potassium</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Iron</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Zinc</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Phosphorus</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Vitamin A</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Vitamin C</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Thiamin (B1)</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Riboflavin (B2)</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Niacin (B3)</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Vitamin B6</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Folate equivalent (total)</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Folate (food)</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Folic acid</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Vitamin B12</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Vitamin D</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Vitamin E</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Vitamin K</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Sugar alcohols</p>
            <p>12g</p>
          </li>
          <li class="digest__item">
            <p>Water</p>
            <p>12g</p>
          </li>
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
  @include responsive() {
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
      width: 2.5em;
      height: 2.5em;
      overflow: hidden;
      margin-right: 1em;
      @include responsive() {
        width: 2em;
        height: 2em;
      }
    }
    .title {
      transform: translateY(0.05em);
      font-size: map-get($map: $font-size, $key: fs-big);
      @include responsive() {
        font-size: map-get($map: $font-size, $key: fs-medium);
      }
      @include responsive(31.25em) {
        font-size: map-get($map: $font-size, $key: fs-medium);
      }
    }
  }
  &__info {
    @include flex(row, flex-start, flex-start);
    gap: 2em;
    @include responsive(50em) {
      @include flex(column, flex-start, flex-start);
      gap: 0.7em;
    }
    .info {
      &__img {
        @include flex(row, center, flex-start);
        border-radius: 1em;
        overflow: hidden;
        height: 35em;
        width: 35em;
        min-height: 35em;
        min-width: 35em;
        max-height: 35em;
        max-width: 35em;
        @include responsive(75em) {
          height: 30em;
          width: 30em;
          min-height: 30em;
          min-width: 30em;
          max-height: 30em;
          max-width: 30em;
        }
        @include responsive(67em) {
          height: 25em;
          width: 25em;
          min-height: 25em;
          min-width: 25em;
          max-height: 25em;
          max-width: 25em;
        }
        @include responsive(56.25em) {
          height: 20em;
          width: 20em;
          min-height: 20em;
          min-width: 20em;
          max-height: 20em;
          max-width: 20em;
        }
        @include responsive(23em) {
          height: 18em;
          width: 18em;
          min-height: 18em;
          min-width: 18em;
          max-height: 18em;
          max-width: 18em;
        }
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
            gap: 1em;
            @include responsive(50em) {
              padding: 1.5em 0;
            }
            .imc {
              &__number {
                font-size: map-get($map: $font-size, $key: fs-titular-big);
                @include responsive(75em) {
                  font-size: map-get($map: $font-size, $key: fs-extra-big);
                }
                @include responsive(50em) {
                  font-size: map-get($map: $font-size, $key: fs-more-big);
                }
                @include responsive(31.25em) {
                  font-size: map-get($map: $font-size, $key: fs-big);
                }
              }
              &__string {
                font-size: map-get($map: $font-size, $key: fs-small);
                @include responsive(31.25em) {
                  font-size: map-get($map: $font-size, $key: fs-extra-small);
                }
              }
            }
          }
          &__labels {
            width: 100%;
            @include flex(row, center, flex-start);
            flex-wrap: wrap;
            gap: 1em;
            @include responsive(31.25em) {
              gap: 0.5em;
            }
            .labels {
              &__label {
                padding: 0.6em 1.2em;
                border: 0.05em solid map-get($map: $colors, $key: c-principal-color);
                border-radius: 2em;
                color: map-get($map: $colors, $key: c-principal-color);
                @include responsive(50em) {
                  padding: 0.4em 0.8em;
                }
              }
            }
          }
          &__servings {
            width: 100%;
            @include flex(row, center, space-between);
            margin-top: 3em;
            padding-bottom: 1em;
            margin-bottom: 1.5em;
            border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
          }
          &__ingredients {
            list-style-type: disc;
            width: 100%;
            .ingredient {
              margin-bottom: 0.55em;
              text-transform: capitalize;
            }
          }
          &__nutrition {
            width: 100%;
            @include flex(row, center, space-between);
            margin-top: 3em;
            padding-bottom: 1em;
            margin-bottom: 1.5em;
            border-bottom: 0.05em solid map-get($map: $colors, $key: c-principal-color);
          }
          &__digest {
            width: 100%;
            @include flex(column, flex-start, center);
            padding: map-get($map: $sizes, $key: s-general-padding-tablet);
            @include responsive(75em) {
              padding: 0;
            }
            @include responsive(50em) {
              padding: map-get($map: $sizes, $key: s-general-padding-tablet);
            }
            @include responsive(31.25em) {
              padding: 0;
            }
            .digest {
              &__item {
                width: 100%;
                @include flex(row, center, space-between);
                margin-bottom: 0.55em;
                border-bottom: 0.05em dotted
                  map-get($map: $colors, $key: c-transparent-dark-principal-color);
                margin-bottom: 0.9em;

                p {
                  margin: 0;
                  padding: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
