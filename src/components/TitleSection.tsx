import Image from "next/image"

export const TitleSection = ({title, icon}: {title: string, icon?: string}) => {
    return (
        <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 w-full text-start flex gap-3 '>
            {title}
            {
                icon && <Image src={`/assets/imgs/icons/${icon}.svg`} className='dark:invert h-10 w-auto' alt={icon} width={5} height={5}/>
            }
        </h2>
    )
}
