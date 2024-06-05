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