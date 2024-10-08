import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import local translation files
import translationEN from './locales/en/translation.json';
// import translationES from './locales/es/translation.json';

// Configure i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to React
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
    //   es: {
    //     translation: translationES,
    //   },
      // Add more languages here as needed
    },
    fallbackLng: 'en', // Default language
    supportedLngs: ['en'], // Languages you want to support
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'], // Cache the user language
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;