'use client'

import { setElement } from '@/context/Actions'
import { AppContext } from '@/context/Provider'
import { useContext, useEffect, useRef } from 'react'

export const Introduce = () => {

    const { state, dispatch } = useContext(AppContext)
    const { elementRef } = state

    const element = useRef<HTMLHeadingElement>(elementRef?.current ?? null)
    useEffect(() => {
        setElement(dispatch, element)
    }, [])

    return (
        <div className='flex flex-col items-left gap-2'>
            <h1 ref={element} className='text-2xl sm:text-4xl text-center sm:text-left font-AileronBold text-slate-900 dark:text-slate-100'>Miguel Angel</h1>
            <h1 className='text-2xl sm:text-4xl text-center sm:text-left font-AileronBold text-slate-900 dark:text-slate-100'>Pacheco Granillo</h1>
            <p className='text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl rounded-2xl font-AileronRegular tracking-[0.04rem]'>Im a passionate web development and design UI/UX.</p>
        </div>
    )
}
