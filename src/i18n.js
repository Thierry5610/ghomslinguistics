import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files for each page
import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
import languagesEN from './locales/en/languages.json'
import registrationEN from './locales/en/registration.json'
import newsEN from './locales/en/news.json'
import registerCourseModalEN from './locales/en/registerCourseModal.json'
import registerModalEN from './locales/en/registerModal.json'
import contactModalEN from './locales/en/contactModal.json'
import dataProtectionModalEN from './locales/en/dataProtectionModal.json'
import navigationEN from './locales/en/navigation.json'
import footerEN from './locales/en/footer.json'
import courseEN from './locales/en/course.json'

import homeFR from './locales/fr/home.json';
import aboutFR from './locales/fr/about.json';
import languagesFR from './locales/fr/languages.json'
import registrationFR from './locales/fr/registration.json'
import newsFR from './locales/fr/news.json'
import registerCourseModalFR from './locales/fr/registerCourseModal.json'
import registerModalFR from './locales/fr/registerModal.json'
import contactModalFR from './locales/fr/contactModal.json'
import dataProtectionModalFR from './locales/fr/dataProtectionModal.json'
import navigationFR from './locales/fr/navigation.json'
import footerFR from './locales/fr/footer.json'
import courseFR from './locales/fr/course.json'

import homeDE from './locales/de/home.json';
import aboutDE from './locales/de/about.json';
import languagesDE from './locales/de/languages.json'
import registrationDE from './locales/de/registration.json'
import newsDE from './locales/de/news.json'
import registerCourseModalDE from './locales/de/registerCourseModal.json'
import registerModalDE from './locales/de/registerModal.json'
import contactModalDE from './locales/de/contactModal.json'
import dataProtectionModalDE from './locales/de/dataProtectionModal.json'
import navigationDE from './locales/de/navigation.json'
import footerDE from './locales/de/footer.json'
import courseDE from './locales/de/course.json'

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
        news: newsEN,
        registerCourseModal: registerCourseModalEN,
        registerModal: registerModalEN,
        contactModal: contactModalEN,
        dataProtectionModal: dataProtectionModalEN,
        navigation: navigationEN,
        footer: footerEN,
        course: courseEN
      },
      fr: {
        home: homeFR,
        about: aboutFR,
        languages: languagesFR,
        registration: registrationFR,
        news: newsFR,
        registerCourseModal: registerCourseModalFR,
        registerModal: registerModalFR,
        contactModal: contactModalFR,
        dataProtectionModal: dataProtectionModalFR,
        navigation: navigationFR,
        footer: footerFR,
        course: courseFR
      },
      de: {
        home: homeDE,
        about: aboutDE,
        languages: languagesDE,
        registration: registrationDE,
        news: newsDE,
        registerCourseModal: registerCourseModalDE,
        registerModal: registerModalDE,
        contactModal: contactModalDE,
        dataProtectionModal: dataProtectionModalDE,
        navigation: navigationDE,
        footer: footerDE,
        course: courseDE
      },
    },
    fallbackLng: 'en', // Fallback language
    supportedLngs: ['en', 'fr', 'de'], // Supported languages
    ns: ['home', 'about', 'contactModal', 'languages','registration','news','registerCourseModal','registerModal','dataProtectionModal','navigation','footer','course'], // Namespaces for each page
    defaultNS: 'home', // Default namespace
    debug: true, // Turn off in production
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
