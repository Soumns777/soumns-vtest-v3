import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/dist/index.css'; // element css
import { createPersistedState } from 'pinia-persistedstate-plugin';
import App from './App.vue';
import 'uno.css';

import * as Icons from '@element-plus/icons-vue';

const app = createApp(App);

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

import router from '@/router/index';

const store = createPinia();
store.use(createPersistedState());

createApp(App).use(router).use(store).mount('#app');
