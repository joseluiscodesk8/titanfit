import { createDevApp } from '@backstage/dev-utils';
import { lifecycleCardPlugin, LifecycleCardPage } from '../src/plugin';

createDevApp()
  .registerPlugin(lifecycleCardPlugin)
  .addPage({
    element: <LifecycleCardPage />,
    title: 'Root Page',
    path: '/lifecycle-card',
  })
  .render();
