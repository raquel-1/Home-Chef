<script setup>
import { defineAsyncComponent, computed } from 'vue'
</script>

<template>
  <article class="card">
    <div class="card__photo">
      <img class="card-photo" src="../assets/images/knife.jpg" />
    </div>
    <div class="card__recipe-name">
      <p class="title">Pizaa Pizaa Pizaa Pizaa Pizaa Pizaa Piza</p>
    </div>
    <div class="card__bottom"></div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  width: map-get($map: $sizes, $key: s-card);
  border-radius: 1em;
  overflow: hidden;
  background-color: aqua;
  &__photo {
    height: map-get($map: $sizes, $key: s-card);
    @include flex();
    border-radius: 1em;
    overflow: hidden;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  &__recipe-name {
    padding: 1em 0;
    max-height: 5.125em;
    overflow: hidden;
    .title {
      font-size: map-get($map: $font-size, $key: fs-medium-small);
    }
  }
}
</style>
