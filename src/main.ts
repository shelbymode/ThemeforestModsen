import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import ru from './locales/ru.json'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import '../assets/styles/variables.scss'
import '../assets/styles/global.scss'
import { routes } from './routes'

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: {
    en,
    ru,
  },
})

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to, from, next) => {
  console.log('run hook beforeEach')

  const currentLanguage = to.params.lang as string

  if (!['en', 'ru'].includes(currentLanguage)) {
    console.log('a')

    const lastLocale = useLocalStorage('locale', 'en').value
    i18n.global.locale.value = lastLocale as 'en' | 'ru'
    next(`${lastLocale}${to.path}`)
  } else {
    console.log('b', currentLanguage)

    i18n.global.locale.value = currentLanguage as 'en' | 'ru'
    localStorage.setItem('locale', currentLanguage)
    next()
  }
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
