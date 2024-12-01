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
//admin translation files

import adminCourseModalEN from './locales/en/admin-course-modal.json'
import adminCourseEN from './locales/en/admin-courses.json'
import adminDashboardEN from './locales/en/admin-dashboard.json'
import adminHeaderEN from './locales/en/admin-header.json'
import adminNewsModalEN from './locales/en/admin-news-modal.json'
import adminNewsEN from './locales/en/admin-news.json'
import adminSettingsEN from './locales/en/admin-settings.json'
import adminStudentModalEN from './locales/en/admin-student-modal.json'
import adminStudentsEN from './locales/en/admin-students.json'
import loginEN from './locales/en/login.json'
import sideNavEN from './locales/en/sidenav.json'



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
//admin translation files

import adminCourseModalFR from './locales/fr/admin-course-modal.json'
import adminCourseFR from './locales/fr/admin-courses.json'
import adminDashboardFR from './locales/fr/admin-dashboard.json'
import adminHeaderFR from './locales/fr/admin-header.json'
import adminNewsModalFR from './locales/fr/admin-news-modal.json'
import adminNewsFR from './locales/fr/admin-news.json'
import adminSettingsFR from './locales/fr/admin-settings.json'
import adminStudentModalFR from './locales/fr/admin-student-modal.json'
import adminStudentsFR from './locales/fr/admin-students.json'
import loginFR from './locales/fr/login.json'
import sideNavFR from './locales/fr/sidenav.json'



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
//admin translation files

import adminCourseModalDE from './locales/de/admin-course-modal.json'
import adminCourseDE from './locales/de/admin-courses.json'
import adminDashboardDE from './locales/de/admin-dashboard.json'
import adminHeaderDE from './locales/de/admin-header.json'
import adminNewsModalDE from './locales/de/admin-news-modal.json'
import adminNewsDE from './locales/de/admin-news.json'
import adminSettingsDE from './locales/de/admin-settings.json'
import adminStudentModalDE from './locales/de/admin-student-modal.json'
import adminStudentsDE from './locales/de/admin-students.json'
import loginDE from './locales/de/login.json'
import sideNavDE from './locales/de/sidenav.json'

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
        course: courseEN,
        adminCourseModal: adminCourseModalEN,
        adminCourse: adminCourseEN,
        adminDashboard: adminDashboardEN,
        adminHeader: adminHeaderEN,
        adminNewsModal: adminNewsModalEN,
        adminNews: adminNewsEN,
        adminSettings: adminSettingsEN,
        adminStudentModal: adminStudentModalEN,
        adminStudents: adminStudentsEN,
        login: loginEN,
        sideNav: sideNavEN
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
        course: courseFR,
        adminCourseModal: adminCourseModalFR,
        adminCourse: adminCourseFR,
        adminDashboard: adminDashboardFR,
        adminHeader: adminHeaderFR,
        adminNewsModal: adminNewsModalFR,
        adminNews: adminNewsFR,
        adminSettings: adminSettingsFR,
        adminStudentModal: adminStudentModalFR,
        adminStudents: adminStudentsFR,
        login: loginFR,
        sideNav: sideNavFR        
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
        course: courseDE,
        adminCourseModal: adminCourseModalDE,
        adminCourse: adminCourseDE,
        adminDashboard: adminDashboardDE,
        adminHeader: adminHeaderDE,
        adminNewsModal: adminNewsModalDE,
        adminNews: adminNewsDE,
        adminSettings: adminSettingsDE,
        adminStudentModal: adminStudentModalDE,
        adminStudents: adminStudentsDE,
        login: loginDE,
        sideNav: sideNavDE        
      },
    },
    fallbackLng: 'en', // Fallback language
    supportedLngs: ['en', 'fr', 'de'], // Supported languages
    ns: ['home', 'about', 'contactModal', 'languages','registration','news','registerCourseModal','registerModal','dataProtectionModal','navigation','footer','course','adminCourseModal', 'adminCourse', 'adminDashboard', 'adminHeader', 'adminNewsModal', 'adminNews', 'adminSettings', 'adminStudentModal', 'adminStudents','login','sidenav'], // Namespaces for each page
    defaultNS: 'home', // Default namespace
    debug: true, // Turn off in production
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
