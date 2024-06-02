export interface ILanguage {
    slogan: string;
    experiences: IExperience[];
}

export interface IExperience {
    startDate: number;
    endDate: number;
    jobPosition: string;
    company: string;
    description: string[];
}