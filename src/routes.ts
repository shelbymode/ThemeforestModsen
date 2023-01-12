import Home from '~/ui/pages/home.vue'

export const routes = [
  {
    path: '/:locale',
    component: {
      template: '<router-view></router-view>',
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'services',
        name: 'Services',
        component: () => import('~/ui/pages/services.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('~/ui/pages/about.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('~/ui/pages/blog/index.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('~/ui/pages/blog/index.vue'),
      },
      {
        path: 'blog/:id',
        name: 'CurrentBlog',
        component: () => import('~/ui/pages/blog/[id].vue'),
        props: true,
      },
      {
        path: 'contacts',
        name: 'Contact',
        component: () => import('~/ui/pages/contacts.vue'),
        props: true,
      },
      {
        path: ':catchAll(.*)',
        name: 'NotFound',
        redirect: {
          name: 'Home',
        },
      },
    ],
  },
]
