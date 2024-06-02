'use client'

import { setElement } from '@/context/Actions'
import { AppContext } from '@/context/Provider'
import { useContext, useEffect, useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'

export const Introduce = () => {

    const { state: {elementRef}, dispatch } = useContext(AppContext)
    
    const [lang] = useLanguage()

    const element = useRef<HTMLHeadingElement>(elementRef?.current ?? null)
    
    useEffect(() => {
        setElement(dispatch, element)
    }, [dispatch])

    return (
        <div className='flex flex-col items-left gap-2'>
            <h1 ref={element} className='text-2xl sm:text-4xl text-center sm:text-left font-AileronBold text-slate-900 dark:text-slate-100'>Miguel Angel</h1>
            <h1 className='text-2xl sm:text-4xl text-center sm:text-left font-AileronBold text-slate-900 dark:text-slate-100'>Pacheco Granillo</h1>
            <p className='text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl rounded-2xl font-AileronRegular tracking-[0.04rem]'>{ lang.slogan }</p>
        </div>
    )
}
