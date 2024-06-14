import { Hero } from "@/components/Hero"
import { Header } from "@/components/Header"
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SocialSection } from "@/components/SocialSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {

  return (
    <div className=" bg-blue-light dark:bg-blue-dark duration-1000">
      <div className="sticky w-full top-0 z-10 backdrop-blur-md mx-auto max-w-3xl">
        <Header/>
      </div>
      <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
        <main className="flex flex-col gap-16 pt-5">
          <Hero/>
          <hr className="border-gray-300 dark:border-gray-700"/>
          <ExperienceSection/>
          <ProjectsSection/>
          <SocialSection/>
          <ContactSection/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}
