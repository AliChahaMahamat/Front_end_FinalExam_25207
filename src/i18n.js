import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./Locales/en/translation.json";
import translationFR from "./Locales/fr/translation.json";

const resources = {
    en: { translation: translationEN },
    fr: { translation: translationFR },
};

i18n
    .use(LanguageDetector) // Detects user language
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources,
        fallbackLng: "en", // Default language
        interpolation: {
            escapeValue: false, // React already escapes strings
        },
    });

export default i18n;
