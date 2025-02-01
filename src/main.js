import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  // Import your router instance

createApp(App)
  .use(router) // Register the router with the app
  .mount('#app')
