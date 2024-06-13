import React from 'react'
import { Tooltip } from './Tooltip'
import { tools } from '@/types/constans.type'
import Image from 'next/image'
import { Tool } from '@/types'

const sizes = {
    small: 20,
    normal: 28,
    large: 32,
};
export const Tools = ({ usedTools, size, direction = 'top' }: { usedTools: Tool[], size: 'small' | 'normal' | 'large', direction?: 'top' | 'bottom'}) => {

    const toolsFiltered = tools.filter(({tool}) => usedTools.includes(tool))

    return (
        <div className="flex gap-4 items-center justify-start mb-1">
            {
                toolsFiltered.map(({tool, icon, invert}, index) => (
                    <div className={`relative group/tooltip`} key={tool}>
                        <Tooltip text={tool} direction={direction}/>
                        <Image src={icon} className={`${!!invert && 'dark:invert'}`} alt={tool} width={sizes[size]} height={sizes[size]}/>
                    </div>
                ))
            }
        </div>
    )
}

