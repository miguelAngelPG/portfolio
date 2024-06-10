'use client'

import React, { useContext, useRef, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage';
import { IExperience } from '@/types';
import { TitleSection } from './TitleSection';
import { AppContext } from '@/context/Provider';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export const ExperienceSection = () => {
    
    const { lang, isSpanish } = useLanguage();
    const { state: stateG, dispatch } = useContext(AppContext)
    const { elementRef } = stateG

    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        if (active === true) {
            elementRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'end', });
        }
        setActive((prev) => !prev);
    };

    const ref = useRef<HTMLDivElement>(null);
    
    return (

        <section className={`flex items-center justify-center flex-col`}>
            <TitleSection title={lang.experience.titleExperience} />
            <ol className={`relative border-s border-gray-400 dark:border-gray-700`}>
                <TimelineItem experience={lang.experience.experiences[0]} isSpanish={isSpanish}/>
                <div className='overflow-y-hidden transition-all duration-1000 w-full mb-5' style={{ height: active ? ref.current?.offsetHeight : 0, opacity: active ? 1 : 0 }}>
                    {
                        <div className='' ref={ref}>
                            {
                                Array.from(lang.experience.experiences).slice(1).map((experience) => (
                                    <TimelineItem experience={experience} key={experience.company} isSpanish={isSpanish}/>
                                ))
                            }
                        </div>
                    }
                </div>
            </ol> 
            <button className='z-10 focus:no-underline flex flex-row items-center gap-4' onClick={toggleAccordion}>
                {active ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />} {lang.experience.button} {active ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
        </section>

    );
};
    
const TimelineItem = ({ experience, isSpanish }: {experience: IExperience, isSpanish: boolean}) => {

    const formatDate = (date: Date): string => { 
        const newDate = date.toLocaleDateString( isSpanish ? 'es-MX' : 'en-US', { year: 'numeric', month: 'long' });  
        
        return newDate.charAt(0).toUpperCase() + newDate.slice(1);
    }

    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-gray-400 dark:border-gray-700 dark:bg-gray-700"></div>
            <div className='flex items-center justify-start gap-2'>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.jobPosition}</h3>  • 
                <a 
                    href={experience.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base font-normal text-blue-500 dark:text-blue-400 hover:underline"
                >
                    {experience.company}
                </a>
            </div>
            <time 
                className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" 
                dateTime={formatDate(experience.startDate)} // Pasar la fecha como prop
            >
                {formatDate(experience.startDate)}
            </time> - <time 
                className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" 
                dateTime={formatDate(experience.endDate)} // Pasar la fecha como prop
            >
                {formatDate(experience.endDate)}
            </time>
            <ul className="list-disc ms-6">
                {
                    experience.description.map((desc, index) => (
                        <li key={index} className="text-base font-normal text-gray-700 dark:text-gray-400">{desc}</li>
                    ))
                }
            </ul>
        </li>
    );
};
