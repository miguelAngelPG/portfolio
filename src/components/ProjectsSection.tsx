import React from 'react'
import { TitleSection } from './TitleSection'
import Link from 'next/link'
import { Tools } from './Tools'
import { MdLink } from 'react-icons/md'
import { projects } from '@/types/constans.type'
import Image from 'next/image'
import { RiExternalLinkLine } from 'react-icons/ri'

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
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5'>
                    <a 
                        href="https://minecraft-skin-downloader.vercel.app/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1"
                    >
                        <article className="relative flex flex-col justify-between w-full py-6 px-7">
                            <h2 className="text-gray-700 dark:text-gray-200 text-lg font-bold">MC skin downloader</h2>
                            <p className="text-slate-400 dark:text-slate-200">Minecraft players searcher.</p>
                            <div className="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
                                <RiExternalLinkLine className='text-gray-400 dark:text-gray-50 text-2xl' />
                            </div>
                        </article>
                    </a>
                </div>
            </div>
        </section>
    )
}
