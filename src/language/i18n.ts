import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en_translation from "../../public/assets/locales/en/en.json";
import it_translation from "../../public/assets/locales/it/it.json";

const resources = {
  en: {
    translation: en_translation,
  },
  it: {
    translation: it_translation,
  },
};

i18next.use(initReactI18next).use(LanguageDetector).init({
  lng: "en",
  debug: true,
  resources,
});
