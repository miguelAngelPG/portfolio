'use client'

import { FiLoader } from 'react-icons/fi'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <FiLoader />
  )

  if (resolvedTheme === 'dark') {
    return <IoSunny className='w-6 h-6' onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <IoMoon className='w-5 h-5' onClick={() => setTheme('dark')} />
  }

}