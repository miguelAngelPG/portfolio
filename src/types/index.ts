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

export type Tool = 'React JS' | 'Next.js' | 'TailwindCSS' | 'TypeScript' | 'Node.js' | 'Git' | 'GitHub' | 'HTML5' | 'CSS3' | 'JavaScript' | 'Bootstrap';

export interface IProject {
    title: string;
    description: string;
    link: string;
    image: string;
    tools: Tool[];
}