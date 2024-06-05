'use client'

import { changeLanguage } from '@/context/Actions';
import { AppContext } from '@/context/Provider';
import { en } from '@/languages/en';
import { es } from '@/languages/es';
import { ILanguage } from '@/types';
import { useContext, useState } from 'react';

type Language = 'ES' | 'EN';

export const useLanguage = (): {lang: ILanguage, language: Language, handleLanguageChange: () => void, isSpanish: boolean} => {
    const { state: { language }, dispatch } = useContext(AppContext)

    const lang = language === 'ES' ? es : en

    const handleLanguageChange = () => {
        changeLanguage(dispatch, language === 'ES' ? 'EN' : 'ES');
    };
    
    const isSpanish = language === 'ES';

    return {lang, language: language as Language, handleLanguageChange, isSpanish};
};

