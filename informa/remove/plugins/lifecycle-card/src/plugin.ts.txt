import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const lifecycleCardPlugin = createPlugin({
  id: 'lifecycle-card',
  routes: {
    root: rootRouteRef,
  },
});

export const LifecycleCardPage = lifecycleCardPlugin.provide(
  createRoutableExtension({
    name: 'LifecycleCardPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

export const versionInfoPlugin = createPlugin({
  id: 'version-info',
});