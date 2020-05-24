import axios from './axios';

const host = 'http://portal.threeape.cn/portal-api';

export const getVerifyCode = () => axios.get(`${host}/verifyCode`, { responseType: 'blob' });

export const login = ({ loginName, loginPwd, verifyCode }) => axios.post(`${host}/user/login`, { loginName, loginPwd, verifyCode });

export const loginOut = () => axios.post(`${host}/logout`);
