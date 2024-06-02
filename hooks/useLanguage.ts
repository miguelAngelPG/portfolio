'use client'

import { changeLanguage } from '@/context/Actions';
import { AppContext } from '@/context/Provider';
import { en } from '@/languages/en';
import { es } from '@/languages/es';
import { ILanguage } from '@/types';
import { useContext, useState } from 'react';

type Language = 'ES' | 'EN';

export const useLanguage = (): [ILanguage, Language, () => void] => {
    const { state: { language }, dispatch } = useContext(AppContext)

    const lang = language === 'ES' ? es : en

    const handleLanguageChange = () => {
        changeLanguage(dispatch, language === 'ES' ? 'EN' : 'ES');
    };
    
    return [lang, language as Language, handleLanguageChange];
};

