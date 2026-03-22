import { ExperienceEntry, Locale } from '@/lib/types';

export const experienceByLocale: Record<Locale, ExperienceEntry[]> = {
  es: [
    {
      company: 'SPIKEDTECH',
      position: 'Fundador y Backend Developer',
      period: '2022 - Actualidad',
      summary:
        'Desarrollo soluciones de software para pymes y clientes individuales, combinando arquitectura backend, integracion de datos y seguridad aplicada. Ademas, brindo acompanamiento tecnico a estudiantes universitarios en proyectos de desarrollo.',
      items: [
        {
          action: 'Disene e implemente APIs y modulos de gestion para procesos operativos de clientes.',
          technology: 'C#, ASP.NET Core, SQL Server, Swagger',
          result:
            'Implementé controles de validación de entrada y salida de datos para asegurar integridad, trazabilidad y confiabilidad en soluciones para pymes y clientes individuales, además de apoyar la verificación técnica de proyectos universitarios de pequeña escala.',
        },
        {
          action: 'Estandarice validaciones de entrada, manejo de errores y criterios de calidad de codigo.',
          technology: 'DataAnnotations, FluentValidation, logging estructurado',
          result: 'Mejore la consistencia de datos y la mantenibilidad del codigo en desarrollos para clientes y acompanamientos universitarios.',
        },
        {
          action: 'Aplique controles de seguridad en consultas y endpoints.',
          technology: 'Consultas parametrizadas, principios OWASP, control de acceso por rol',
          result: 'Reduje riesgos comunes de SQL Injection y exposicion de datos mediante controles de seguridad basicos.',
        },
      ],
      link: 'https://spikedtech-official.vercel.app/',
    },
    {
      company: 'Asamblea Legislativa de Costa Rica',
      position: 'Tecnico de Soporte TI (Departamento de Tecnologias de la Informacion)',
      period: 'Oct 2024 - Dic 2024',
      summary:
        'Brinde soporte tecnico en entorno institucional, reforzando continuidad operativa mediante mantenimiento preventivo, gestion de redes y atencion a usuarios.',
      items: [
        {
          action: 'Ejecute actualizacion de drivers, inventarios tecnicos y mantenimiento de equipos de forma planificada.',
          technology: 'Windows Server, diagnostico HW/SW, inventario tecnico, herramientas de despliegue',
          result: 'Mejore la estabilidad del parque tecnologico y acelere la respuesta ante incidencias recurrentes.',
        },
        {
          action: 'Brinde soporte a usuarios y participe en mantenimiento de servidores y gestion de redes institucionales.',
          technology: 'Redes LAN, troubleshooting, monitoreo basico, soporte de servicios internos',
          result: 'Fortaleci la continuidad operativa para usuarios administrativos con atencion tecnica oportuna y documentada.',
        },
      ],
    },
    {
      company: 'Municipalidad de Atenas',
      position: 'Tecnico de Soporte TI (Departamento de Soporte)',
      period: 'Ago 2023',
      summary:
        'Participe en labores de soporte tecnico institucional con enfoque en atencion al usuario, mantenimiento de hardware y actualizacion de sistemas.',
      items: [
        {
          action: 'Brinde soporte tecnico a usuarios en incidencias operativas de uso diario.',
          technology: 'Mesa de ayuda, diagnostico basico, atencion a usuario final',
          result: 'Contribui a mantener continuidad operativa en estaciones de trabajo del departamento.',
        },
        {
          action: 'Realice mantenimiento de hardware en computadoras de escritorio y laptops.',
          technology: 'Mantenimiento preventivo/correctivo, diagnostico de componentes',
          result: 'Mejore el estado operativo de los equipos y reduje fallas recurrentes de hardware.',
        },
        {
          action: 'Ejecute actualizaciones de sistemas operativos, drivers, instalacion de programas y configuracion de redes.',
          technology: 'Windows, drivers, software base, configuracion de red',
          result: 'Asegure entornos de trabajo actualizados y configurados para el uso institucional.',
        },
      ],
    },
    {
      company: 'NETCOM - AyA',
      position: 'Agente tecnico de atencion',
      period: 'Ene 2025 - Actualidad',
      summary:
        'Gestiono procesos operativos de atencion bajo un modelo multiskills, con precision en facturacion y resolucion oportuna de ordenes de servicio para el Instituto Costarricense de Acueductos y Alcantarillados (AyA).',
      items: [
        {
          action:
            'Gestiono procesos mediante CRM y plataformas OPEN para facturacion, deteccion de anomalias, registro, seguimiento y resolucion de ordenes de servicio.',
          technology: 'CRM, OPEN, flujos de validacion, trazabilidad de casos',
          result:
            'Elevo la consistencia operativa y la calidad de resolucion al estructurar el ciclo completo de atencion de incidencias.',
        },
        {
          action:
            'Brindo atencion multicanal (llamadas y chat, en capacitacion para correo), resolviendo consultas, reclamos y solicitudes con comunicacion clara de tramites y politicas institucionales.',
          technology: 'Modelo multiskills, protocolos de escalamiento, documentacion de casos',
          result:
            'Mejoro tiempos de respuesta y satisfaccion del usuario, coordinando con areas internas para una solucion eficiente y oportuna.',
        },
      ],
    },
  ],
  en: [
    {
      company: 'SPIKEDTECH',
      position: 'Founder and Backend Developer',
      period: '2022 - Present',
      summary:
        'I build software solutions for SMEs and individual clients using a backend-first approach with data integration and applied security. I also provide technical support to university students in coding projects.',
      items: [
        {
          action: 'Designed and implemented management APIs for internal processes.',
          technology: 'C#, ASP.NET Core, SQL Server, Swagger',
          result:
            'Implemented input/output validation controls to improve integrity, traceability and reliability in SME/client solutions, while supporting technical verification for small-scale university projects.',
        },
        {
          action: 'Standardized input validation and error handling.',
          technology: 'DataAnnotations, FluentValidation, structured logging',
          result: 'Improved data consistency and code maintainability across client developments and university support projects.',
        },
        {
          action: 'Applied security controls on queries and endpoints.',
          technology: 'Parameterized queries, OWASP principles, role-based access',
          result: 'Reduced common SQL Injection and data exposure risks through baseline security controls.',
        },
      ],
      link: 'https://spikedtech-official.vercel.app/',
    },
    {
      company: 'Legislative Assembly of Costa Rica',
      position: 'IT Support Technician (Information Technology Department)',
      period: 'Oct 2024 - Dec 2024',
      summary:
        'Delivered institutional IT support with an operational continuity mindset through preventive maintenance, network management and user support.',
      items: [
        {
          action: 'Executed driver updates, technical inventories and preventive maintenance routines for workstations.',
          technology: 'Windows Server, HW/SW diagnostics, technical inventory, deployment tooling',
          result: 'Improved platform stability and reduced recurring incident response times.',
        },
        {
          action: 'Provided user support and participated in server maintenance and institutional network operations.',
          technology: 'LAN networking, troubleshooting, basic monitoring, internal service support',
          result: 'Strengthened service continuity for administrative users through timely and documented support.',
        },
      ],
    },
    {
      company: 'Municipality of Atenas',
      position: 'IT Support Technician (Support Department)',
      period: 'Aug 2023',
      summary:
        'Contributed to institutional support operations focused on user assistance, hardware maintenance and system updates.',
      items: [
        {
          action: 'Provided user support for day-to-day operational incidents.',
          technology: 'Help desk workflow, basic diagnostics, end-user support',
          result: 'Helped maintain operational continuity across department workstations.',
        },
        {
          action: 'Performed desktop and laptop hardware maintenance tasks.',
          technology: 'Preventive/corrective maintenance, component diagnostics',
          result: 'Improved device availability and reduced recurring hardware failures.',
        },
        {
          action: 'Handled OS/driver updates, software installations and network configuration.',
          technology: 'Windows, drivers, baseline software, network setup',
          result: 'Ensured updated and properly configured working environments for institutional use.',
        },
      ],
    },
    {
      company: 'NETCOM - AyA',
      position: 'Technical Service Agent',
      period: 'Jan 2025 - Present',
      summary:
        'I manage customer service operations with a multiskill approach, focusing on billing accuracy and timely service-order resolution in water and sewer services.',
      items: [
        {
          action:
            'Managed processes through CRM and OPEN platforms for billing, anomaly detection, case registration, tracking and service-order resolution.',
          technology: 'CRM, OPEN, validation workflows, case traceability',
          result:
            'Improved operational consistency and quality of resolution by structuring the full incident-handling cycle.',
        },
        {
          action:
            'Delivered multi-channel support (calls and chat, with ongoing email support training), resolving requests and communicating procedures and policies clearly.',
          technology: 'Multiskill model, escalation protocols, case documentation',
          result:
            'Improved response time and user satisfaction by coordinating with internal teams for efficient and timely resolution.',
        },
      ],
    },
  ],
};
