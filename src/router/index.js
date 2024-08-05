import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Adjust this path if needed

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
