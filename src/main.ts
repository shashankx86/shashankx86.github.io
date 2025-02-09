import './assets/critical.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import { preloadIosevkaFont } from './utils/fontLoader.ts'

// Preload and cache the font
preloadIosevkaFont()

const app = createApp(App)
app.use(router)
app.mount('#app')