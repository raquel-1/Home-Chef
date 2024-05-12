import { fetchRecipes } from '@/composables/fetchRecipes'
import { useRecipeStore } from '@/stores/recipeStore'
import '@/assets/styles/scss/reset.scss'
import { createApp, watchEffect } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
/*
const recipeStore = useRecipeStore()

watchEffect(() => {
  fetchRecipes(recipeStore)
})
console.log(recipeStore)
*/
