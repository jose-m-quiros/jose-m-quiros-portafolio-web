import { ExperienceEntry, Locale } from '@/lib/types';

export const experienceByLocale: Record<Locale, ExperienceEntry[]> = {
  es: [
    {
      company: 'SPIKEDTECH',
      position: 'Fundador y Backend Developer',
      period: '2022 - Actualidad',
      summary:
        'Desarrollo soluciones de software para pymes y clientes individuales, combinando arquitectura backend, integración de datos y seguridad aplicada. Además, brindo acompañamiento técnico a estudiantes universitarios en proyectos de desarrollo.',
      items: [
        {
          action:
            'Diseñé e implementé APIs y módulos de gestión para procesos operativos de clientes.',
          technology: 'C#, ASP.NET Core, SQL Server, Swagger',
          result:
            'Convertí procesos manuales en flujos con validación, trazabilidad y documentación técnica, reduciendo el riesgo de errores de captura en soluciones para pymes y clientes individuales.',
        },
        {
          action:
            'Estandaricé validaciones de entrada, manejo de errores y criterios de calidad de código.',
          technology: 'DataAnnotations, FluentValidation, logging estructurado',
          result:
            'Mejoré la consistencia de datos y la mantenibilidad al aplicar reglas centralizadas antes de persistir o exponer información.',
        },
        {
          action: 'Aplique controles de seguridad en consultas y endpoints.',
          technology: 'Consultas parametrizadas, principios OWASP, control de acceso por rol',
          result:
            'Reduje riesgos comunes de SQL Injection y exposición de datos mediante controles de seguridad básicos alineados con OWASP.',
        },
      ],
      link: 'https://spikedtech-official.vercel.app/',
    },
    {
      company: 'PBS GROUP',
      position: 'Agente de Soporte Técnico enfocado en Datáfonos',
      period: 'Abr 2026 - Actualidad',
      summary:
        'Actualmente participo en el Proyecto BAC dentro de PBS GROUP, asegurando continuidad operativa en datáfonos mediante mantenimiento técnico, control de inventario y uso eficiente de herramientas de servicio.',
      items: [
        {
          action:
            'Realizo mantenimientos preventivos en datáfonos para anticipar fallas y sostener la disponibilidad de los equipos en operación.',
          technology: 'Rutinas preventivas, diagnóstico técnico, checklist operativo',
          result:
            'Contribuyo a reducir incidencias recurrentes y a mantener una operación más estable en puntos de atención.',
        },
        {
          action:
            'Ejecuto mantenimientos completos, incluyendo revisión funcional, limpieza técnica y validación general del estado del dispositivo.',
          technology: 'Mantenimiento integral, validación funcional, control de calidad',
          result:
            'Aseguro equipos listos para servicio con criterios consistentes de funcionamiento y presentación técnica.',
        },
        {
          action:
            'Gestiono inventarios de equipos, accesorios y materiales de soporte con orden y trazabilidad operativa.',
          technology: 'Control de inventario, registro técnico, organización de activos',
          result:
            'Fortalezco el control de recursos y la disponibilidad oportuna de insumos para soporte y mantenimiento.',
        },
        {
          action:
            'Aplico manejo efectivo de herramientas técnicas durante intervenciones, priorizando precisión, seguridad y cuidado del equipo.',
          technology: 'Herramientas de servicio, buenas prácticas operativas, manipulación segura',
          result:
            'Mantengo estándares de trabajo ordenados y confiables durante las tareas de soporte técnico en campo u operación.',
        },
      ],
    },
    {
      company: 'Asamblea Legislativa de Costa Rica',
      position: 'Técnico de Soporte TI (Departamento de Tecnologías de la Información)',
      period: 'Oct 2024 - Dic 2024',
      summary:
        'Brindé soporte técnico en entorno institucional, reforzando continuidad operativa mediante mantenimiento preventivo, gestión de redes y atención a usuarios.',
      items: [
        {
          action:
            'Ejecuté actualización de drivers, inventarios técnicos y mantenimiento de equipos de forma planificada.',
          technology:
            'Windows Server, diagnóstico HW/SW, inventario técnico, herramientas de despliegue',
          result:
            'Mejoré la estabilidad del parque tecnológico y aceleré la respuesta ante incidencias recurrentes.',
        },
        {
          action:
            'Brindé soporte a usuarios y participé en mantenimiento de servidores y gestión de redes institucionales.',
          technology: 'Redes LAN, troubleshooting, monitoreo básico, soporte de servicios internos',
          result:
            'Fortalecí la continuidad operativa para usuarios administrativos con atención técnica oportuna y documentada.',
        },
      ],
    },
    {
      company: 'Municipalidad de Atenas',
      position: 'Técnico de Soporte TI (Departamento de Soporte)',
      period: 'Ago 2023',
      summary:
        'Participé en labores de soporte técnico institucional con enfoque en atención al usuario, mantenimiento de hardware y actualización de sistemas.',
      items: [
        {
          action: 'Brindé soporte técnico a usuarios en incidencias operativas de uso diario.',
          technology: 'Mesa de ayuda, diagnóstico básico, atención a usuario final',
          result:
            'Contribuí a mantener continuidad operativa en estaciones de trabajo del departamento.',
        },
        {
          action: 'Realice mantenimiento de hardware en computadoras de escritorio y laptops.',
          technology: 'Mantenimiento preventivo/correctivo, diagnóstico de componentes',
          result:
            'Mejoré el estado operativo de los equipos y reduje fallas recurrentes de hardware.',
        },
        {
          action:
            'Ejecuté actualizaciones de sistemas operativos, drivers, instalación de programas y configuración de redes.',
          technology: 'Windows, drivers, software base, configuración de red',
          result:
            'Aseguré entornos de trabajo actualizados y configurados para el uso institucional.',
        },
      ],
    },
    {
      company: 'NETCOM - AyA',
      position: 'Agente técnico de atención',
      period: 'Ene 2025 - Abr 2026',
      summary:
        'Gestiono procesos operativos de atención bajo un modelo multiskills, con precisión en facturación y resolución oportuna de órdenes de servicio para el Instituto Costarricense de Acueductos y Alcantarillados (AyA).',
      items: [
        {
          action:
            'Gestiono procesos mediante CRM y plataformas OPEN para facturación, detección de anomalías, registro, seguimiento y resolución de órdenes de servicio.',
          technology: 'CRM, OPEN, flujos de validación, trazabilidad de casos',
          result:
            'Elevo la consistencia operativa y la calidad de resolución al estructurar el ciclo completo de atención de incidencias.',
        },
        {
          action:
            'Brindo atención multicanal (llamadas y chat, en capacitación para correo), resolviendo consultas, reclamos y solicitudes con comunicación clara de trámites y políticas institucionales.',
          technology: 'Modelo multiskills, protocolos de escalamiento, documentación de casos',
          result:
            'Mejoro tiempos de respuesta y satisfacción del usuario, coordinando con áreas internas para una solución eficiente y oportuna.',
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
          result:
            'Improved data consistency and code maintainability across client developments and university support projects.',
        },
        {
          action: 'Applied security controls on queries and endpoints.',
          technology: 'Parameterized queries, OWASP principles, role-based access',
          result:
            'Reduced common SQL Injection and data exposure risks through baseline security controls.',
        },
      ],
      link: 'https://spikedtech-official.vercel.app/',
    },
    {
      company: 'PBS GROUP',
      position: 'Technical Support Agent focused on Payment Terminals',
      period: 'Apr 2026 - Present',
      summary:
        'I currently contribute to the BAC Project at PBS GROUP, supporting payment-terminal continuity through technical maintenance, inventory control and disciplined tool handling.',
      items: [
        {
          action:
            'Perform preventive maintenance routines on payment terminals to anticipate failures and sustain device availability in operation.',
          technology: 'Preventive routines, technical diagnostics, operational checklists',
          result:
            'Helps reduce recurring incidents and maintain a more stable service operation across support points.',
        },
        {
          action:
            'Execute full-service maintenance tasks, including functional review, technical cleaning and overall device validation.',
          technology: 'Full maintenance, functional validation, quality control',
          result:
            'Ensures devices are service-ready with consistent standards for performance and technical presentation.',
        },
        {
          action:
            'Manage inventories of devices, accessories and support materials with operational order and traceability.',
          technology: 'Inventory control, technical logging, asset organization',
          result:
            'Strengthens resource control and timely availability of materials needed for support and maintenance.',
        },
        {
          action:
            'Apply effective handling of technical tools during interventions, prioritizing precision, safety and equipment care.',
          technology: 'Service tools, operational best practices, safe handling',
          result:
            'Maintains reliable and orderly work standards during technical support and maintenance tasks.',
        },
      ],
    },
    {
      company: 'Legislative Assembly of Costa Rica',
      position: 'IT Support Technician (Information Technology Department)',
      period: 'Oct 2024 - Dec 2024',
      summary:
        'Delivered institutional IT support with an operational continuity mindset through preventive maintenance, network management and user support.',
      items: [
        {
          action:
            'Executed driver updates, technical inventories and preventive maintenance routines for workstations.',
          technology: 'Windows Server, HW/SW diagnostics, technical inventory, deployment tooling',
          result: 'Improved platform stability and reduced recurring incident response times.',
        },
        {
          action:
            'Provided user support and participated in server maintenance and institutional network operations.',
          technology: 'LAN networking, troubleshooting, basic monitoring, internal service support',
          result:
            'Strengthened service continuity for administrative users through timely and documented support.',
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
          result:
            'Ensured updated and properly configured working environments for institutional use.',
        },
      ],
    },
    {
      company: 'NETCOM - AyA',
      position: 'Technical Service Agent',
      period: 'Jan 2025 - Apr 2026',
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
