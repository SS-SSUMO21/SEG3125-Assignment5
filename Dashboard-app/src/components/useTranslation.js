import { useState, useContext, createContext } from "react";
import translations from "./Translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return { t };
};