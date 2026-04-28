'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'en' | 'es';

interface LanguageContextType {
    lang: Lang;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'en',
    toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('en');

    useEffect(() => {
        const saved = localStorage.getItem('lang') as Lang | null;
        if (saved === 'en' || saved === 'es') setLang(saved);
    }, []);

    const toggleLang = () => {
        setLang((prev) => {
            const next = prev === 'en' ? 'es' : 'en';
            localStorage.setItem('lang', next);
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
