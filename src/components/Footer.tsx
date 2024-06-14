import avatarLetter from '@/assets/imgs/M3.png'
import Image from 'next/image'

export const Footer = () => {
    return (
        <footer className='flex items-center justify-center mb-14 mt-3 w-full relative'>
            <hr className="border-gray-300 dark:border-gray-700 w-8/12"/>
            <Image src={avatarLetter} width={50} height={50} alt='M' className='dark:invert absolute'/>
        </footer>
    )
}
