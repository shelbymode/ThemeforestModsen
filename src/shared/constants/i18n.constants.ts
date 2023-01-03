export const supported_locales: string[] = import.meta.env.VITE_APP_I18N_SUPPORTED_LOCALE?.split(',') || ['en', 'ru']
export const default_locale: string = import.meta.env.VITE_APP_I18N_LOCALE || 'en'
export type TLocale = 'en' | 'ru'

export const dateTimeFormats = {
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

export const numberFormats = {
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
