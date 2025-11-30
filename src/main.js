import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'

createApp(App)
  .use(router)
  .mount('#app')
