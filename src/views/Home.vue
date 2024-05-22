<script setup>
import { defineAsyncComponent, computed } from 'vue'

const Header = defineAsyncComponent(() => import('@/components/header/Header.vue'))
const Tabs = defineAsyncComponent(() => import('@/components/tabs/Tabs.vue'))
const TabItem = defineAsyncComponent(() => import('@/components/tabs/TabItem.vue'))
</script>

<template>
  <Header />
  <section>{{ themeStore.theme }}</section>
  <Tabs>
    <TabItem name="uno" :selected="true">
      <h3>Contenido de uno</h3>
      <p>Este es el contenido para uno.</p>
    </TabItem>
    <TabItem name="dos">
      <h3>Contenido de dos</h3>
      <p>Este es el contenido para dos.</p>
    </TabItem>
    <TabItem name="tres">
      <h3>Contenido de tres</h3>
      <p>Este es el contenido para tres.</p>
    </TabItem>
  </Tabs>
</template>

<style lang="scss" scoped></style>
