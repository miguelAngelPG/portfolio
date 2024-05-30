'use client'

import { changeLanguage } from '@/context/Actions';
import { AppContext } from '@/context/Provider';
import { useContext, useState } from 'react';
import { FiGlobe } from 'react-icons/fi';

export const LanguageSwitch = () => {

    const { state, dispatch } = useContext(AppContext)
    const { language } = state

    const [isHovered, setIsHovered] = useState(false)
    // const [language, setLanguage] = useState('EN')
    // const state = useContext(Context);
    const handleLanguageChange = () => {
        changeLanguage(dispatch, language === 'ES' ? 'EN' : 'ES');
    };

    return (
        <button
            className='flex items-center min-h-10 justify-center text-sm gap-3 bg-emerald-200 dark:bg-emerald-500 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-slate-900 dark:text-indigo-100 py-2 px-4 font-AileronBold rounded-lg duration-100'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleLanguageChange()}
        >
            <FiGlobe className={`leading-none text-xl ${ isHovered ? 'animate-fadeOutLanguge' : 'animate-fadeInLanguge'}`} />
            <span className={`text-lg leading-none absolute font-semibold ${ !isHovered ? 'animate-fadeOutLanguge' : 'animate-fadeInLanguge'}`}>{language}</span>
        </button>

    );
};