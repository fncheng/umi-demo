import { defineConfig } from 'umi';

export default defineConfig({
  devServer: {
    port: 8003,
  },
  esbuild: {},
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  // dynamicImport: {
  //   loading: '@ant-design/pro-layout/es/PageLoading',
  // },
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://unpkg.com/react@17.0.2/umd/react.development.js',
          'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js',
        ]
      : [
          'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
          'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js',
        ],
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/about', component: '@/pages/About' },
    { path: '/protable', component: '@/pages/ProTable' },
    { path: '/demo1', component: '@/pages/Demo/demo1' },
  ],
  ignoreMomentLocale: true,
  fastRefresh: {},
  mfsu: {},
  // webpack5: {},
  // exportStatic: {},
});
