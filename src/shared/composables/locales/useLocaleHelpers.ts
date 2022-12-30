import { TLocale } from './useLocales'

export const useLocaleHelpers = () => {
  function useLastLocaleLS() {
    return useLocalStorage<null | TLocale>('locale', null)
  }

  function setLastLocaleLS(newValue: TLocale | null) {
    const lastLocale = useLastLocaleLS()
    lastLocale.value = newValue
  }

  async function loadLocale(locale: TLocale) {
    const response = await fetch(`/server/locales/${locale}.json`)
    if (response.ok) {
      return response.json()
    }
  }

  function getPreferableLocale() {
    return window.navigator.language || default_locale
  }

  function removeLocaleParam(path: string) {
    const temp = path.split('/')
    return temp.length === 3 ? temp.slice(2).join('/') : temp.slice(1).join('/')
  }

  return { loadLocale, useLastLocaleLS, getPreferableLocale, removeLocaleParam, setLastLocaleLS }
}
