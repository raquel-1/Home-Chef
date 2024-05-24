import { fetchRecipes } from '@/composables/fetchRecipes'
import { useRecipeStore } from '@/stores/recipeStore'
import '@/assets/styles/scss/reset.scss'
import { createApp, watchEffect } from 'vue'
import router from './router'
// import clickOutside from '@/composables/clickOutside'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
// app.directive('click-outside', clickOutside)
app.use(router).mount('#app')
/*
const recipeStore = useRecipeStore()

watchEffect(() => {
  fetchRecipes(recipeStore)
})
console.log(recipeStore)
*/
