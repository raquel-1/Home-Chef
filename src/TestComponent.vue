<template>
  <div>
    <!-- Viola la regla 'vue/component-name-in-template-casing' al usar un nombre de componente en kebab-case -->
    <MyComponent></MyComponent>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue'

export default {
  components: {
    MyComponent,
  },
}
</script>
