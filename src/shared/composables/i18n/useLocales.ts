import { createI18n } from 'vue-i18n'
import { NavigationGuardNext } from 'vue-router'
import {
  dateTimeFormats,
  default_locale,
  numberFormats,
  supported_locales,
  TLocale,
} from '../../constants/i18n.constants'
import {
  useLastLocaleLS,
  getPreferableLocale,
  setLastLocaleLS,
  removeLocaleParam,
  localeIsSupported,
  loadLocale,
} from '../../utils/localeHelpers'

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
    if (i18n.global.locale.value !== locale) {
      i18n.global.locale.value = locale
      document.querySelector('html')?.setAttribute('lang', locale)
    }
  }

  function addNewLocale(locale: TLocale, localeData: object) {
    i18n.global.setLocaleMessage(locale, localeData)
  }

  function localeIsAvailable(locale: TLocale) {
    return i18n.global.availableLocales.includes(locale)
  }

  /**
   * Try to determine the user's locale ->
   * either return nothing
   * either loads local and
   * save preferred locale to local storage
   */
  async function loadAndAddPreferableLocale() {
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

    const { data: localeData, error } = await loadLocale(userLocale.value)

    if (localeData.value && !error.value) {
      addNewLocale(userLocale.value, localeData.value)
    }
  }

  /**
   * Set new locale as current locale and save to local storage
   */
  function setLoadedLocale(locale: TLocale, messages: object) {
    addNewLocale(locale, messages)
    changeGlobalLocale(locale)
    setLastLocaleLS(locale)
  }

  /**
   * Occured problem with loading locale - redirect to home page with default locale
   */
  function redirectToDefaultLocale(path: string, next: NavigationGuardNext) {
    const correctPath = removeLocaleParam(path)
    next(`${default_locale}/${correctPath}`)
  }

  async function setCurrentLocale(maybeNewlocale: TLocale, path: string, next: NavigationGuardNext) {
    /**
     *  Currently we don't have such a locale in storage
     */
    if (!localeIsAvailable(maybeNewlocale)) {
      console.log('Currently this locale is not available', maybeNewlocale)

      /**
       * This locale can be loaded asynchronously
       */
      if (localeIsSupported(maybeNewlocale)) {
        console.log('This locale is supported', maybeNewlocale)

        /**
         * Try to load this locale
         */
        const { data: localeData, error } = await loadLocale(maybeNewlocale)

        if (localeData.value && !error.value) {
          console.log('This locale was successfully loaded')
          setLoadedLocale(maybeNewlocale, localeData.value)
          next()
        } else {
          console.error(error)
          console.warn('There was a problem loading this locale')
          redirectToDefaultLocale(path, next)
        }
      } else {
        console.log('This locale is not supported!')

        /**
         * There is not such locale --> use last saved locale and redirect
         */
        const lastLocale = useLastLocaleLS()

        changeGlobalLocale(lastLocale.value as TLocale)
        const correctPath = removeLocaleParam(path)

        next(`${lastLocale.value}/${correctPath}`)
      }
    } else {
      console.log(`This locale (${maybeNewlocale}) is already loaded and available`)
      /**
       *  We have already loaded the locale
       */
      changeGlobalLocale(maybeNewlocale)
      setLastLocaleLS(maybeNewlocale)
      next()
    }
  }

  return {
    i18n,
    loadAndAddPreferableLocale,
    setCurrentLocale,
  }
}
