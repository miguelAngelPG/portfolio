'use client'

import React from 'react'
import { useLanguage } from '../../hooks/useLanguage';
import { IExperience } from '@/types';

export const Experience = () => {
    
    const [ lang ] = useLanguage();

    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {
                lang.experiences.map((experience) => (
                    <TimelineItem experience={experience} key={experience.company} />
                ))
            }
        </ol> 
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