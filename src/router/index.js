// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
// import Recipes from '@/views/Recipes.vue'
// import Saved from '@/views/Saved.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  //   { path: '/recipes', component: Recipes },
  //   { path: '/saved', component: Saved },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
