import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language } from './translations';

type Translations = typeof translations[Language];

interface LanguageContextValue {
    language: Language;
    toggleLanguage: () => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'pt' : 'en'));

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
    return ctx;
}
