import axios from 'axios';
import { message as Message } from 'ant-design-vue';
import { loading } from '../plugins/Loading';

let loadingCount = 0;

const instance = axios.create({
  withCredentials: true,
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    loadingCount += 1;
    loading.show();
    const headers = {
      Authorization: '',
    };
    return Object.assign(config, { headers });
  },
  error => Promise.reject(error),
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    loadingCount -= 1;
    if (loadingCount === 0) {
      loading.hide();
    }
    if (response.data instanceof Blob) return Promise.resolve(response);
    if (response) {
      const {
        // code, status,
        // msg, message,
        data,
      } = response.data;
      // Message.error(msg || message);
      return Promise.resolve(data);
    }
    return Promise.resolve(response);
  },
  error => {
    loadingCount -= 1;
    if (loadingCount === 0) {
      loading.hide();
    }
    const { response } = error;
    if (response) {
      const {
        // code, status,
        msg, message,
      } = response.data;
      console.log(response);
      Message.error(msg || message);
      return Promise.reject(error);
    }
    Message.error('Network Error!');
    return Promise.reject(error);
  },
);

export default instance;
