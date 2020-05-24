<template>
  <div class="login">
    <a-form
      ref="form"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <h2 align="center">欢迎使用</h2>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'username',
            { rules: [{ required: true, message: '请输入用户名!' }] },
          ]"
          type="text"
          placeholder="账号">
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码!' }] },
          ]"
          type="password"
          placeholder="密码">
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          style="width: 50%; margin-right: 16px;"
          v-decorator="[
            'vCode',
            { rules: [{ required: true, message: '请输入验证码!' }] },
          ]"
          type="text"
          placeholder="验证码">
        </a-input>
        <img
          style="cursor: pointer; height: 26px;"
          :src="verifyCodeImg"
          @click.prevent="getVerifyCode">
      </a-form-item>
      <a-form-item>
        <a-button style="width: 100%" type="primary" html-type="submit">登陆</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { getVerifyCode } from '@/api/auth';

export default {
  name: 'Login',
  data() {
    return {
      verifyCodeImg: '',
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  created() {
    this.getVerifyCode();
  },
  methods: {
    ...mapActions([
      'loginIn',
    ]),
    async getVerifyCode() {
      const { data } = await getVerifyCode();
      this.verifyCodeImg = window.URL.createObjectURL(data);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loginHandle(values);
        }
      });
    },
    async loginHandle({ username, password, vCode }) {
      await this.loginIn({
        loginName: username,
        loginPwd: password,
        verifyCode: vCode,
      });
      this.$router.push('/index');
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 400px;
  // height: 250px;
  background-color: #FFFFFF;
  box-shadow: 0 0 8px rgba(109, 105, 105, 0.3);
  border-radius: 2px;
  padding: 24px 32px;
}
</style>
