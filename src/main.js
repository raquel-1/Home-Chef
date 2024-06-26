import '@/assets/styles/scss/reset.scss'
import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router).mount('#app')
