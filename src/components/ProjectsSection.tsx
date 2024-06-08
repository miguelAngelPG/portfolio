import React from 'react'
import { TitleSection } from './TitleSection'
import Link from 'next/link'
import { Tools } from './Tools'
import { MdLink } from 'react-icons/md'
import { projects } from '@/types/constans.type'
import Image from 'next/image'

export const ProjectsSection = () => {
    return (
        <section>
            <TitleSection title='Projects' />
            <div className='flex flex-col gap-10'>
                <div className='grid gap-10'>
                    {
                        projects.map(({title, description, link, image, tools, code}, index) => (
                            <article className='grid gap-4 sm:gap-7 md:grid-cols-2 group' key={index}>
                                <a href={link} target="_blank" rel="noreferrer">
                                    <div className='relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700/50'>
                                        <Image src={image} alt={title} layout='responsive' width={16} height={9} />
                                    </div>
                                </a>
                                <div className='flex flex-col gap-2.5 justify-center'>
                                    <h3 className="font-bold text-3xl text-slate-800 dark:text-white">{ title }</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-lg">{ description }</p>
                                    <Tools usedTools={ tools }/>
                                    <div className="flex justify-start gap-3">
                                        {
                                            code && (
                                                <a href={code} target="_blank" rel="noreferrer" className="flex gap-3 group/live hover:gap-6 transition-[gap] items-center justify-between text-lg py-2 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg">
                                                    Code
                                                </a> )
                                        }
                                        <a href={link} target="_blank" rel="noreferrer" className="flex gap-3 group/live hover:gap-6 transition-[gap] items-center justify-between text-lg py-2 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg">
                                            Live <MdLink className='text-2xl group-hover/live:rotate-45 transition-transform' />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
