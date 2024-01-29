import Image, { StaticImageData } from 'next/image'
import React from 'react'

export const AvatarImage = ({avatarImg, toAction, animation}: { avatarImg: StaticImageData, toAction: boolean, animation: string}) => {
    console.log(avatarImg.src)
    return (
        <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`rounded-full opacity-${!toAction ? 0 : 1} ${ animation } ${avatarImg.src.includes('M') ? 'dark:invert' : ''}`}
            src={ avatarImg }
            alt="Miguel Pacheco"
            fill
            object-fit="contain"
            priority
        />
    )
}
