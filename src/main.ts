import { createApp } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import '../assets/styles/variables.scss'
import '../assets/styles/global.scss'
import { routes } from './routes'
import { TLocale } from './shared/constants/i18n.constants'
import { GlobalConstants } from './shared/constants/global.constant'
import { useLocale } from './shared/composables/i18n/useLocales'
import { vTilt } from './shared/directives/vTilt'

const { i18n, setCurrentLocale } = useLocale()

const app = createApp(App)

app.directive('tilt', vTilt)

const router = createRouter({
  history: createWebHistory(GlobalConstants.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    /* if (removeLocaleParam(from.path) === removeLocaleParam(to.path)) {
      return
    } */
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach(async (to, _, next) => {
  const currentLocale = to.params.locale as TLocale
  await setCurrentLocale(currentLocale, to.path, next)
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
