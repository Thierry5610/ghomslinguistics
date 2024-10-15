import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files for each page
import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
// import contactEN from './locales/en/contact.json';
import homeFR from './locales/fr/home.json';
import aboutFR from './locales/fr/about.json';
// import contactFR from './locales/fr/contact.json';
import homeDE from './locales/de/home.json';
import aboutDE from './locales/de/about.json';
// import contactDE from './locales/de/contact.json';

// Configure i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources: {
      en: {
        home: homeEN,
        about: aboutEN,
        //contact: contactEN,
      },
      fr: {
        home: homeFR,
        about: aboutFR,
        //contact: contactFR,
      },
      de: {
        home: homeDE,
        about: aboutDE,
        //contact: contactDE,
      },
    },
    fallbackLng: 'en', // Fallback language
    supportedLngs: ['en', 'fr', 'de'], // Supported languages
    ns: ['home', 'about', 'contact'], // Namespaces for each page
    defaultNS: 'home', // Default namespace
    debug: true, // Turn off in production
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
