import { createApp } from 'vue';
import App from '@/modules/App/index.vue';
import routes from './routes';
import store from './store';
import './assets/styles/tailwind.css'

createApp(App).use(store).use(routes).mount('#app');
