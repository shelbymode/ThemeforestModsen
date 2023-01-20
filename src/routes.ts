import Home from '~/ui/pages/home.vue'
import { RouteNames } from './shared/constants/routes.constant'

export const routes = [
  {
    path: '/:locale',
    component: {
      template: '<router-view></router-view>',
    },
    children: [
      {
        path: 'home',
        name: RouteNames.HOME,
        component: Home,
      },
      {
        path: 'services',
        name: RouteNames.SERVICES,
        component: () => import('~/ui/pages/services.vue'),
      },
      {
        path: 'about',
        name: RouteNames.ABOUT,
        component: () => import('~/ui/pages/about.vue'),
      },
      {
        path: 'blogs',
        name: RouteNames.BLOGS,
        component: () => import('~/ui/pages/blog/index.vue'),
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('~/ui/pages/test.vue'),
      },
      {
        path: 'test2',
        name: 'Test2',
        component: () => import('~/ui/pages/test2.vue'),
      },
      {
        path: 'blog/:id',
        name: RouteNames.BLOG_ID,
        component: () => import('~/ui/pages/blog/[id].vue'),
        props: true,
      },
      {
        path: 'contacts',
        name: RouteNames.CONTACTS,
        component: () => import('~/ui/pages/contacts.vue'),
        props: true,
      },
      {
        path: ':catchAll(.*)',
        name: RouteNames.NOT_FOUND,
        redirect: {
          name: 'Home',
        },
      },
    ],
  },
]
