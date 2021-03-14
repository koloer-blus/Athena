import loadable from '@loadable/component';
import { RouteInterface } from '@/types/route';
export const basename = '/athena';

export const routes: RouteInterface[] = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/dashboard')),
    name: 'dashboard',
    title: 'dashboard',
  },
  {
    path: '/login',
    exact: true,
    component: loadable(() => import('@/pages/login')),
    name: 'login',
    title: 'login',
  },
];
