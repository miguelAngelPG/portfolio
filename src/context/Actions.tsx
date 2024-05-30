import { Dispatch, RefObject } from 'react'
import { ActionType, IAction } from './Provider'

const changeLanguage = (dispatch: Dispatch<IAction>, language: string) =>
  dispatch({ type: ActionType.CHANGE_LANGUAGE, language})

const setElement = (dispatch: Dispatch<IAction>, elementRef: RefObject<HTMLHeadingElement> | null) =>
  dispatch({ type: ActionType.SET_ELEMENT, elementRef})

export { changeLanguage, setElement }
