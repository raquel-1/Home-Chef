// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Recipes from '@/views/Recipes.vue'
import Saved from '@/views/Saved.vue'
import RecipeInfo from '@/views/RecipeInfo.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/recipes', component: Recipes },
  { path: '/saved', component: Saved },
  { path: '/recipe-info', component: RecipeInfo },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
