import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { initBlocks } from './blocks'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(initBlocks())
app.use(router)

app.mount('#app')
