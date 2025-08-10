import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import App from './App.vue';
import Home from './pages/home.vue';
const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
