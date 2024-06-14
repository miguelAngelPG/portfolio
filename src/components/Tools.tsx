import React from 'react'
import { Tooltip } from './Tooltip'
import { tools } from '@/types/constans.type'
import Image from 'next/image'
import { Tool } from '@/types'

const sizesTail = {
    small: 'h-5',
    normal: 'h-8',
    large: 'h-12',
};
const sizes = {
    small: 20,
    normal: 28,
    large: 32,
};
const spacing = {
    small: 'gap-2',
    normal: 'gap-4',
    large: 'gap-6',
};
export const Tools = ({ usedTools, size, direction = 'top' }: { usedTools: Tool[], size: 'small' | 'normal' | 'large', direction?: 'top' | 'bottom'}) => {

    const toolsFiltered = tools.filter(({tool}) => usedTools.includes(tool))

    return (
        <div className={`flex ${spacing[size]} items-center justify-start mb-1`}>
            {
                toolsFiltered.map(({tool, icon, invert}, index) => (
                    <div className={`relative group/tooltip`} key={tool}>
                        <Tooltip text={tool} direction={direction}/>
                        <Image src={icon} className={`${!!invert && 'dark:invert'} ${sizesTail[size]} w-auto`} alt={tool} width={sizes[size]} height={sizes[size]}/>
                    </div>
                ))
            }
        </div>
    )
}

