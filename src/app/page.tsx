'use client'

import ThemeSwitch from "@/components/ThemeSwitch"
import Avatar from "@/components/Avatar"
import { Context } from "@/context/Provider"
import { useContext } from 'react'
import { AvatarImage } from "@/components/AvatarImage"
import avatar from '@/assets/imgs/avatar.png'
import { Hero } from "@/components/Hero"

export default function Home() {
  const elementRef = useContext(Context);
  return (
    <>
      <div className="sticky w-full top-0">
        <header className="flex flex-row items-center px-5 py-2 justify-between w-full max-w-4xl">
          <Avatar/>
          <ThemeSwitch/>
        </header>
      </div>
      <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
        <main className="flex flex-col gap-16">
          <Hero/>
        </main>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between bg-blue-light transition-colors duration-1000 dark:bg-blue-dark">
          <div className="flex w-40 h-40 relative">
            <AvatarImage avatarImg={avatar} toAction={true} animation={''}/>
            <h1 className="mt-8 text-4xl font-AileronBold">Miguel Pacheco</h1>
            <p className="mt-2 text-2xl font-AileronRegular">Software Engineer</p>
          </div>
          <section ref={elementRef} id="hola" className="flex flex-col items-center h-96 justify-center mt-8"></section>
      </main>
    </>
  );
}
