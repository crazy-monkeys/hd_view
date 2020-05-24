// package
import Vue from 'vue';
import Antd from 'ant-design-vue';
import VueI18n from 'vue-i18n';

// styles
import './styles';

// components
import App from './App.vue';
import router from './router';
import store from './store';
import messages from './i18n';
import Loading from './plugins/Loading';

console.log(Vue.config);

Vue.config.productionTip = process.env.NODE_ENV === 'development';
Vue.config.devtools = process.env.NODE_ENV === 'development';


Vue.use(Antd);
Vue.use(VueI18n);
Vue.use(Loading);

const i18n = new VueI18n({
  locale: 'en', // 设置地区
  messages, // 设置地区信息
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
