import { defineConfig } from 'umi';

export default defineConfig({
 nodeModulesTransform: {
    type: 'none',
  },

  dva:{},
  antd:{},


  /* "proxy": {
    "/api": {
      "target": "https://pvp.qq.com",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  } */
  plugins:[
      'umi-plugin-gh-pages',

  ],
  base: '/umi-course/',
  publicPath:'/umi-course/',
});
