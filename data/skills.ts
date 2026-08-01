import { Locale, SkillGroup } from '@/lib/types';

export const skillGroupsByLocale: Record<Locale, SkillGroup[]> = {
  es: [
    {
      level: 'backend',
      title: 'Backend',
      description: 'APIs, reglas de negocio y servicios mantenibles para operaciones reales.',
      items: [
        {
          name: 'Python',
          area: 'APIs y automatización',
          description: 'Automatización, scripting y servicios backend con FastAPI.',
        },
        {
          name: 'FastAPI',
          area: 'API development',
          description:
            'APIs tipadas, rápidas y documentadas para integraciones seguras.',
        },
        {
          name: 'C# / .NET',
          area: 'Backend empresarial',
          description:
            'APIs REST, reglas de negocio y servicios con tipado fuerte.',
        },
        {
          name: 'OpenAPI',
          area: 'Contratos API',
          description:
            'Documentación y validación de contratos para consumidores y pruebas.',
        },
      ],
    },
    {
      level: 'security',
      title: 'Seguridad',
      description: 'Controles defensivos para proteger datos, accesos y superficies expuestas.',
      items: [
        {
          name: 'OWASP Top 10',
          area: 'Secure coding',
          description:
            'Mitigación de riesgos comunes que pueden comprometer datos y servicios.',
        },
        {
          name: 'JWT / RBAC',
          area: 'Identity & access',
          description:
            'Autenticación y autorización por roles con principio de menor privilegio.',
        },
        {
          name: 'Security Headers',
          area: 'Hardening frontend',
          description:
            'CSP, HSTS y políticas de permisos para reducir superficie del navegador.',
        },
        {
          name: 'Input Validation',
          area: 'Data integrity',
          description:
            'Validación server-side y esquemas contra entradas inválidas o abusivas.',
        },
      ],
    },
    {
      level: 'cloud',
      title: 'Cloud & DevSecOps',
      description: 'Despliegues reproducibles, seguridad en pipeline y operación observable.',
      items: [
        {
          name: 'Docker',
          area: 'Contenedores',
          description:
            'Empaquetado de servicios y entornos reproducibles para desarrollo y despliegue.',
        },
        {
          name: 'CI/CD',
          area: 'Delivery',
          description: 'Validaciones automatizadas antes de publicar cambios.',
        },
        {
          name: 'AWS / Azure / GCP',
          area: 'Cloud learning',
          description: 'Ruta de crecimiento enfocada en seguridad, IAM, redes y monitoreo cloud.',
        },
        {
          name: 'Vercel',
          area: 'Deployment',
          description: 'Despliegue optimizado para Next.js con buenas prácticas de configuración.',
        },
      ],
    },
    {
      level: 'database',
      title: 'Bases de datos',
      description: 'Persistencia, modelado y consultas seguras para aplicaciones backend.',
      items: [
        {
          name: 'SQL Server',
          area: 'Relacional',
          description: 'Modelado, consultas parametrizadas y persistencia para soluciones .NET.',
        },
        {
          name: 'MySQL',
          area: 'Relacional',
          description: 'Consultas, relaciones y fundamentos para aplicaciones transaccionales.',
        },
        {
          name: 'MongoDB',
          area: 'NoSQL',
          description:
            'Uso básico para estructuras flexibles y aprendizaje de persistencia documental.',
        },
      ],
    },
    {
      level: 'frontend',
      title: 'Frontend',
      description:
        'Frontend como capa de producto para portafolios, dashboards y herramientas internas.',
      items: [
        {
          name: 'Next.js',
          area: 'App Router',
          description:
            'Framework para experiencias web rápidas, SEO técnico y componentes servidor.',
        },
        {
          name: 'React',
          area: 'UI',
          description:
            'Componentes interactivos cuando el estado de cliente realmente aporta valor.',
        },
        {
          name: 'TypeScript',
          area: 'Tipado',
          description: 'Contratos fuertes para reducir errores en UI y modelos de datos.',
        },
        {
          name: 'Tailwind CSS',
          area: 'Design system',
          description: 'Sistema de estilos utilitario para interfaces consistentes y mantenibles.',
        },
      ],
    },
    {
      level: 'tools',
      title: 'Herramientas',
      description: 'Herramientas de desarrollo, pruebas, documentación y automatización operativa.',
      items: [
        {
          name: 'Git / GitHub',
          area: 'Versionado',
          description: 'Control de cambios, repositorios y documentación técnica.',
        },
        {
          name: 'Postman',
          area: 'API testing',
          description: 'Pruebas manuales y colecciones para verificar comportamiento de endpoints.',
        },
        {
          name: 'PowerShell',
          area: 'Automatización',
          description: 'Scripts para tareas operativas y flujos en Windows.',
        },
        {
          name: 'ESLint / Prettier',
          area: 'Calidad',
          description: 'Controles de consistencia, legibilidad y errores antes de build.',
        },
      ],
    },
  ],
  en: [
    {
      level: 'backend',
      title: 'Backend',
      description: 'Main technologies for APIs, business rules and maintainable services.',
      items: [
        {
          name: 'Python',
          area: 'APIs and automation',
          description: 'Primary language for automation, scripting and FastAPI services.',
        },
        {
          name: 'FastAPI',
          area: 'API development',
          description: 'Target framework for typed, fast APIs documented with OpenAPI.',
        },
        {
          name: 'C# / .NET',
          area: 'Enterprise backend',
          description: 'Stack used for REST APIs, business rules and strongly typed services.',
        },
        {
          name: 'OpenAPI',
          area: 'API contracts',
          description: 'Contract documentation and validation for consumers and endpoint tests.',
        },
      ],
    },
    {
      level: 'security',
      title: 'Security',
      description: 'Defensive controls to reduce risk in APIs, forms and configuration.',
      items: [
        {
          name: 'OWASP Top 10',
          area: 'Secure coding',
          description: 'Baseline reference to identify and mitigate common application risks.',
        },
        {
          name: 'JWT / RBAC',
          area: 'Identity & access',
          description:
            'Authentication and authorization model for APIs with roles and least privilege.',
        },
        {
          name: 'Security Headers',
          area: 'Frontend hardening',
          description: 'CSP, HSTS, nosniff and permission policies to reduce browser surface.',
        },
        {
          name: 'Input Validation',
          area: 'Data integrity',
          description: 'Server-side validation and schemas to reject invalid or abusive input.',
        },
      ],
    },
    {
      level: 'cloud',
      title: 'Cloud & DevSecOps',
      description: 'Foundation for reproducible deployments, pipeline security and observability.',
      items: [
        {
          name: 'Docker',
          area: 'Containers',
          description: 'Service packaging and reproducible development/deployment environments.',
        },
        {
          name: 'CI/CD',
          area: 'Delivery',
          description: 'Automated checks before publishing changes.',
        },
        {
          name: 'AWS / Azure / GCP',
          area: 'Cloud learning',
          description: 'Growth path focused on security, IAM, networking and cloud monitoring.',
        },
        {
          name: 'Vercel',
          area: 'Deployment',
          description: 'Optimized Next.js deployment with secure configuration practices.',
        },
      ],
    },
    {
      level: 'database',
      title: 'Databases',
      description: 'Persistence, modeling and safe queries for backend applications.',
      items: [
        {
          name: 'SQL Server',
          area: 'Relational',
          description: 'Modeling, parameterized queries and persistence for .NET solutions.',
        },
        {
          name: 'MySQL',
          area: 'Relational',
          description: 'Queries, relationships and fundamentals for transactional applications.',
        },
        {
          name: 'MongoDB',
          area: 'NoSQL',
          description: 'Basic usage for flexible structures and document persistence learning.',
        },
      ],
    },
    {
      level: 'frontend',
      title: 'Frontend',
      description: 'Frontend as a product layer for portfolios, dashboards and internal tools.',
      items: [
        {
          name: 'Next.js',
          area: 'App Router',
          description: 'Framework for fast web experiences, technical SEO and Server Components.',
        },
        {
          name: 'React',
          area: 'UI',
          description: 'Interactive components when client state creates real value.',
        },
        {
          name: 'TypeScript',
          area: 'Typing',
          description: 'Strong contracts to reduce errors in UI and data models.',
        },
        {
          name: 'Tailwind CSS',
          area: 'Design system',
          description: 'Utility styling system for consistent, maintainable interfaces.',
        },
      ],
    },
    {
      level: 'tools',
      title: 'Tools',
      description: 'Development, testing, documentation and operational automation tools.',
      items: [
        {
          name: 'Git / GitHub',
          area: 'Version control',
          description: 'Change control, repositories and technical documentation.',
        },
        {
          name: 'Postman',
          area: 'API testing',
          description: 'Manual tests and collections to verify endpoint behavior.',
        },
        {
          name: 'PowerShell',
          area: 'Automation',
          description: 'Scripts for operational tasks and Windows workflows.',
        },
        {
          name: 'ESLint / Prettier',
          area: 'Quality',
          description: 'Consistency, readability and error controls before build.',
        },
      ],
    },
  ],
};
