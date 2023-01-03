import { default_locale, supported_locales, TLocale } from '../constants/i18n.constants'

export function useLastLocaleLS() {
  return useLocalStorage<null | TLocale>('locale', null)
}

export function setLastLocaleLS(newValue: TLocale | null) {
  const lastLocale = useLastLocaleLS()
  if (lastLocale.value !== newValue) {
    lastLocale.value = newValue
  }
}

export function getPreferableLocale(): string {
  return window.navigator.language || default_locale
}

export function removeLocaleParam(path: string) {
  const temp = path.split('/')
  return temp.length === 3 ? temp.slice(2).join('/') : temp.slice(1).join('/')
}

export function localeIsSupported(locale: TLocale) {
  return supported_locales.includes(locale)
}

export async function loadLocale(maybeNewlocale: string) {
  return await useFetch(`/server/locales/${maybeNewlocale}.json`).json()
}
