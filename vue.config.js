console.log(`NODE_ENV:${process.env.NODE_ENV}`, `DEPLOY_ENV:${process.env.VUE_APP_DEPLOY_ENV}`);

module.exports = {
  lintOnSave: true,
  productionSourceMap: process.env.NODE_ENV === 'development',
  css: {
    loaderOptions: {
      less: {
        // modifyVars: {
        //   // 'primary-color': '#1DA57A',
        //   // 'link-color': '#1DA57A',
        //   // 'border-radius-base': '2px',
        // },
        javascriptEnabled: true,
      },
    },
  },
  // devServer: {
  //   disableHostCheck: true,
  //   proxy: {
  //     '^/imageManager/*': {
  //       target: 'http://10.45.71.122:8080',
  //       secure: false,
  //     },
  //   },
  // },

  // configureWebpack: config => {
  //   config.externals = {
  //     'v-charts': 'VeIndex',
  //   };
  // },

  // chainWebpack: config => {
  //   config
  //     .module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap(options => {
  //       options.transformAssetUrls = {
  //         video: 'src',
  //       };
  //       return options;
  //     });
  // },

};
