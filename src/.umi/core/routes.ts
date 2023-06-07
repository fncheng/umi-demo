// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/cheng/Github/umi-demo/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/About",
    "exact": true,
    "component": require('@/pages/About/index.tsx').default
  },
  {
    "path": "/ProTable",
    "exact": true,
    "component": require('@/pages/ProTable/index.tsx').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.tsx').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
