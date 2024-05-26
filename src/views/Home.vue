<script setup>
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/tabs/Card.vue'))
const ShowMore = defineAsyncComponent(() => import('@/components/tabs/ShowMore.vue'))
const Header = defineAsyncComponent(() => import('@/components/header/Header.vue'))
const Tabs = defineAsyncComponent(() => import('@/components/tabs/Tabs.vue'))
const TabItem = defineAsyncComponent(() => import('@/components/tabs/TabItem.vue'))
const Health = defineAsyncComponent(() => import('@/components/health/Health.vue'))
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
  <Health />
</template>

<style lang="scss" scoped></style>
