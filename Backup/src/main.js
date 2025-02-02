import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  // Import your router instance
import { MotionPlugin } from '@vueuse/motion';

createApp(App)
  .use(router) // Register the router with the app
  .use(MotionPlugin)
  .mount('#app')
