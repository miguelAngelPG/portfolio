import { Hero } from "@/components/Hero"
import { Header } from "@/components/Header"

export default function Home() {

  return (
    <div className=" bg-blue-light dark:bg-blue-dark duration-1000">
      <div className="sticky w-full top-0 z-10 backdrop-blur-md">
        <Header/>
      </div>
      <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
        <main className="flex flex-col gap-16">
          <Hero/>
          <hr className="border-gray-300 dark:border-gray-700"/>
          <section className="h-96"></section>
          <section className="h-96"></section>
          <section className="h-96"></section>
        </main>
      </div>
      {/* <main className="flex min-h-screen flex-col items-center justify-between bg-blue-light transition-colors duration-1000 dark:bg-blue-dark">
          <section ref={elementRef} className="flex w-40 h-40 relative">
            <AvatarImage avatarImg={avatar} toAction={true} animation={''}/>
            <h1 className="mt-8 text-4xl font-AileronBold">Miguel Pacheco</h1>
            <p className="mt-2 text-2xl font-AileronRegular">Software Engineer</p>
          </section>
          <section ref={elementRef} id="hola" className="flex flex-col items-center h-96 justify-center mb-96 pb-96"></section>
      </main> */}
    </div>
  );
}
