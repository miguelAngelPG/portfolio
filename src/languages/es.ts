import { ILanguage } from "@/types";

export const es: ILanguage = {
    tooltipTheme: "Cambiar tema",
    hero: {
        introduce: "Soy un apasionado del desarrollo web y diseño UI/UX.",
        tooltipLanguages: "Cambiar idioma",
        tooltipResume: "El currículum se descargará en el idioma actual.",
    },
    experience: {
        titleExperience: "Experiencia",
        experiences: [
            {
                startDate: new Date('10-10-2022'),
                endDate: new Date('01-01-2024'),
                jobPosition: 'Analista programador de software',
                company: 'Erycia',
                link: 'https://www.erycia.com/',
                description: [
                    'Bases de Datos: Gestioné y optimicé bases de datos SQL Server e Informix.',
                    'Desarrollo Web: Creé aplicaciones escalables con .NET, aplicando principios SOLID.',
                    'Interfaces de Usuario: Diseñé interfaces dinámicas con JavaScript, jQuery, Bootstrap, CSS3 y HTML5.',
                    'Análisis de Requisitos: Definí funcionalidades y objetivos con usuarios y stakeholders.',
                    'Aplicaciones y Servidores: Desarrollé aplicaciones web y de escritorio, y servidores con C#.',
                    'Manipulación de Archivos: Generé archivos PDF y XLS personalizados.',
                    'Pruebas y Correcciones: Realicé pruebas y correcciones para asegurar calidad.',
                    'Integración de Sistemas: Establecí conexiones seguras entre bases de datos y sistemas.',
                    'Soporte Técnico: Ofrecí soporte técnico y mantenimiento de aplicaciones y redes.',
                ]
            },
            {
                startDate: new Date('01-01-2022'),
                endDate: new Date('09-09-2022'),
                jobPosition: 'Desarrollador web Full-Stack',
                company: 'Karem Dayan',
                link: 'https://www.karemdayan.com/',
                description: [
                    'Desarrollo Web: Creé aplicaciones web escalables y de alto rendimiento con React JS y Next JS, usando ECMAScript 6 y TypeScript.',
                    'Interfaces de Usuario: Diseñé interfaces atractivas y dinámicas con CSS3 y animaciones personalizadas.',
                    'Componentes Reutilizables: Construí componentes funcionales y reutilizables, mejorando la eficiencia y mantenibilidad del código.',
                    'Gestión de Estado: Utilicé Redux para gestionar el estado de las aplicaciones, asegurando una experiencia fluida.',
                    'Autenticación: Implementé autenticación y control de acceso, garantizando la seguridad de la aplicación.',
                    'Bases de Datos: Trabajé con Firebase y MongoDB, optimizando el rendimiento para distintos modelos de datos.',
                    'Prototipos: Colaboré en el diseño de prototipos, wireframes y mockups para definir la arquitectura de las aplicaciones.',
                    'Diseño Responsive: Implementé diseños responsive y utilicé Material UI para interfaces adaptables.',
                    'APIs Robustas: Desarrollé APIs con Node.js y tokens web JSON para asegurar autenticación y autorización.',
                    'Control de Versiones: Usé Git y GitHub para gestionar el código fuente y colaborar con otros desarrolladores.',
                    'Funcionalidad de Correo: Implementé envío de correos con invitaciones personalizadas a Google Calendar.',
                    'Gestión de Contenidos: Desarrollé un sistema para cargar, almacenar y visualizar videos e imágenes de manera segura y eficiente.',
                ]
            },
            {
                startDate: new Date('06-06-2019'),
                endDate: new Date('09-09-2021'),
                jobPosition: 'Desarrollador web JR.',
                company: 'Vlim',
                link: 'https://www.vlim.com.mx/',
                description: [
                    'Metodologías Ágiles: Participé en proyectos de desarrollo web utilizando metodologías ágiles (SCRUM), logrando entregas eficientes y cumpliendo plazos.',
                    'Estructuración HTML5: Estructuré y diseñé páginas con HTML5.',
                    'Interfaces de Usuario: Diseñé y desarrollé interfaces intuitivas y responsivas con HTML5, CSS3, JavaScript, jQuery y Bootstrap.',
                    'Lógica Cliente-Servidor: Implementé lógica del lado del cliente y del servidor para aplicaciones web dinámicas y funcionales.',
                    'Integración de APIs: Consumí y gestioné datos de servicios web y APIs, asegurando una perfecta integración con el frontend.',
                    'Gestión de Bases de Datos: Diseñé y gestioné bases de datos relacionales (MySQL), optimizando rendimiento y asegurando la integridad de los datos.',
                    'Código Limpio: Desarrollé código limpio, escalable y mantenible, siguiendo las mejores prácticas de la industria.',
                    'Funcionalidades Avanzadas: Implementé funcionalidades avanzadas como envío de correos dinámicos, generación de archivos PDF, TXT, XLSX y paginación de tablas.',
                    'Desarrollo con React JS: Contribuí al desarrollo de aplicaciones web con React JS, mejorando la experiencia del usuario.',
                    'Control de Versiones: Utilicé Git y GitHub para gestionar el código fuente y colaborar con otros desarrolladores.',
                ],
            },
        ],
        button: "Ver más"
    }
}