import { createI18n } from 'vue-i18n'
import { NavigationGuardNext } from 'vue-router'
import { useLocaleHelpers } from './useLocaleHelpers'

export const supported_locales: string[] = import.meta.env.VITE_APP_I18N_SUPPORTED_LOCALE?.split(',') || ['en', 'ru']
export const default_locale: string = import.meta.env.VITE_APP_I18N_LOCALE || 'en'
export type TLocale = 'en' | 'ru'

const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
  ru: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
}
const numberFormats = {
  en: {
    currency: {
      style: 'currency',
      currency: 'USD',
    },
  },
  ru: {
    currency: {
      style: 'currency',
      currency: 'RUB',
    },
  },
}

export const useLocale = () => {
  const i18n = createI18n({
    locale: default_locale,
    fallbackLocale: default_locale,
    legacy: false,
    messages: {},
    dateTimeFormats,
    numberFormats,
  })

  function changeGlobalLocale(locale: TLocale) {
    i18n.global.locale.value = locale
    document.querySelector('html')?.setAttribute('lang', locale)
  }

  function addNewLocale(locale: TLocale, localeData: object) {
    i18n.global.setLocaleMessage(locale, localeData)
  }

  function localeIsAvailable(locale: TLocale) {
    return i18n.global.availableLocales.includes(locale)
  }

  function localeIsSupported(locale: TLocale) {
    return supported_locales.includes(locale)
  }

  const { loadLocale, getPreferableLocale, removeLocaleParam, useLastLocaleLS, setLastLocaleLS } = useLocaleHelpers()
  /**
   * Try to determine the user's locale ->
   * either return nothing
   * either loads local and
   * save preffered locale to local storage
   */
  async function loadPreferableLocale() {
    const userLocale = useLastLocaleLS()

    /**
     * We already have the preferable locale
     */
    if (userLocale.value) return

    /**
     * User didn't set correctly locale -> try to find out preferable
     */
    const preferableLocale = getPreferableLocale()
    const preferableLocaleISO = preferableLocale.split('-')[0]

    let selectedLocale

    if (supported_locales.includes(preferableLocale)) {
      selectedLocale = preferableLocale
    } else if (supported_locales.includes(preferableLocaleISO)) {
      selectedLocale = preferableLocaleISO
    } else {
      selectedLocale = default_locale
      console.warn(`user preferable locale is not supported:`, preferableLocale)
    }

    userLocale.value = selectedLocale as TLocale

    const userLocaleData = await loadLocale(userLocale.value as TLocale)
    addNewLocale(userLocale.value, userLocaleData)
  }

  /**
   * Set new locale as current locale and save to local storage
   */
  function setLoadedLocale(locale: TLocale, messages: object, path: string, next: NavigationGuardNext) {
    addNewLocale(locale, messages)
    changeGlobalLocale(locale)
    setLastLocaleLS(locale)

    next(`${path}`)
  }

  /**
   * Occured problem with loading locale - redirect to home page with default locale
   */
  function redirectToDefaultLocale(path: string, next: NavigationGuardNext) {
    const correctPath = removeLocaleParam(path)
    next(`${default_locale}/${correctPath}`)
  }

  return {
    i18n,
    changeGlobalLocale,
    localeIsAvailable,
    localeIsSupported,
    loadPreferableLocale,
    setLoadedLocale,
    redirectToDefaultLocale,
  }
}
