import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
import { IMiniProject, IProject, ISocialMedia, ITools } from ".";
import { PiTelegramLogo } from "react-icons/pi";

export const tools: ITools[] = [
    {
        tool: 'React JS',
        icon: '/assets/imgs/icons/react-js-icon.svg',
    },
    {
        tool: 'Next.js',
        icon: '/assets/imgs/icons/nextjs-icon.svg',
        invert: true,
    },
    {
        tool: 'GSAP',
        icon: '/assets/imgs/icons/gsap-greensock.svg',
    },
    {
        tool: 'TailwindCSS',
        icon: '/assets/imgs/icons/tailwind-css-icon.svg',
    },
    {
        tool: 'TypeScript',
        icon: '/assets/imgs/icons/typescript-programming-language-icon.svg',
    },
    {
        tool: 'Node.js',
        icon: '/assets/imgs/icons/node-js-icon.svg',
    },
    {
        tool: 'Git',
        icon: '/assets/imgs/icons/git-icon.svg',
    },
    {
        tool: 'GitHub',
        icon: '/assets/imgs/icons/github-icon.svg',
        invert: true,
    },
    {
        tool: 'HTML5',
        icon: '/assets/imgs/icons/html-icon.svg',
    },
    {
        tool: 'CSS3',
        icon: '/assets/imgs/icons/css-icon.svg',
    },
    {
        tool: 'JavaScript',
        icon: '/assets/imgs/icons/javascript-programming-language-icon.svg',
    },
    {
        tool: 'Bootstrap',
        icon: '/assets/imgs/icons/bootstrap-5-logo-icon.svg',
    },
    {
        tool: 'Firebase',
        icon: '/assets/imgs/icons/firebase.svg',
    },
    {
        tool: 'Redux',
        icon: '/assets/imgs/icons/redux-icon.svg',
    },
    {
        tool: 'Blender',
        icon: '/assets/imgs/icons/blender.svg',
    },
    {
        tool: 'Three JS',
        icon: '/assets/imgs/icons/threejs.svg',
        invert: true,
    },
    {
        tool: 'NextAuth',
        icon: '/assets/imgs/icons/next-auth.svg',
    },
    {
        tool: 'Nodemailer',
        icon: '/assets/imgs/icons/node-mailer.webp',
    },
    {
        tool: 'LottieFiles',
        icon: '/assets/imgs/icons/lottiefiles.png',
    },
    {
        tool: 'Swiper',
        icon: '/assets/imgs/icons/swiper.svg',
    },
    {
        tool: 'MongoDB',
        icon: '/assets/imgs/icons/mongodb-icon.svg',
    },
    {
        tool: 'Express',
        icon: '/assets/imgs/icons/expressjs-icon.svg',
    },
    {
        tool: 'Recoil',
        icon: '/assets/imgs/icons/recoil.png',
        invert: true,
    },
]

export const projects: IProject[] = [
    {
        title: 'Dismyd',
        description: 'Web site.',
        link: 'https://dismyd.com/',
        image: '/assets/imgs/projects/dismyd.png',
        tools: ['React JS', 'Next.js', 'CSS3', 'GSAP', 'JavaScript', 'Nodemailer', 'LottieFiles', 'Swiper'],
    },
    {
        title: 'Zoom Clone',
        description: 'This is a clone of the Zoom website.',
        link: 'https://zoom-clone-two-peach.vercel.app/sign-in?redirect_url=https%3A%2F%2Fzoom-clone-two-peach.vercel.app%2F',
        image: '/assets/imgs/projects/zoom-clone.png',
        tools: ['React JS', 'Next.js', 'TailwindCSS', 'TypeScript'],
        code: 'https://github.com/miguelAngelPG/zoom-clone'
    },
    {
        title: 'Figma Clone',
        description: 'This is a clone of the Figma website.',
        link: 'https://clone-pro-figma.vercel.app',
        image: '/assets/imgs/projects/figma-clone.png',
        tools: ['React JS', 'Next.js', 'TailwindCSS', 'TypeScript'],
        code: 'https://github.com/miguelAngelPG/figma-clone'
    },

]

export const miniProjects: IMiniProject[] = [
    {
        title: 'Gasificación',
        description: '',
        link: '',
        tools: ['Firebase', 'React JS', 'Redux', 'Blender', 'Three JS', 'TypeScript']        
    },
    {
        title: 'Spotify',
        description: '',
        link: '',
        tools: ['Recoil', 'React JS', 'Next.js', 'TailwindCSS', 'TypeScript']        
    },
    {
        title: 'Figma Clone',
        description: '',
        link: 'https://clone-pro-figma.vercel.app',
        tools: ['React JS', 'Next.js', 'TailwindCSS', 'TypeScript'],      
    },
    {
        title: 'Video Conference App',
        description: '',
        link: 'https://zoom-clone-two-peach.vercel.app/sign-in?redirect_url=https%3A%2F%2Fzoom-clone-two-peach.vercel.app%2F',
        tools: ['React JS', 'Next.js', 'TailwindCSS', 'TypeScript'],        
    },
]

export const socialMedia: ISocialMedia[] = [
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/miguel-angel-pacheco-2641a51a9/',
        Icon: IoLogoLinkedin,
        color: 'linkedin',
    },
    {
        name: 'Github',
        link: 'https://github.com/miguelAngelPG',
        Icon: IoLogoGithub,
        color: 'github'
    },
    {
        name: 'Whatsapp',
        link: 'https://wa.me/+527713824016',
        Icon: IoLogoWhatsapp,
        color: 'whatsapp'
    },
    {
        name: 'Telegram',
        link: '',
        Icon: PiTelegramLogo,
        color: 'telegram'
    },
]