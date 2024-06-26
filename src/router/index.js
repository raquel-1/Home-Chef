import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Recipes from '@/views/Recipes.vue'
import Saved from '@/views/Saved.vue'
import RecipeInfo from '@/views/RecipeInfo.vue'
import HealthPreference from '@/views/HealthPreference.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/recipes', component: Recipes },
  { path: '/saved', component: Saved },
  { path: '/recipe-info/:recipeId', name: 'RecipeInfo', component: RecipeInfo },
  { path: '/health-preference', component: HealthPreference },
  { path: '/:catchAll(.*)', redirect: '/home' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
