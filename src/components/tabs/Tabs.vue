<!-- Tabs.vue-->
<template>
  <div class="tabs">
    <ul class="tabs-list">
      <li
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: tab.isActive }"
        @click="selectTab(tab)"
      >
        {{ tab.name }}
      </li>
    </ul>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'

const tabs = ref([])

const selectTab = (selectedTab) => {
  tabs.value.forEach((tab) => {
    tab.isActive = tab.name === selectedTab.name
  })
}

const registerTab = (tab) => {
  if (tabs.value.length === 0) {
    tab.isActive = true
  }
  tabs.value.push(tab)
}

provide('selectTab', selectTab)
provide('registerTab', registerTab)
</script>

<style scoped>
.tabs-list {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.tabs-list li {
  padding: 10px;
  cursor: pointer;
}

.tabs-list li.active {
  font-weight: bold;
  border-bottom: 2px solid #000;
}

.tabs-content {
  padding: 10px;
}
</style>
