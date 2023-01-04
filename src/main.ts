import { createApp } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import '../assets/styles/variables.scss'
import '../assets/styles/global.scss'
import { routes } from './routes'
import { useLocale } from './shared/composables/i18n/useLocales'
import { TLocale } from './shared/constants/i18n.constants'

const { i18n, loadAndAddPreferableLocale, setCurrentLocale } = useLocale()

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (removeLocaleParam(from.path) === removeLocaleParam(to.path)) {
      return
    }
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach(async (to, _, next) => {
  const currentLocale = to.params.locale as TLocale

  await loadAndAddPreferableLocale()
  await setCurrentLocale(currentLocale, to.path, next)
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
