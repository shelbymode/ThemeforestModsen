import { createApp } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHistory, NavigationGuardNext } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import '../assets/styles/variables.scss'
import '../assets/styles/global.scss'
import { routes } from './routes'
import { TLocale, useLocale } from './shared/composables/locales/useLocales'
import { useLocaleHelpers } from './shared/composables/locales/useLocaleHelpers'

const {
  i18n,
  changeGlobalLocale,
  localeIsAvailable,
  localeIsSupported,
  loadPreferableLocale,
  setLoadedLocale,
  redirectToDefaultLocale,
} = useLocale()

const { loadLocale, useLastLocaleLS, setLastLocaleLS, removeLocaleParam } = useLocaleHelpers()
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

async function setLocale(maybeNewlocale: TLocale, path: string, next: NavigationGuardNext) {
  /**
   *  Currently we don't have such a locale in storage
   */
  if (!localeIsAvailable(maybeNewlocale)) {
    console.log('a')

    /**
     * This locale can be loaded asynchronously
     */
    if (localeIsSupported(maybeNewlocale)) {
      console.log('b')

      /**
       * Try to load this locale
       */
      await loadLocale(maybeNewlocale).then((loadedLocale) => {
        if (loadedLocale) {
          console.log('c')

          setLoadedLocale(maybeNewlocale, loadedLocale, path, next)
        } else {
          console.log('d')

          redirectToDefaultLocale(path, next)
        }
      })
    } else {
      console.log('e')

      /**
       * There is not such locale --> use last saved locale and redirect
       */
      const lastLocale = useLastLocaleLS()

      changeGlobalLocale(lastLocale.value as TLocale)
      const correctPath = removeLocaleParam(path)

      next(`${lastLocale.value}/${correctPath}`)
    }
  } else {
    console.log('d')
    // We have already loaded the locale
    changeGlobalLocale(maybeNewlocale)
    setLastLocaleLS(maybeNewlocale)
    next()
  }
}

router.beforeEach(async (to, _, next) => {
  const currentLocale = to.params.locale as TLocale

  await loadPreferableLocale()
  await setLocale(currentLocale, to.path, next)
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
