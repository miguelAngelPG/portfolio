'use client'

import { FiLoader } from 'react-icons/fi'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Tooltip } from './Tooltip'
import { useLanguage } from '@/hooks/useLanguage'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const { lang } = useLanguage()
  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <FiLoader />
  )

  return (
    <div className='relative group/tooltip'>
      { resolvedTheme === 'dark' ? <IoSunny className='w-6 h-6 cursor-pointer' onClick={() => setTheme('light')} /> : <IoMoon className='w-5 h-5 cursor-pointer' onClick={() => setTheme('dark')}/> }
      <Tooltip text={ lang.tooltipTheme }/>
    </div>
  )

}