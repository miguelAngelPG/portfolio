import { AvatarImage } from './AvatarImage'
import { LanguageSwitch } from './LanguageSwitch'
import { AvatarContainer } from './AvatarContainer'
import { DownloadResume } from './DownloadResume'
import { Introduce } from './Introduce'

import avatar from '@/assets/imgs/avatar.png'

export const Hero = () => {

    return (
        <section className='flex flex-col sm:flex-row items-center gap-5'>
            <AvatarContainer>
                <AvatarImage avatarImg={avatar} toAction={true} animation={''}/>
            </AvatarContainer>
            <div className='flex flex-col items-center sm:items-start gap-3'>
                <Introduce/>
                <div className='flex gap-3'>
                    <div className='relative group/tooltip'>
                        <LanguageSwitch/>
                    </div>
                    <div className='relative group/tooltip'>
                        <DownloadResume/>
                    </div>
                </div>
            </div>
        </section>
    )
}

