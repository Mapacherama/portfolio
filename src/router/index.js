// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Contact from '../pages/Contact.vue';
import Projects from '../pages/Projects.vue';
import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,  
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
