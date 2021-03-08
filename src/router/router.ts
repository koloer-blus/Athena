import loadable from '@loadable/component';
import { RouteInterface } from '@/types/route';
export const basename = '';

export const routes: RouteInterface[] = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/Home')),
    name: 'home',
    title: 'home',
  }
];
