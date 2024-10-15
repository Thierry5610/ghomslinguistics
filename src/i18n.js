import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files for each page
import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
import languagesEN from './locales/en/languages.json'
import registrationEN from './locales/en/registration.json'
import newsEN from './locales/en/news.json'
// import contactEN from './locales/en/contact.json';
import homeFR from './locales/fr/home.json';
import aboutFR from './locales/fr/about.json';
import languagesFR from './locales/fr/languages.json'
import registrationFR from './locales/fr/registration.json'
import newsFR from './locales/fr/news.json'


// import contactFR from './locales/fr/contact.json';
import homeDE from './locales/de/home.json';
import aboutDE from './locales/de/about.json';
import languagesDE from './locales/de/languages.json'
import registrationDE from './locales/de/registration.json'
import newsDE from './locales/de/news.json'


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
        languages: languagesEN,
        registration: registrationEN,
        news: newsEN
        //contact: contactEN,
      },
      fr: {
        home: homeFR,
        about: aboutFR,
        languages: languagesFR,
        registration: registrationFR,
        news: newsFR
        //contact: contactFR,
      },
      de: {
        home: homeDE,
        about: aboutDE,
        languages: languagesDE,
        registration: registrationDE,
        news: newsDE
        //contact: contactDE,
      },
    },
    fallbackLng: 'en', // Fallback language
    supportedLngs: ['en', 'fr', 'de'], // Supported languages
    ns: ['home', 'about', 'contact', 'languages','registration','news'], // Namespaces for each page
    defaultNS: 'home', // Default namespace
    debug: true, // Turn off in production
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
