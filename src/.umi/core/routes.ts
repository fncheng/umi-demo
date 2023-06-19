// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/cheng/Github/umi-demo/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index')}),
    "exact": true
  },
  {
    "path": "/about",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__About' */'@/pages/About')}),
    "exact": true
  },
  {
    "path": "/protable",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ProTable' */'@/pages/ProTable')}),
    "exact": true
  },
  {
    "path": "/demo1",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Demo__demo1' */'@/pages/Demo/demo1')}),
    "exact": true
  },
  {
    "path": "/demo2",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__demo2' */'@/pages/demo2')}),
    "exact": true
  },
  {
    "path": "/demo3",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__demo3' */'@/pages/demo3')}),
    "exact": true
  },
  {
    "path": "/demo4",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__demo4' */'@/pages/demo4')}),
    "exact": true
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
