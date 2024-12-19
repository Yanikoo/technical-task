import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.sass'

const app = createApp(App)

app.config.productionTip = false
app.mount('#app')
