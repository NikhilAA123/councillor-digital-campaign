import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../utils/translations";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    // Try to get language from local storage, default to 'en'
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("appLanguage") || "en";
    });

    // Update local storage when language changes
    useEffect(() => {
        localStorage.setItem("appLanguage", language);
    }, [language]);

    const t = translations[language];

    const value = {
        language,
        setLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
