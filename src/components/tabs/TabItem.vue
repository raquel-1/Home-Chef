<!-- Tabs.vue-->
<template>
  <div class="tab-content" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  props: ['title'],
  setup(props) {
    const selected = inject('selected')
    const isActive = computed(() => props.title === selected.value)

    return {
      isActive,
    }
  },
}
</script>
