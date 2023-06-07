import { defineConfig } from 'umi';

export default defineConfig({
  esbuild: {},
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
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
    // {path: '/test',}
  ],
  ignoreMomentLocale: true,
  fastRefresh: {},
});
