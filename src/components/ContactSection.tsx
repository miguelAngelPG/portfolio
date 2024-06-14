'use client'

import React from 'react'
import { TitleSection } from './TitleSection'
import { Tooltip } from './Tooltip'
import Image from 'next/image'

export const ContactSection = () => {
    return (
        <section>
            <TitleSection title='Email' icon={'email'}/>
            <div className="flex gap-2">
                <input type="text" disabled={true} className="bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300" value="miguel.pachecog925@gmail.com"/>
                <div className="flex gap-2">
                    <div className='relative group/tooltip'>
                        <a href='mailto:miguel.pachecog925@gmail.com' target='_blank' rel='noreferrer' className='flex bg-sky-200 dark:bg-sky-500 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg'>
                            <Image src='assets/imgs/icons/plane.svg' className='dark:invert'  width={30} height={30} alt='email'/>
                        </a>
                        <Tooltip text={'Send me email'  } direction='top'/>
                    </div>
                    <div className='relative group/tooltip'>
                        <button onClick={() => navigator.clipboard.writeText('miguel.pachecog925@gmail.com')} className='flex bg-sky-200 dark:bg-sky-500 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg'>
                            <Image src='assets/imgs/icons/copy.svg' className='dark:invert' width={30} height={30} alt='email'/>
                        </button>
                        <Tooltip text={'Copy email'  } direction='top'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
