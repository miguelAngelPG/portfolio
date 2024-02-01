import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';

export const LanguageSwitch = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [language, setLanguage] = useState('EN')

    const handleLanguageChange = () => {
        setLanguage(prevLanguage => prevLanguage === 'EN' ? 'ES' : 'EN');
    };

    return (
        <button
            className='flex items-center min-h-10 justify-center text-sm gap-3 bg-emerald-200 dark:bg-emerald-500 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2 px-4 font-semibold rounded'
            // className={`flex items-center justify-center py-2 px-4 rounded transition-colors ${
            //     isHovered ? 'bg-emerald-200' : 'bg-emerald-200'
            // }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleLanguageChange()}
            // style={{ width: '100px', height: '100px' }}
        >
            <FiGlobe className={`leading-none text-xl ${ isHovered ? 'animate-fadeOutLanguge' : 'animate-fadeInLanguge'}`} />
            <span className={`text-lg leading-none absolute ${ !isHovered ? 'animate-fadeOutLanguge' : 'animate-fadeInLanguge'}`}>{language}</span>
        </button>

    );
};