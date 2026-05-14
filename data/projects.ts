import { InDevelopmentProject, Locale, ProjectCase } from '@/lib/types';

export const projectsByLocale: Record<Locale, ProjectCase[]> = {
  es: [
    {
      id: 'records-panel',
      title: 'Panel de Registros Operativos',
      category: 'Backend / API',
      status: 'published',
      image: '/projects/net.png',
      problem:
        'El registro de actividades se realizaba de forma manual y sin control de trazabilidad entre equipos.',
      solution:
        'Desarrolle una solucion con APIs en .NET C#, SQL Server y Ollama como IA para centralizar registros, validar entradas y mejorar el flujo operativo.',
      role: 'Backend Developer (diseno de API, modelo de datos y reglas de negocio).',
      tech: ['.NET C#', 'SQL Server', 'Ollama', 'APIs REST'],
      result:
        'Se estructuro un flujo centralizado de registro y consulta, incorporando Ollama para mejorar procesos de busqueda y la trazabilidad del proceso.',
      security:
        'Validacion server-side, consultas parametrizadas y manejo de errores sin exponer detalles internos.',
      github: 'https://github.com/jose-m-quiros',
      highlights: ['API REST', 'Trazabilidad', 'Integracion con Ollama'],
    },
    {
      id: 'python-automation',
      title: 'Automatizacion de Validaciones y Reportes',
      category: 'Automatizacion',
      status: 'wip',
      image: '/projects/automatizacion.png',
      problem:
        'Procesos manuales en Excel consumian tiempo y generaban inconsistencias en validaciones.',
      solution:
        'Implemente scripts en Python para validar datos, ejecutar tareas programadas y generar reportes listos para auditoria.',
      role: 'Automation Developer (analisis de flujo, scripting y ejecucion programada).',
      tech: ['Python', 'PowerShell', 'Excel', 'APIs'],
      result:
        'Se estandarizo la validacion de datos y el proceso de generacion de reportes para reducir reprocesos manuales.',
      security:
        'Saneamiento de entradas, control de archivos procesados y validaciones de esquema previo a exportacion.',
      github: 'https://github.com/jose-m-quiros',
      highlights: ['Batch processing', 'Data quality', 'Reportes automaticos'],
    },
    {
      id: 'spikedtech-site',
      title: 'SPIKEDTECH Web Corporativa',
      category: 'Web',
      status: 'published',
      image: '/projects/spikedtech.png',
      problem:
        'La marca no contaba con una presencia digital clara para convertir visitantes en clientes potenciales.',
      solution:
        'Construccion de sitio corporativo con estructura orientada a servicios y puntos de contacto directos.',
      role: 'Developer y responsable de arquitectura de contenido.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      result:
        'Se organizo la presentacion de servicios y canales de contacto para mejorar la comunicacion tecnica-comercial.',
      security:
        'Buenas practicas de hardening basico en formularios y enlaces externos.',
      github: 'https://github.com/jose-m-quiros',
      demo: 'https://spikedtech-official.vercel.app/',
      highlights: ['Conversion', 'Marca tecnica', 'Canales de contacto'],
    },
  ],
  en: [
    {
      id: 'records-panel',
      title: 'Operational Records Panel',
      category: 'Backend / API',
      status: 'published',
      image: '/projects/net.png',
      problem:
        'Activity records were managed manually with no reliable cross-team traceability.',
      solution:
        'Built a solution using .NET C#, SQL Server and Ollama AI to centralize records, validate inputs and improve operational flow.',
      role: 'Backend Developer (API design, data model and business rules).',
      tech: ['.NET C#', 'SQL Server', 'Ollama', 'REST APIs'],
      result:
        'Structured a centralized registration and query flow, using Ollama to improve search processes and process traceability.',
      security:
        'Server-side validation, parameterized queries and safe error handling without exposing internal details.',
      github: 'https://github.com/jose-m-quiros',
      highlights: ['REST API', 'Traceability', 'Ollama integration'],
    },
    {
      id: 'python-automation',
      title: 'Validation and Reporting Automation',
      category: 'Automation',
      status: 'wip',
      image: '/projects/automatizacion.png',
      problem:
        'Manual Excel-heavy processes consumed time and introduced validation inconsistencies.',
      solution:
        'Implemented Python scripts to validate datasets, run scheduled tasks and generate audit-ready reports.',
      role: 'Automation Developer (flow analysis, scripting and scheduling).',
      tech: ['Python', 'PowerShell', 'Excel', 'APIs'],
      result:
        'Standardized data validation and report generation flow to reduce manual rework.',
      security:
        'Input sanitization, processed-file control and schema validation before export.',
      github: 'https://github.com/jose-m-quiros',
      highlights: ['Batch processing', 'Data quality', 'Automated reports'],
    },
    {
      id: 'spikedtech-site',
      title: 'SPIKEDTECH Corporate Website',
      category: 'Web',
      status: 'published',
      image: '/projects/spikedtech.png',
      problem:
        'The brand lacked a clear digital presence to convert visitors into qualified leads.',
      solution:
        'Built a corporate site with service-driven information architecture and direct contact paths.',
      role: 'Developer and content architecture owner.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      result:
        'Organized service presentation and contact channels to improve technical-commercial communication.',
      security:
        'Basic form hardening and secure external-link handling.',
      github: 'https://github.com/jose-m-quiros',
      demo: 'https://spikedtech-official.vercel.app/',
      highlights: ['Conversion', 'Technical brand', 'Contact channels'],
    },
  ],
};

export const inDevelopmentByLocale: Record<Locale, InDevelopmentProject[]> = {
  es: [
    {
      id: 'datasentinel-platform',
      title: 'BLACK MONARCH',
      objective:
        'Construir una plataforma de ciberdefensa capaz de ingerir eventos de seguridad, analizarlos, correlacionarlos y priorizarlos para apoyar deteccion y respuesta.',
      currentFocus:
        'Arquitectura de analitica y monitoreo con correlacion en tiempo real, IA local con Ollama, nodos distribuidos, monitoreo de activos y capas operativas con FastAPI y Next.js.',
      tech: ['Python', 'FastAPI', 'Next.js', 'Ollama', 'WebSocket', 'JWT', 'RBAC', 'YARA', 'MITRE ATT&CK', 'Threat Intel'],
      expectedImpact:
        'Ayudar a un analista o equipo de seguridad a entender que esta pasando, que tan grave es, como se conecta con otros eventos y que acciones ejecutar despues.',
      securityScope:
        'Correlacion de amenazas, scoring de riesgo, playbooks de respuesta, SAST/DAST controlado, inteligencia con YARA y MITRE ATT&CK, y control de acceso con JWT, MFA y RBAC.',
    },
  ],
  en: [
    {
      id: 'datasentinel-platform',
      title: 'BLACK MONARCH',
      objective:
        'Build a cyber defense platform that ingests security events, analyzes them, correlates them and prioritizes them to support detection and response.',
      currentFocus:
        'Security analytics and monitoring architecture with real-time correlation, local AI through Ollama, distributed nodes, asset monitoring, and operational layers built with FastAPI and Next.js.',
      tech: ['Python', 'FastAPI', 'Next.js', 'Ollama', 'WebSocket', 'JWT', 'RBAC', 'YARA', 'MITRE ATT&CK', 'Threat Intel'],
      expectedImpact:
        'Help analysts or security teams understand what is happening, how severe it is, how it connects to other events, and which actions should follow next.',
      securityScope:
        'Threat correlation, risk scoring, response playbooks, controlled SAST/DAST capabilities, YARA and MITRE ATT&CK intelligence, and access control with JWT, MFA and RBAC.',
    },
  ],
};
