import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import avatar from '@/assets/imgs/avatar.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitch/>
      <div className="flex flex-col items-center justify-center mb-32">
        <Image
          className="rounded-full"
          src={avatar}
          alt="Miguel Pacheco"
          width={200}
          height={200}
          priority
          />
        </div>
        <h1 className="mt-8 text-4xl font-bold">Miguel Pacheco</h1>
        <p className="mt-2 text-2xl font-semibold">Software Engineer</p>
    </main>
  );
}
