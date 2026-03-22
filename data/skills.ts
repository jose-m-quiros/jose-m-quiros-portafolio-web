import { Locale, SkillGroup } from '@/lib/types';

export const skillGroupsByLocale: Record<Locale, SkillGroup[]> = {
  es: [
    {
      level: 'core',
      title: 'Core',
      description: 'Stack principal para construir APIs seguras y servicios backend mantenibles.',
      items: [
        { name: 'C#', area: '.NET Backend' },
        { name: '.NET 8 / ASP.NET Core', area: 'APIs REST' },
        { name: 'SQL Server', area: 'Modelado y consultas' },
        { name: 'Validacion de datos', area: 'Integridad de entrada' },
        { name: 'OWASP Top 10', area: 'Secure coding' },
        { name: 'Python', area: 'Automatizacion de procesos' },
      ],
    },
    {
      level: 'intermediate',
      title: 'Intermedio',
      description: 'Herramientas de entrega, observabilidad y soporte de arquitectura.',
      items: [
        { name: 'Docker', area: 'Contenedores' },
        { name: 'Swagger / OpenAPI', area: 'Documentacion API' },
        { name: 'Git / GitHub', area: 'Versionado y colaboracion' },
        { name: 'Postman', area: 'Pruebas de endpoints' },
        { name: 'MySQL', area: 'SQL relacional' },
        { name: 'PowerShell', area: 'Automatizacion operativa' },
      ],
    },
    {
      level: 'knowledge',
      title: 'Conocimiento',
      description: 'Capacidades complementarias para integraciones y capas de presentacion.',
      items: [
        { name: 'React', area: 'UI para herramientas internas' },
        { name: 'Next.js', area: 'Integracion frontend/backend' },
        { name: 'TypeScript', area: 'Tipado en frontend' },
        { name: 'MongoDB', area: 'NoSQL basico' },
        { name: 'Java', area: 'Fundamentos OOP' },
      ],
    },
  ],
  en: [
    {
      level: 'core',
      title: 'Core',
      description: 'Primary stack to build secure APIs and maintainable backend services.',
      items: [
        { name: 'C#', area: '.NET Backend' },
        { name: '.NET 8 / ASP.NET Core', area: 'REST APIs' },
        { name: 'SQL Server', area: 'Data modeling and queries' },
        { name: 'Data validation', area: 'Input integrity' },
        { name: 'OWASP Top 10', area: 'Secure coding' },
        { name: 'Python', area: 'Process automation' },
      ],
    },
    {
      level: 'intermediate',
      title: 'Intermediate',
      description: 'Delivery, observability and architecture support tooling.',
      items: [
        { name: 'Docker', area: 'Containers' },
        { name: 'Swagger / OpenAPI', area: 'API documentation' },
        { name: 'Git / GitHub', area: 'Version control and collaboration' },
        { name: 'Postman', area: 'Endpoint testing' },
        { name: 'MySQL', area: 'Relational SQL' },
        { name: 'PowerShell', area: 'Operational automation' },
      ],
    },
    {
      level: 'knowledge',
      title: 'Knowledge',
      description: 'Complementary capabilities for integrations and presentation layers.',
      items: [
        { name: 'React', area: 'Internal tools UI' },
        { name: 'Next.js', area: 'Frontend/backend integration' },
        { name: 'TypeScript', area: 'Frontend typing' },
        { name: 'MongoDB', area: 'Basic NoSQL' },
        { name: 'Java', area: 'OOP fundamentals' },
      ],
    },
  ],
};
