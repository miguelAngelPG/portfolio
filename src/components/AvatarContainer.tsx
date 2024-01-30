
import { ReactNode } from 'react';

export const AvatarContainer = ({ children }: { children: ReactNode }) => {

    return (
        <div className="relative w-44 h-44 bg-blue-gray-light dark:bg-blue-gray-dark border-8 duration-1000 border-white dark:border-gray-900/80 shadow-lg rounded-full overflow-hidden">
            <span className='' style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                {children}
            </span>
        </div>
    )
}
