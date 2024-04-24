import { createI18n } from 'vue-i18n'
// import target languages
import en from '@/i18n/locales/en.json'

const LOCALE = import.meta.env.VITE_DEFAULT_LOCALE
const FALLBACK_LOCALE = import.meta.env.VITE_FALLBACK_LOCALE

// Type-define 'en' as the master schema for the locales
type MessageSchema = typeof en

export default createI18n<[MessageSchema], 'en'>({
  legacy: false,
  globalInjection: true,
  locale: LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages: {
    en
  }
})
