import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../Locale/en.json";
import translationPT from "../Locale/pt.json";
import translationES from "../Locale/es.json";

i18n
  .use(initReactI18next) // inicializa o i18n e configura o uso do react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      pt: {
        translation: translationPT,
      },
      es: {
        translation: translationES,
      },
    },
    lng: "en", // Defini o idioma padrão como inglês
    fallbackLng: "en", // Defini o idioma de fallback como inglês
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;