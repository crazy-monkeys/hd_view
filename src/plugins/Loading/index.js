import Vue from 'vue';
import loadingComponent from './main.vue';

const LoadingConstructor = Vue.extend(loadingComponent);

const instance = new LoadingConstructor({
  el: document.createElement('div'),
});

instance.show = false; // 默认隐藏

export const loading = {
  show() { // 显示方法
    document.body.appendChild(instance.$el);
    instance.show = true;
  },
  hide() { // 隐藏方法
    instance.show = false;
  },
};

export default {
  install() {
    if (!Vue.$loading) {
      Vue.$loading = loading;
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      },
    });
  },
};
