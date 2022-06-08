import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// 创建路由表
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'todoListLogin' },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/todoListLogin',
    name: 'todoListLogin',
    component: () => import('@/views/todoList/login.vue'),
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: () => import('@/views/todoList/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(), // 采用HTML5模式,使用 history.pushState API
  routes,
});

export default router;
