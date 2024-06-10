import { title } from "process";
import { IProject, ITools } from ".";

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
    }
]

export const projects: IProject[] = [
    {
        title: 'Dismyd',
        description: 'Web site.',
        link: 'https://dismyd.com/',
        image: '/assets/imgs/projects/dismyd.png',
        tools: ['React JS', 'Next.js', 'CSS3', 'GSAP', 'JavaScript'],
    },
    {
        title: 'Figma Clone',
        description: 'This is a clone of the Figma website.',
        link: 'https://clone-pro-figma.vercel.app',
        image: '/assets/imgs/projects/figma-clone.png',
        tools: ['React JS', 'TailwindCSS', 'TypeScript'],
        code: 'https://github.com/miguelAngelPG/figma-clone'
    },
    {
        title: 'Zoom Clone',
        description: 'This is a clone of the Zoom website.',
        link: 'https://zoom-clone-two-peach.vercel.app/sign-in?redirect_url=https%3A%2F%2Fzoom-clone-two-peach.vercel.app%2F',
        image: '/assets/imgs/projects/zoom-clone.png',
        tools: ['Next.js', 'TailwindCSS', 'TypeScript'],
        code: 'https://github.com/miguelAngelPG/zoom-clone'
    },

]