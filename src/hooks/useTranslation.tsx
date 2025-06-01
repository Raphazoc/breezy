
import { useState, useEffect } from 'react';
import { translations } from '@/i18n/translations';

type Language = 'pt-BR' | 'en-US';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pt-BR');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[currentLanguage];
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback para português se a tradução não existir
        current = translations['pt-BR'];
        for (const fallbackKey of keys) {
          if (current && typeof current === 'object' && fallbackKey in current) {
            current = current[fallbackKey];
          } else {
            return path; // Retorna a chave se não encontrar tradução
          }
        }
        break;
      }
    }
    
    return typeof current === 'string' ? current : path;
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
    isPortuguese: currentLanguage === 'pt-BR',
    isEnglish: currentLanguage === 'en-US'
  };
};
