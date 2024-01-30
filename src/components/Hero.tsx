'use client'

import { Context } from "@/context/Provider"
import { AvatarImage } from "./AvatarImage"
import avatar from '@/assets/imgs/avatar.png'
import { useContext } from "react"
import { AvatarContainer } from "./AvatarContainer"

export const Hero = () => {

    const elementRef = useContext(Context)

    return (
        <section className="flex flex-col sm:flex-row items-center gap-5">
            <AvatarContainer>
                <AvatarImage avatarImg={avatar} toAction={true} animation={''}/>
            </AvatarContainer>
            <div className="flex flex-col items-center sm:items-start gap-3">
                <div className="flex flex-col items-left gap-2">
                    <h1 ref={elementRef} className="text-2xl sm:text-4xl text-center sm:text-left font-AileronBold text-slate-600 dark:text-slate-100">Miguel Angel</h1>
                    <h1 className="text-2xl sm:text-4xl text-center sm:text-left font-AileronBold text-slate-600 dark:text-slate-100">Pacheco Granillo</h1>
                    <p className="text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl rounded-2xl">Im a passionate web development and design UI/UX.</p>
                </div>
            <div className="flex gap-3">
                <div className="relative group/tooltip">
                    <div className="p-2.5 rounded-xl grid place-items-center bg-emerald-200 dark:bg-emerald-500">
                        <div className="i-fa-pro:bullseye-arrow text-emerald-700 dark:text-white"></div>
                    </div>
                    <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Looking for job</span>
                </div>
                <button className="flex items-center text-sm gap-3 bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2 px-4 rounded-lg font-semibold">
                    <div className="i-fa-pro:file-user text-xl sm:text-lg z-auto"></div>Resume
                </button>
                </div>
            </div>
        </section>
    )
}
