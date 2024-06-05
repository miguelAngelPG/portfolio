'use client'

import { useState } from 'react';
import { IconType } from 'react-icons';

export const ButtonHover = ({text, handleClick, Icon, className, isVisibleIcon = false}: { text: string, handleClick: Function, Icon: IconType, className: string, isVisibleIcon?: boolean}) => {

    const [isHovered, setIsHovered] = useState(isVisibleIcon)

    return (
        <button
            className={`flex items-center min-h-10 justify-center text-sm gap-3 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-slate-900 dark:text-indigo-100 py-2 px-4 font-AileronBold rounded-lg duration-100 ${className}`}
            onMouseEnter={() => setIsHovered(!isVisibleIcon)}
            onMouseLeave={() => setIsHovered(isVisibleIcon)}
            onClick={() => handleClick()}
        >
            <Icon className={`leading-none text-xl absolute ${ isHovered ? 'animate-fadeOutLanguge' : 'animate-fadeInLanguge'}`} />
            <span className={`text-lg leading-none font-semibold ${ !isHovered ? 'animate-fadeOutLanguge' : 'animate-fadeInLanguge'}`}>{text}</span>
        </button>
    );
};