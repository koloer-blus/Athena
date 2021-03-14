import loadable from '@loadable/component';
import { RouteInterface } from '@/types/route';

export const routes: RouteInterface[] = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/app-list')),
    name: 'appList',
    title: 'appList',
  },
];
