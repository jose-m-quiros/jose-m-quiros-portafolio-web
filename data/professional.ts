import type { Locale } from '@/lib/types';

type Card = {
  title: string;
  description: string;
  points: string[];
};

type Certification = {
  name: string;
  issuer: string;
  focus: string;
  status: string;
  url: string;
};

export const professionalContentByLocale: Record<
  Locale,
  {
    specialties: { title: string; subtitle: string; items: Card[] };
    architecture: { title: string; subtitle: string; items: Card[] };
    security: { title: string; subtitle: string; items: Card[] };
    certifications: { title: string; subtitle: string; items: Certification[] };
    roadmap: { title: string; subtitle: string; items: Card[] };
  }
> = {
  es: {
    specialties: {
      title: 'Especialidades',
      subtitle:
        'Áreas donde concentro mi crecimiento profesional: backend robusto, seguridad aplicada, automatización y arquitectura mantenible.',
      items: [
        {
          title: 'Backend Engineering',
          description:
            'Diseño servicios API con separación de responsabilidades, validación fuerte y contratos claros.',
          points: ['REST APIs', 'FastAPI / ASP.NET Core', 'OpenAPI', 'Testing de endpoints'],
        },
        {
          title: 'Cybersecurity',
          description:
            'Aplico secure coding, controles OWASP y pensamiento defensivo desde el diseño.',
          points: ['OWASP Top 10', 'Input validation', 'JWT / RBAC', 'Security headers'],
        },
        {
          title: 'Cloud & DevSecOps',
          description:
            'Evoluciono hacia despliegues reproducibles, observabilidad y controles de seguridad en pipeline.',
          points: ['Docker', 'CI/CD', 'Hardening', 'Cloud security'],
        },
        {
          title: 'Automation',
          description:
            'Automatizo validaciones, reportes y tareas repetitivas para reducir errores operativos.',
          points: ['Python', 'PowerShell', 'Batch processing', 'Data quality'],
        },
      ],
    },
    architecture: {
      title: 'Arquitectura de Software',
      subtitle:
        'Mi enfoque privilegia sistemas entendibles, testeables y preparados para evolucionar sin deuda accidental.',
      items: [
        {
          title: 'Clean Architecture',
          description:
            'Separar dominio, casos de uso, infraestructura y transporte para reducir acoplamiento.',
          points: ['Boundaries claros', 'Reglas de negocio aisladas', 'Dependencias hacia adentro'],
        },
        {
          title: 'API Design',
          description:
            'Contratos HTTP consistentes, documentación OpenAPI y errores seguros orientados a operación.',
          points: ['REST', 'Versionado', 'DTOs', 'Error contracts'],
        },
        {
          title: 'Observability',
          description:
            'Logs y metricas que permitan entender fallos, comportamiento y salud del sistema.',
          points: ['Structured logging', 'Audit trails', 'Health checks', 'Metrics'],
        },
        {
          title: 'Delivery Quality',
          description:
            'Validaciones, pruebas y CI/CD como controles de calidad antes de desplegar.',
          points: ['Unit tests', 'Integration tests', 'Lint/typecheck', 'Release discipline'],
        },
      ],
    },
    security: {
      title: 'Seguridad Aplicada',
      subtitle:
        'Controles defensivos que uso como baseline para aplicaciones, APIs y automatizaciones.',
      items: [
        {
          title: 'Application Security',
          description:
            'Validación de entrada, sanitización, manejo seguro de errores y reducción de superficie.',
          points: ['Input validation', 'Secure errors', 'Rate limiting', 'CSRF awareness'],
        },
        {
          title: 'Identity & Access',
          description:
            'Autenticacion y autorizacion pensadas desde roles, scopes y menor privilegio.',
          points: ['JWT', 'RBAC', 'MFA readiness', 'Least privilege'],
        },
        {
          title: 'Security Operations',
          description:
            'Trazabilidad y monitoreo para que los eventos relevantes no queden invisibles.',
          points: ['Audit logging', 'Threat intelligence', 'Alerting', 'Incident context'],
        },
        {
          title: 'Hardening',
          description:
            'Headers, configuración segura y secretos fuera del cliente como controles básicos.',
          points: ['CSP', 'HSTS', 'Secrets handling', 'Dependency audit'],
        },
      ],
    },
    certifications: {
      title: 'Certificaciones',
      subtitle:
        'Formación verificable y áreas de aprendizaje alineadas a cloud, seguridad, soporte y análisis.',
      items: [
        {
          name: 'Google Cloud Cybersecurity',
          issuer: 'Google Cloud / INA',
          focus: 'Cloud security fundamentals, IAM, risk and defensive operations.',
          status: 'En progreso / verificable segun credencial',
          url: 'https://www.credly.com/',
        },
        {
          name: 'IBM Cybersecurity Analyst',
          issuer: 'IBM Skills Network',
          focus: 'SOC workflow, incident analysis, SIEM concepts and security operations.',
          status: 'Ruta de aprendizaje',
          url: 'https://www.credly.com/',
        },
        {
          name: 'Cisco Networking & Security',
          issuer: 'Cisco Networking Academy',
          focus: 'Networking, secure connectivity and operational troubleshooting.',
          status: 'Formacion tecnica',
          url: 'https://www.credly.com/',
        },
      ],
    },
    roadmap: {
      title: 'Roadmap Profesional',
      subtitle:
        'Ruta de crecimiento enfocada en cloud security, DevSecOps, arquitectura backend y operaciones de seguridad.',
      items: [
        {
          title: 'Cloud Security',
          description: 'Profundizar IAM, redes cloud, hardening, logging y posture management.',
          points: ['AWS', 'Azure', 'Google Cloud', 'CSPM fundamentals'],
        },
        {
          title: 'DevSecOps',
          description: 'Integrar controles de seguridad en CI/CD sin frenar entrega de software.',
          points: ['SAST', 'DAST', 'Dependency scanning', 'Secrets scanning'],
        },
        {
          title: 'Kubernetes & Containers',
          description:
            'Aprender despliegue, observabilidad y seguridad de workloads contenedorizados.',
          points: ['Docker', 'Kubernetes', 'Network policies', 'Runtime security'],
        },
        {
          title: 'Backend Architecture',
          description:
            'Fortalecer diseño de sistemas, DDD táctico, testing y escalabilidad de APIs.',
          points: ['DDD', 'Caching', 'Queues', 'Resilience patterns'],
        },
      ],
    },
  },
  en: {
    specialties: {
      title: 'Specialties',
      subtitle:
        'The areas where I concentrate my professional growth: robust backend, applied security, automation and maintainable architecture.',
      items: [
        {
          title: 'Backend Engineering',
          description:
            'I design API services with clear responsibilities, strong validation and explicit contracts.',
          points: ['REST APIs', 'FastAPI / ASP.NET Core', 'OpenAPI', 'Endpoint testing'],
        },
        {
          title: 'Cybersecurity',
          description: 'I apply secure coding, OWASP controls and defensive thinking from design.',
          points: ['OWASP Top 10', 'Input validation', 'JWT / RBAC', 'Security headers'],
        },
        {
          title: 'Cloud & DevSecOps',
          description:
            'I am growing toward reproducible deployments, observability and pipeline security controls.',
          points: ['Docker', 'CI/CD', 'Hardening', 'Cloud security'],
        },
        {
          title: 'Automation',
          description:
            'I automate validations, reporting and repetitive tasks to reduce operational errors.',
          points: ['Python', 'PowerShell', 'Batch processing', 'Data quality'],
        },
      ],
    },
    architecture: {
      title: 'Software Architecture',
      subtitle:
        'My approach favors understandable, testable systems that can evolve without accidental debt.',
      items: [
        {
          title: 'Clean Architecture',
          description:
            'Separate domain, use cases, infrastructure and transport to reduce coupling.',
          points: ['Clear boundaries', 'Isolated business rules', 'Inward dependencies'],
        },
        {
          title: 'API Design',
          description:
            'Consistent HTTP contracts, OpenAPI documentation and operationally safe errors.',
          points: ['REST', 'Versioning', 'DTOs', 'Error contracts'],
        },
        {
          title: 'Observability',
          description: 'Logs and metrics that explain failures, behavior and system health.',
          points: ['Structured logging', 'Audit trails', 'Health checks', 'Metrics'],
        },
        {
          title: 'Delivery Quality',
          description: 'Validation, tests and CI/CD as quality controls before deployment.',
          points: ['Unit tests', 'Integration tests', 'Lint/typecheck', 'Release discipline'],
        },
      ],
    },
    security: {
      title: 'Applied Security',
      subtitle: 'Defensive controls I use as a baseline for applications, APIs and automation.',
      items: [
        {
          title: 'Application Security',
          description: 'Input validation, sanitization, safe error handling and surface reduction.',
          points: ['Input validation', 'Secure errors', 'Rate limiting', 'CSRF awareness'],
        },
        {
          title: 'Identity & Access',
          description:
            'Authentication and authorization designed around roles, scopes and least privilege.',
          points: ['JWT', 'RBAC', 'MFA readiness', 'Least privilege'],
        },
        {
          title: 'Security Operations',
          description: 'Traceability and monitoring so relevant events do not stay invisible.',
          points: ['Audit logging', 'Threat intelligence', 'Alerting', 'Incident context'],
        },
        {
          title: 'Hardening',
          description:
            'Headers, secure configuration and secrets outside the client as baseline controls.',
          points: ['CSP', 'HSTS', 'Secrets handling', 'Dependency audit'],
        },
      ],
    },
    certifications: {
      title: 'Certifications',
      subtitle: 'Verifiable learning aligned with cloud, security, support and analysis.',
      items: [
        {
          name: 'Google Cloud Cybersecurity',
          issuer: 'Google Cloud / INA',
          focus: 'Cloud security fundamentals, IAM, risk and defensive operations.',
          status: 'In progress / verifiable by credential',
          url: 'https://www.credly.com/',
        },
        {
          name: 'IBM Cybersecurity Analyst',
          issuer: 'IBM Skills Network',
          focus: 'SOC workflow, incident analysis, SIEM concepts and security operations.',
          status: 'Learning path',
          url: 'https://www.credly.com/',
        },
        {
          name: 'Cisco Networking & Security',
          issuer: 'Cisco Networking Academy',
          focus: 'Networking, secure connectivity and operational troubleshooting.',
          status: 'Technical training',
          url: 'https://www.credly.com/',
        },
      ],
    },
    roadmap: {
      title: 'Professional Roadmap',
      subtitle:
        'Growth path focused on cloud security, DevSecOps, backend architecture and security operations.',
      items: [
        {
          title: 'Cloud Security',
          description: 'Deepen IAM, cloud networks, hardening, logging and posture management.',
          points: ['AWS', 'Azure', 'Google Cloud', 'CSPM fundamentals'],
        },
        {
          title: 'DevSecOps',
          description: 'Integrate security controls into CI/CD without slowing software delivery.',
          points: ['SAST', 'DAST', 'Dependency scanning', 'Secrets scanning'],
        },
        {
          title: 'Kubernetes & Containers',
          description: 'Learn deployment, observability and security for containerized workloads.',
          points: ['Docker', 'Kubernetes', 'Network policies', 'Runtime security'],
        },
        {
          title: 'Backend Architecture',
          description: 'Strengthen system design, tactical DDD, testing and API scalability.',
          points: ['DDD', 'Caching', 'Queues', 'Resilience patterns'],
        },
      ],
    },
  },
};
