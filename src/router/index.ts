import { AxiosCanceler } from './../libs/helper/axiosCancel';
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import NProgress from '@/libs/nprogress';

const axiosCanceler = new AxiosCanceler();

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
  {
    path: '/unocss',
    name: 'unocss',
    component: () => import('@/views/unocss/index.vue'),
  },
  {
    path: '/testEnv',
    name: 'testEnv',
    component: () => import('@/views/testEnv/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 采用HTML5模式,使用 history.pushState API
  routes,
});

// * 路由拦截 beforeEach
router.beforeEach((to, from, next) => {
  NProgress.start();
  // * 在跳转路由之前，清除所有的请求

  axiosCanceler.removeAllPending();

  // * 判断当前路由是否需要访问权限
  // if (!to.matched.some(record => record.meta.requiresAuth)) return next();

  // * 判断是否有Token
  // const globalStore = GlobalStore();
  // if (!globalStore.token) {
  // 	next({
  // 		path: "/login"
  // 	});
  // 	NProgress.done();
  // 	return;
  // }

  // const authStore = AuthStore();
  // * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
  // const dynamicRouter = authStore.dynamicRouter;
  // * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
  // const staticRouter = [HOME_URL, "/403"];
  // const routerList = dynamicRouter.concat(staticRouter);

  // // * 如果访问的地址没有在路由表中重定向到403页面
  // if (routerList.indexOf(to.path) !== -1) return next();
  // next({
  // 	path: "/403"
  // });

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
