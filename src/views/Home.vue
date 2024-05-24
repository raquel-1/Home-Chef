<script setup>
import { defineAsyncComponent, computed } from 'vue'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

const Card = defineAsyncComponent(() => import('@/components/tabs/Card.vue'))
const ShowMore = defineAsyncComponent(() => import('@/components/tabs/ShowMore.vue'))
const Header = defineAsyncComponent(() => import('@/components/header/Header.vue'))
const Tabs = defineAsyncComponent(() => import('@/components/tabs/Tabs.vue'))
const TabItem = defineAsyncComponent(() => import('@/components/tabs/TabItem.vue'))
</script>

<template>
  <Header />
  <Tabs>
    <TabItem title="Breakfast">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <ShowMore />
    </TabItem>
    <TabItem title="Lunch">
      <h3>Contenido de Lunch</h3>
      <p>Este es el contenido para Lunch.</p>
    </TabItem>
    <TabItem title="Dinner">
      <h3>Contenido de Dinner</h3>
      <p>Este es el contenido para Dinner.</p>
    </TabItem>
  </Tabs>
</template>

<style lang="scss" scoped></style>
