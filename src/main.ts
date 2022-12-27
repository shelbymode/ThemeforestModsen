import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import ru from './locales/ru.json'

import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import '../assets/styles/variables.scss'
import '../assets/styles/global.scss'

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
  console.log('to:', to)
  if (!to.path.startsWith('/en') && !to.path.startsWith('/ru')) {
    const newPath = `/${from.params.lang}${to.path}`
    console.log('a')

    next(newPath)
  } else if (to.matched.length === 0 || (to.matched.length === 1 && to.matched[0].path === '/:lang/:all(.*)')) {
    i18n.global.locale.value = 'en'
    console.log('b')

    next('en/home')
  } else if (!to.params.lang && !from.params.lang) {
    i18n.global.locale.value = 'en'
    console.log('c')

    next(`en${to.path}`)
  } else {
    let newLocale = to.params.lang as string
    if (!['en', 'ru'].includes(newLocale)) {
      newLocale = 'en'
    }
    console.log('d')

    i18n.global.locale.value = newLocale as 'en' | 'ru'
    next()
  }
})
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
