import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { es } from '../Internationalization/translation/ES';
import { en } from '../Internationalization/translation/EN';
import { ua } from './translation/UA';

export const LANGUAGES = {
  EN: 'en',
  UA: 'ua',
  ES: 'es',
};

const resources = {
  [LANGUAGES.EN]: {
    translation: en,
  },
  [LANGUAGES.UA]: {
    translation: ua,
  },
  [LANGUAGES.ES]: {
    translation: es,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: LANGUAGES.EN,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
