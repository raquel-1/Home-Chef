<script setup>
import { defineAsyncComponent, ref, computed } from 'vue'
import { formatTime } from '@/composables/recipeUtils'
import useSavedRecipes from '@/composables/useSavedRecipes'

// funcion para codificar en base64
function base64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)))
}

const Chronometer = defineAsyncComponent(
  () => import('@/components/svgs/Chronometer.vue'),
)
const NotSaved = defineAsyncComponent(() => import('@/components/svgs/NotSaved.vue'))
const Saved = defineAsyncComponent(() => import('@/components/svgs/Saved.vue'))

const props = defineProps({
  dataObject: {
    type: Object,
    required: true,
  },
})

const { isSaved, toggleSaved } = useSavedRecipes()

const formattedTime = computed(() => {
  return formatTime(props.dataObject.recipe.totalTime)
})
</script>

<template>
  <article class="card" v-if="dataObject">
    <router-link
      :to="{
        name: 'RecipeInfo',
        params: { recipeId: base64Encode(dataObject.recipe.uri) },
      }"
    >
      <div class="card__photo">
        <img class="card-photo" :src="dataObject.recipe.image" alt="image recipe" />
      </div>
      <div class="card__recipe-name">
        <p class="title">
          {{ dataObject.recipe.label }}
        </p>
      </div>
    </router-link>
    <div class="card__bottom">
      <div class="bottom__time">
        <Chronometer :height="'1.65em'" :width="'1.65em'" />
        <span class="bottom__minutes">{{ formattedTime }}</span>
      </div>
      <article @click="toggleSaved(props.dataObject.recipe)">
        <NotSaved
          v-if="!isSaved(props.dataObject.recipe)"
          :fill="'rgb(248, 0, 186)'"
          :height="'1.65em'"
          :width="'1.65em'"
        />
        <Saved v-else :fill="'rgb(248, 0, 186)'" :height="'1.65em'" :width="'1.65em'" />
      </article>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  min-width: map-get($map: $sizes, $key: s-card);
  max-width: map-get($map: $sizes, $key: s-card);
  max-height: map-get($map: $heights, $key: h-card);
  min-height: map-get($map: $heights, $key: h-card);
  border-radius: 1em;
  overflow: hidden;
  margin-bottom: 1em;
  &__photo {
    height: map-get($map: $sizes, $key: s-card);
    @include flex();
    border-radius: 1em;
    overflow: hidden;
    cursor: pointer;
    .card-photo {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  &__recipe-name {
    padding: 0.7em 0;
    max-height: 4em;
    min-height: 4em;
    .title {
      font-size: map-get($map: $font-size, $key: fs-small);
      cursor: pointer;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 25ch;
      overflow-wrap: break-word;
      word-break: break-all;
      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
    }
  }
  &__bottom {
    @include flex(center, center, space-between);
    bottom: 0;
    .bottom {
      &__time {
        @include flex(center, center, flex-start);
      }
      &__minutes {
        padding-left: 1em;
      }
    }
  }
}
</style>
