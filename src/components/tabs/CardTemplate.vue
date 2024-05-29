<script setup>
import { defineAsyncComponent, ref } from 'vue'
const Chronometer = defineAsyncComponent(() => import('@/assets/svgs/Chronometer.vue'))
const NotSaved = defineAsyncComponent(() => import('@/assets/svgs/NotSaved.vue'))
const Saved = defineAsyncComponent(() => import('@/assets/svgs/Saved.vue'))

const isSaved = ref(false)

const toggleSaved = () => {
  isSaved.value = !isSaved.value
}
</script>

<template>
  <article class="card">
    <router-link to="/recipe-info">
      <div class="card__photo">
        <img class="card-photo" src="../../assets/images/horizontal.jpg" />
      </div>
      <div class="card__recipe-name">
        <p class="title">
          Curry-Crusted Fish Curry-Crusted Fish Curry-Crusted Fish Curry-Crusted Fish
        </p>
      </div>
    </router-link>
    <div class="card__bottom">
      <div class="bottom__time">
        <Chronometer :height="'1.65em'" :width="'1.65em'" />
        <span class="bottom__minutes">13 minutes</span>
      </div>
      <article @click="toggleSaved">
        <NotSaved
          v-if="!isSaved"
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
