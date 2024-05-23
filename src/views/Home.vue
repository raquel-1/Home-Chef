<script setup>
import { defineAsyncComponent, computed } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/Card.vue'))
const Header = defineAsyncComponent(() => import('@/components/header/Header.vue'))
const Tabs = defineAsyncComponent(() => import('@/components/tabs/Tabs.vue'))
const TabItem = defineAsyncComponent(() => import('@/components/tabs/TabItem.vue'))
</script>

<template>
  <Header />
  <Tabs>
    <TabItem title="Breakfast">
      <Card></Card>
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
