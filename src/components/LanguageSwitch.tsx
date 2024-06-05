'use client'

import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '@/hooks/useLanguage';
import { ButtonHover } from './ButtonHover';
import { Tooltip } from './Tooltip';

export const LanguageSwitch = () => {

    const { language, lang, handleLanguageChange } = useLanguage();

    return (
        <>
            <ButtonHover text={language} handleClick={handleLanguageChange} Icon={FiGlobe} className="bg-emerald-200 dark:bg-emerald-500" />
            <Tooltip text={ lang.hero.tooltipLanguages }/>
        </>
        // <button
        //     className='flex items-center min-h-10 justify-center text-sm gap-3 bg-emerald-200 dark:bg-emerald-500 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-slate-900 dark:text-indigo-100 py-2 px-4 font-AileronBold rounded-lg duration-100'
        //     onMouseEnter={() => setIsHovered(true)}
        //     onMouseLeave={() => setIsHovered(false)}
        //     onClick={() => handleLanguageChange()}
        // >
        //     <FiGlobe className={`leading-none text-xl ${ isHovered ? 'animate-fadeOutLanguge' : 'animate-fadeInLanguge'}`} />
        //     <span className={`text-lg leading-none absolute font-semibold ${ !isHovered ? 'animate-fadeOutLanguge' : 'animate-fadeInLanguge'}`}>{language}</span>
        // </button>

    );
};