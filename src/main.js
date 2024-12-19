import './assets/css/style.css'
import '../node_modules/bootstrap/dist/js/bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
