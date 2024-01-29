//haz un componente de conxtext con su provider
'use client'


import { ThemeProvider } from 'next-themes'
import { LegacyRef, RefObject, createContext, createRef, use, useRef } from 'react'

export const Context = createContext<LegacyRef<HTMLElement> | null>(null)
  
export const Provider = ({ children }: { children: React.ReactNode }) => {
    const elementRef = useRef<HTMLDivElement | null>(null)
    return (
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
            <Context.Provider value={elementRef}>
                {children}
            </Context.Provider>    
        </ThemeProvider>
    )
}
