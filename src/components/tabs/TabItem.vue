<!-- Tabs.vue-->
<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, watch } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  selected: { type: Boolean, default: false },
})

const isActive = ref(false)
const selectTab = inject('selectTab')
const registerTab = inject('registerTab')

onMounted(() => {
  isActive.value = props.selected
  registerTab({
    name: props.name,
    isActive: isActive.value,
  })
})

watch(
  () => props.selected,
  (newValue) => {
    isActive.value = newValue
  },
)
</script>
