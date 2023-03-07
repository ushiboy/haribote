import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ja from "./locales/ja.json";

const resources = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "ja"],
    detection: {
      order: ["navigator"],
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
