import { projects } from '@/types/constans.type';
import { IconType } from "react-icons";

export interface ILanguage {
    tooltipTheme: string;
    hero: {
        introduce: string;
        tooltipLanguages: string;
        tooltipResume: string;
    }
    experience: {
        titleExperience: string;
        experiences: IExperience[];
        button: string;
    }
    projects : IProject[];
    miniProjects: IMiniProject[];
    email: {
        send: string;
        copy: string;
    }
}

export interface IExperience {
    startDate: Date;
    endDate: Date;
    jobPosition: string;
    company: string;
    link: string;
    description: string[];
}

export interface ITools {
    tool: Tool;
    icon: string;
    invert?: boolean;
}

export type Tool = 
    'React JS' | 
    'Next.js' | 
    'TailwindCSS' | 
    'TypeScript' | 
    'Node.js' | 
    'Git' | 
    'GitHub' | 
    'HTML5' | 
    'CSS3' | 
    'JavaScript' | 
    'Bootstrap' | 
    'GSAP' | 
    'Firebase' | 
    'Redux' | 
    'Blender' | 
    'Three JS' | 
    'NextAuth' | 
    'Nodemailer' | 
    'LottieFiles' | 
    'Swiper' |
    'MongoDB' |
    'Express' |
    'Recoil'
    ;
export type socialMedia = 'Linkedin' | 'Github' | 'Whatsapp' | 'Telegram'; 

export interface ISocialMedia {
    name: socialMedia;
    link: string;
    Icon: IconType;
    color: string;
}

export interface IProject {
    title: string;
    description: string;
    link: string;
    image: string;
    code?: string;
    tools: Tool[];
}

export interface IMiniProject {
    title: string;
    description: string;
    link: string;
    tools: Tool[];
}