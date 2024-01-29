'use client'

import avatar from '@/assets/imgs/avatar.png'
import avatarLetter from '@/assets/imgs/M.png'
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/Provider";
import { AvatarImage } from "./AvatarImage";

export default function Avatar() {
    const [state, setState] = useState({
        toAction: false,
        animacionFade: 'animate-fadeIn',
        animacionSlide: ''
    })

    const { toAction, animacionFade, animacionSlide } = state
    const elementRef: any = useContext(Context);

    useEffect(() => {
        const cambiarImagenConScroll = () => {
            const rect = elementRef?.current?.getBoundingClientRect();
            console.log(rect?.top)
            if (rect?.top <= 0 && toAction === false) {
                setState({
                    toAction: true,
                    animacionFade: 'animate-fadeOut',
                    animacionSlide: 'animate-slideInTop'
                })
            }else if(rect?.top >= 0 && toAction === true){
                setState({
                    toAction: false,
                    animacionFade: 'animate-fadeIn',
                    animacionSlide: 'animate-slideOutBottom'
                })
            }
          }

          window.addEventListener('scroll', cambiarImagenConScroll);
    
        return () => {
          window.removeEventListener('scroll', cambiarImagenConScroll)
        }
      }, [elementRef, toAction])

    return (
        <div className="flex w-12 h-12 relative items-center bg-indigo-100  dark:bg-gray-700/60 rounded-full shadow-md border-4 border-white dark:border-gray-900/80" style={{opacity: 1, transform: 'none'}}>
            <span className="bg-blue-light dark:bg-blue-dark " style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: 0, position: 'absolute', inset: 0}}>
                <AvatarImage avatarImg={avatar} toAction={false} animation={animacionSlide}/>
                <AvatarImage avatarImg={avatarLetter} toAction={toAction} animation={animacionFade}/>
            </span>
            <p className="ml-14 font-semibold text-lg whitespace-nowrap text-slate-600 dark:text-slate-300">MIGUEL PG</p>
        </div>
    );
}