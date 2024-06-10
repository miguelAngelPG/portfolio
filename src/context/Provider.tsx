// //haz un componente de conxtext con su provider
'use client'

import { ThemeProvider } from "next-themes"
import { FunctionComponent, ReactNode, RefObject, createContext, useReducer } from "react"


// import { ThemeProvider } from 'next-themes'
// import { LegacyRef, RefObject, createContext, createRef, use, useRef, useState } from 'react'

// export interface IState {
//     elementRef: RefObject<HTMLHeadingElement> | null,
//     language: string,
//     // setLanguage: (language: string) => void
// }

// interface IContext {
//     state: IState,
//     updateLanguage: (newLanguage: string) => void
// }

// // export const Context = createContext<IState>(null)
// export const Context = createContext(null as IContext | null)

// function stateReducer(state: IState, action: { type: string }) {

//     switch (action.type) {
  
//       case 'increment': {
//         return {count: state.count + 1}
//       }
//       case 'decrement': {
//         return {count: state.count - 1}
//       }
//       default: {
//         throw new Error(`Unhandled action type: ${action.type}`)
//       }
//     }  
// }

// export const Provider = ({ children }: { children: React.ReactNode }) => {

//     const [state, setState] = useState({
//         elementRef: null,
//         language: 'ES'
//     })
    

//     const updateLanguage = (newLanguage: string) => {
//         setState((currenLanguage) => ({
//             ...currenLanguage,
//             language: newLanguage
//         }));
//     };

//     // const conte: IContext = {
//     //     state: {
//     //         elementRef: null,
//     //         language: 'ES'
//     //     }
//     //     updateLanguage: updateLanguage
//     // }

//     return (
//         <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
//             <Context.Provider value={{...state, updateLanguage, state} as IContext}> 
//                 {children}
//             </Context.Provider>    
//         </ThemeProvider>
//     )
// }

export interface IAppState {
    elementRef: RefObject<HTMLHeadingElement> | null,
    language: string,
    // setLanguage: (language: string) => void
}

interface IAppContext {
    state: IAppState,
    dispatch: React.Dispatch<IAction>
}

export const initialState: IAppState = {
    elementRef: null,
    language: 'ES'
}

const AppContext = createContext<IAppContext>({
  state: {
    elementRef: null,
    language: 'ES'
  },
  dispatch: () => {}
})

export enum ActionType {
    CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
    SET_ELEMENT = 'SET_ELEMENT'
}

export type IAction = {
    type: ActionType
    language?: string
    elementRef?: RefObject<HTMLHeadingElement> | null
}

/**
 * Reducer function should simply digest the action payload and return a new state object
 */
const stateReducer = (
  state: IAppState,
  action: IAction
): typeof initialState => {
//   console.log(`vehicleReducer called: ${action.type}`)

//   const selectedVehicle = action.vehicle

    switch (action.type) {
        case 'CHANGE_LANGUAGE': {
            return {
                ...state,
                language: action.language || ''
            }
        }
        case 'SET_ELEMENT': {
            return {
                ...state,
                elementRef: action.elementRef || null
            }
        }
        default:
            throw new Error()
    }
}

const AppContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(
        stateReducer,
        initialState as IAppState
    )
    const value = { state, dispatch }
    
    return (
        <AppContext.Provider value={value}>
            <ThemeProvider attribute="class" defaultTheme='dark' enableSystem>
                {children}
            </ThemeProvider>
        </AppContext.Provider>)
}

export { AppContext, AppContextProvider }
