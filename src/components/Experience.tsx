'use client'

import React, { useRef, useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage';
import { IExperience } from '@/types';

export const Experience = () => {
    
    const [ lang ] = useLanguage();

    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive((prev) => !prev);
    };

    const ref = useRef<HTMLDivElement>(null);
    
    return (
        <>
            <section className={`flex items-center justify-center`}>
                <ol className={`relative border-s border-gray-200 dark:border-gray-700`}>
                    <TimelineItem experience={lang.experiences[0]}/>
                    <div className='transition-all duration-1000 w-full' style={{ height: active ? ref.current?.offsetHeight : 0 }}>
                        {
                            <div className='' ref={ref}>
                                {
                                    lang.experiences.map((experience) => (
                                        <TimelineItem experience={experience} key={experience.company} />
                                    ))
                                }
                            </div>
                        }
                    </div>
                </ol> 
            </section>
                <button className='z-10' onClick={toggleAccordion}>
                    Ver más
                </button>
        </>
    );
};
    
const TimelineItem = ({ experience }: {experience: IExperience}) => {
    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.jobPosition}</h3>
            <time 
                className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" 
                dateTime={experience.endDate.toString()} // Pasar la fecha como prop
            >
                {new Date(experience.endDate).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
        </li>
    );
};