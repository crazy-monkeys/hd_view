import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '@/store';
import SingleCenter from '../views/Layout/SingleCenter.vue';
import CommonLayout from '../views/Layout/Common.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/',
    component: CommonLayout,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/Index'),
      },
    ],
  },
  {
    path: '/',
    component: SingleCenter,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: { noAuth: true },
        component: () => import(/* webpackChunkName: "login" */ '../views/Login'),
      },
    ],
  },
  {
    path: '*',
    meta: { noAuth: true },
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  // 判断要跳转的路由
  const { noAuth } = to.meta;
  // TODO 鉴权
  const logined = await Store.dispatch('checkAuth');
  if (!noAuth && !logined) {
    // console.log('未登陆');
    next({ path: '/login' });
  }
  return next();
});

export default router;
