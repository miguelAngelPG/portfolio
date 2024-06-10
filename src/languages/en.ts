import { projects } from '@/types/constans.type';
import { ILanguage } from "@/types";

export const en: ILanguage = {
    tooltipTheme: "Change theme",
    hero: {
        introduce: "Im a passionate web development and design UI/UX.",
        tooltipLanguages: "Change language",
        tooltipResume: "The resume'll be downloaded in the current lang. ",
    },
    experience: {
        titleExperience: "Experience",
        experiences: [
            {
                startDate: new Date('10-10-2022'),
                endDate: new Date('01-01-2024'),
                jobPosition: 'Software Analyst Programmer',
                company: 'Erycia',
                link: 'https://www.erycia.com/',
                description: [
                    `Databases: Managed and optimized SQL Server and Informix databases.`,
                    'Web Development: Created scalable applications with .NET, applying SOLID principles.',
                    'User Interfaces: Designed dynamic interfaces using JavaScript, jQuery, Bootstrap, CSS3, and HTML5.',
                    'Requirements Analysis: Defined functionalities and objectives with users and stakeholders.',
                    'Applications and Servers: Developed web and desktop applications, and servers with C#.',
                    'File Manipulation: Generated custom PDF and XLS files.',
                    'Testing and Debugging: Conducted testing and debugging to ensure quality.',
                    'System Integration: Established secure connections between databases and systems.',
                    'Technical Support: Provided technical support and maintenance for applications and networks.',
                ]
            },
            {
                startDate: new Date('01-01-2022'),
                endDate: new Date('09-09-2022'),
                jobPosition: 'Full-Stack Web Developer',
                company: 'Karem Dayan',
                link: 'https://www.karemdayan.com/',
                description: [
                    'Web Development: Created scalable, high-performance web applications with React JS and Next JS, using ECMAScript 6 and TypeScript.',
                    'User Interfaces: Designed attractive, dynamic interfaces with CSS3 and custom animations.',
                    'Reusable Components: Built functional, reusable components, enhancing efficiency and maintainability.',
                    'State Management: Used Redux for application state management, ensuring a smooth user experience.',
                    'Authentication: Implemented authentication and access control, ensuring application security.',
                    'Databases: Worked with Firebase and MongoDB, optimizing performance for various data models.',
                    'Prototyping: Collaborated on designing prototypes, wireframes, and mockups to define application architecture.',
                    'Responsive Design: Implemented responsive designs and used Material UI for adaptable interfaces.',
                    'Robust APIs: Developed APIs with Node.js and JSON Web Tokens for secure authentication and authorization.',
                    'Version Control: Utilized Git and GitHub for source code management and collaboration.',
                    'Email Functionality: Implemented email sending with customized event invitations to Google Calendar.',
                    'Content Management: Developed a system for secure and efficient video and image management.',
                ]
            },
            {
                startDate: new Date('06-06-2019'),
                endDate: new Date('09-09-2021'),
                jobPosition: 'JR Web Developer',
                company: 'Vlim',
                link: 'https://www.vlim.com.mx/',
                description: [
                    'Agile Methodologies: Participated in web development projects using Agile (SCRUM), achieving efficient deliveries and meeting deadlines.',
                    'HTML5 Structuring: Structured and designed pages with HTML5.',
                    'User Interfaces: Designed and developed intuitive, responsive interfaces with HTML5, CSS3, JavaScript, jQuery, and Bootstrap.',
                    'Client-Server Logic: Implemented client-side and server-side logic for dynamic, functional web applications.',
                    'API Integration: Consumed and managed data from web services and APIs, ensuring seamless frontend integration.',
                    'Database Management: Designed and managed relational databases (MySQL), optimizing performance and ensuring data integrity.',
                    'Clean Code: Developed clean, scalable, maintainable code following industry best practices.',
                    'Advanced Features: Implemented advanced features like dynamic email sending, PDF, TXT, XLSX generation, and table pagination.',
                    'React JS Development: Contributed to web applications using React JS, enhancing user experience.',
                    'Version Control: Utilized Git and GitHub for source code management and collaboration.',
                ],
            },
        ],
        button: "Show more"
    },

}