import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/dist/index.css'; // element css
import { createPersistedState } from 'pinia-persistedstate-plugin';
import App from './App.vue';
import 'uno.css';
import * as Icons from '@element-plus/icons-vue';
import router from '@/router/index';

// 引入vconsole
// import VConsole from 'vconsole';
// import { initPlugin } from 'vue-vconsole-devtools';
// initPlugin(new VConsole());

const app = createApp(App);

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

const store = createPinia();
store.use(createPersistedState());

createApp(App).use(router).use(store).mount('#app');
