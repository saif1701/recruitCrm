import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'boxicons/css/boxicons.min.css';

const app = createApp(App)

// install Pinia
const pinia = createPinia()
app.use(pinia)

app.mount('#app')