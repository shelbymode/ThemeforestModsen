import Home from '~/ui/pages/home.vue'
import { useI18n } from 'vue-i18n'

export const routes = [
  {
    path: '/:lang/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:lang/services',
    name: 'Services',
    component: () => import('~/ui/pages/services.vue'),
  },
  {
    path: '/:lang/about',
    name: 'About',
    component: () => import('~/ui/pages/about.vue'),
  },
  {
    path: '/:lang/blog',
    name: 'Blog',
    component: () => import('~/ui/pages/blog/index.vue'),
  },
  {
    path: '/:lang/blog/:id',
    name: 'BlogId',
    component: () => import('~/ui/pages/blog/[id].vue'),
    props: true,
  },
  {
    path: '/:lang/:cathAll(.*)',
    name: 'NotFound',
    redirect: {
      name: 'Home',
    },
  },
]
