import { InDevelopmentProject, Locale, ProjectCase } from '@/lib/types';

export const projectsByLocale: Record<Locale, ProjectCase[]> = {
  es: [
    {
      id: 'spikedtech-site',
      title: 'SPIKEDTECH Web Corporativa',
      category: 'Web',
      status: 'published',
      image: '/projects/spikedtech.png',
      problem:
        'La marca no contaba con una presencia digital clara para convertir visitantes en clientes potenciales.',
      objective:
        'Crear una presencia corporativa clara para comunicar servicios, reducir fricción de contacto y ordenar la propuesta técnico-comercial.',
      architecture:
        'Sitio estatico desplegado en Vercel con estructura por secciones, assets optimizados y rutas de contacto directas.',
      solution:
        'Construí un sitio corporativo orientado a conversión, con servicios claros, rutas de contacto directas y contenido pensado para clientes no técnicos.',
      role: 'Developer y responsable de arquitectura de contenido.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Arquitectura de informacion orientada a servicios.',
        'CTA claros para contacto y conversión.',
        'Estructura ligera de despliegue estático.',
        'Contenido alineado con marca técnica.',
      ],
      result:
        'Organicé la presentación de servicios, casos de uso y canales de contacto para reducir fricción entre visita, consulta y posible contratación.',
      impact:
        'Aporta un canal verificable de presencia digital, mejora confianza comercial y reduce ambigüedad sobre los servicios ofrecidos.',
      challenges: [
        'Traducir servicios técnicos a mensajes claros para clientes.',
        'Mantener el sitio simple sin sacrificar confianza visual.',
      ],
      lessons: [
        'La claridad comercial también es una decisión de arquitectura de información.',
        'Un sitio corporativo debe priorizar confianza, contacto y velocidad.',
      ],
      roadmap: [
        'Migrar a stack moderno con analítica privacy-friendly.',
        'Agregar casos de estudio por servicio.',
        'Fortalecer SEO técnico y metadata estructurada.',
      ],
      security: 'Buenas prácticas de hardening básico en formularios y enlaces externos.',
      demo: 'https://spikedtech-official.vercel.app/',
      screenshots: ['/projects/spikedtech.png'],
      highlights: ['Conversion', 'Marca tecnica', 'Canales de contacto'],
    },
  ],
  en: [
    {
      id: 'spikedtech-site',
      title: 'SPIKEDTECH Corporate Website',
      category: 'Web',
      status: 'published',
      image: '/projects/spikedtech.png',
      problem:
        'The brand lacked a clear digital presence to convert visitors into qualified leads.',
      objective:
        'Create a clear corporate presence to communicate services, reduce contact friction and organize the technical-commercial proposal.',
      architecture:
        'Static site deployed on Vercel with section-based structure, optimized assets and direct contact paths.',
      solution:
        'Built a corporate site with service-driven information architecture and direct contact paths.',
      role: 'Developer and content architecture owner.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Service-oriented information architecture.',
        'Clear CTAs for contact and conversion.',
        'Lightweight static deployment structure.',
        'Content aligned with a technical brand.',
      ],
      result:
        'Organized service presentation and contact channels to improve technical-commercial communication.',
      impact:
        'Provides a verifiable digital channel and reduces ambiguity around offered services.',
      challenges: [
        'Translating technical services into clear customer-facing messages.',
        'Keeping the site simple without sacrificing trust.',
      ],
      lessons: [
        'Commercial clarity is also an information architecture decision.',
        'A corporate site should prioritize trust, contact and speed.',
      ],
      roadmap: [
        'Migrate to a modern stack with privacy-friendly analytics.',
        'Add service-specific case studies.',
        'Strengthen technical SEO and structured metadata.',
      ],
      security: 'Basic form hardening and secure external-link handling.',
      demo: 'https://spikedtech-official.vercel.app/',
      screenshots: ['/projects/spikedtech.png'],
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
        'Construir una plataforma de ciberdefensa modular que integre análisis de amenazas, observabilidad y respuesta operativa sin acoplar dominios críticos.',
      currentFocus:
        'FastAPI sostiene servicios críticos por su rendimiento en I/O, tipado explícito y contratos OpenAPI. Ollama local responde a soberanía de datos, latencia predecible y control de costos en análisis táctico.',
      tech: [
        'Python',
        'FastAPI',
        'Next.js',
        'Ollama',
        'WebSocket',
        'JWT',
        'RBAC',
        'YARA',
        'MITRE ATT&CK',
        'Threat Intel',
      ],
      expectedImpact:
        'Reducir deuda técnica al eliminar dependencias cruzadas implícitas, mejorar mantenibilidad por límites de contexto claros y habilitar validaciones reproducibles antes de operar.',
      securityScope:
        'Arquitectura hexagonal por agregados, puertos y adaptadores para threat intel, forense y monitoreo, endpoints sensibles con JWT/MFA/RBAC, validación estricta y respuesta operativa basada en YARA y MITRE ATT&CK.',
    },
  ],
  en: [
    {
      id: 'datasentinel-platform',
      title: 'BLACK MONARCH',
      objective:
        'Build a modular cyber defense platform that integrates threat analysis, observability and operational response without coupling critical domains.',
      currentFocus:
        'FastAPI supports critical services because of strong I/O performance, explicit typing and OpenAPI contracts. Local Ollama addresses data sovereignty, predictable latency and cost control for tactical analysis.',
      tech: [
        'Python',
        'FastAPI',
        'Next.js',
        'Ollama',
        'WebSocket',
        'JWT',
        'RBAC',
        'YARA',
        'MITRE ATT&CK',
        'Threat Intel',
      ],
      expectedImpact:
        'Reduce technical debt by removing implicit cross-module dependencies, improve maintainability through clear bounded contexts and enable reproducible validations before operations.',
      securityScope:
        'Hexagonal architecture by aggregates, ports and adapters for threat intel, forensics and monitoring, sensitive endpoints with JWT/MFA/RBAC, strict validation and operational response based on YARA and MITRE ATT&CK.',
    },
  ],
};
