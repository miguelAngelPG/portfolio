'use client'

import ThemeSwitch from './ThemeSwitch'
import avatar from '@/assets/imgs/avatar.png'
import avatarLetter from '@/assets/imgs/M3.png'
import { RefObject, useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/Provider'
import { AvatarImage } from './AvatarImage'

export const Header = () => {
    const [state, setState] = useState({
        toAction: false,
        animacionFade: 'animate-fadeIn',
        animacionSlide: ''
    })

    const { toAction, animacionFade, animacionSlide } = state
    // const { elementRef } : IState = useContext(Context)
    const { state: stateG, dispatch } = useContext(AppContext)

    const { elementRef } = stateG

    useEffect(() => {
        const cambiarImagenConScroll = () => {

            const rect = elementRef?.current?.getBoundingClientRect()
            
            if (rect && rect.top <= 0 && toAction === false) {
                setState({
                    toAction: true,
                    animacionFade: 'animate-fadeOut',
                    animacionSlide: 'animate-fadeIn'
                })
            }else if(rect && rect?.top >= 0 && toAction === true){
                setState({
                    toAction: false,
                    animacionFade: 'animate-fadeIn',
                    animacionSlide: 'animate-fadeOut'
                })
            }
          }

          window.addEventListener('scroll', cambiarImagenConScroll)
    
        return () => {
          window.removeEventListener('scroll', cambiarImagenConScroll)
        }
      }, [elementRef, toAction])

    return (
        <header className='flex flex-row items-center px-5 py-2 justify-between w-full max-w-4xl'>
            <div className='flex w-12 h-12 relative items-center bg-blue-gray-light dark:bg-blue-gray-dark rounded-full shadow-md border-4 border-white dark:border-gray-900/80 duration-1000' style={{opacity: 1, transform: 'none'}}>
                <span className='bg-blue-light dark:bg-blue-dark' style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: 0, position: 'absolute', inset: 0}}>
                    <AvatarImage avatarImg={avatar} toAction={false} animation={animacionSlide}/>
                    <AvatarImage avatarImg={avatarLetter} toAction={toAction} animation={animacionFade}/>
                </span>
                <p className={`ml-14 font-semibold text-lg opacity-0 whitespace-nowrap text-slate-600 dark:text-slate-300 ${animacionSlide}`}>MIGUEL PG</p>
            </div>
            <ThemeSwitch/>
        </header>
    )
}

