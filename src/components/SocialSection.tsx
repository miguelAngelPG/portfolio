import { TitleSection } from './TitleSection'
import { socialMedia } from '@/types/constans.type';

const socialMediaColor: { [key: string]: string } = {
    linkedin: 'text-linkedin',
    github: 'text-black/80 dark:text-white/80',    
    whatsapp: 'text-whatsapp',
    telegram: 'text-telegram',
}

export const SocialSection = () => {
    return (
        <section>
            <TitleSection title='Contact' icon={'people-arrows'}/>

            <div className='flex flex-wrap gap-3'>
                {
                    socialMedia.map(({name, link, Icon, color}, index) => (
                        <a key={index} href={link} target="_blank" rel="noreferrer" className={`${socialMediaColor[color]} flex items-center gap-3 font-bold px-4 h-16 shadow-social-link dark:shadow-social-link-dark hover:shadow-social-link-hover dark:hover:shadow-social-link-hover-dark rounded-xl transition-shadow border-gray-400 dark:border-gray-700`}>
                            <Icon className="i-fa-brand:linkedin text-2xl"/>
                            {name}
                        </a>
                    ))
                }
            </div>
        </section>
    )
}
