import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { initBlocks } from './blocks'
import { installAntdv } from './plugins/components/antdv'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(initBlocks())
app.use(router)
installAntdv(app)

app.mount('#app')
