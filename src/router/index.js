// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Projects from '../pages/Projects.vue';
import App from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,  
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,  
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,  
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
