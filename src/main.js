import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const routes = [
  {
    path: '/en',
    component: () => import('./components/EnglishPage.vue'),
  },
  {
    path: '/ua',
    component: () => import('./components/UkrainianPage.vue'),
  },
  {
    path: '/',
    redirect: '/ua', // Redirect to /ua by default
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
