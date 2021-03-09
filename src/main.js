import { createApp } from 'vue';
import App from './App.vue';
import AinUI from './libs/ainui';
import router from './routes';

createApp(App)
  .use(AinUI)
  .use(router)
  .mount('#app');
