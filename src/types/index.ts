export interface ILanguage {
    slogan: string;
    experiences: IExperience[];
}

export interface IExperience {
    startDate: Date;
    endDate: Date;
    jobPosition: string;
    company: string;
    link: string;
    description: string[];
}