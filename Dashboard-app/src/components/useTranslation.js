import { useContext, createContext, useState } from "react";
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
  const { language, setLanguage } = useContext(LanguageContext);

  const t = (key) => translations[language]?.[key] || key;

  return { t, language, setLanguage };
};