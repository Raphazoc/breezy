import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traduções
const resources = {
  "pt-BR": {
    translation: {
      welcome: "Bem-vindo",
      explore: "Explore",
      privacy: "Privacidade",
      terms: "Termos",
      siteMap: "Mapa do site",
      // ...adicione mais traduções conforme for usando
    },
  },
  "en-US": {
    translation: {
      welcome: "Welcome",
      explore: "Explore",
      privacy: "Privacy",
      terms: "Terms",
      siteMap: "Site Map",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt-BR", // idioma padrão
    fallbackLng: "pt-BR",
    interpolation: {
      escapeValue: false, // React já faz isso por segurança
    },
  });

export default i18n;
