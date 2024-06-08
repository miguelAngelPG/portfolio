import React from 'react'
import { Tooltip } from './Tooltip'
import { tools } from '@/types/constans.type'
import Image from 'next/image'
import { Tool } from '@/types'

export const Tools = ({ usedTools }: { usedTools: Tool[]}) => {

    const toolsFiltered = tools.filter(({tool}) => usedTools.includes(tool))

    return (
        <div className="flex gap-4 items-center justify-start mb-1">
            {
                toolsFiltered.map(({tool, icon, invert}, index) => (
                    <div className={`relative group/tooltip`} key={tool}>
                        <Tooltip text={tool} direction='top'/>
                        <Image src={icon} className={`${!!invert && 'dark:invert'}`} alt={tool} width={30} height={30}/>
                    </div>
                ))
            }
        </div>
    )
}

