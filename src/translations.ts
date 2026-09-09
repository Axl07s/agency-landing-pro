export type Language = 'en' | 'es';

export interface TranslationContent {
  nav: {
    simulator: string;
    architecture: string;
    cases: string;
    audit: string;
    auditCta: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleSub: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: {
      pipelineValue: string;
      pipelineLabel: string;
      timeValue: string;
      timeLabel: string;
      closeRateValue: string;
      closeRateLabel: string;
      filteringValue: string;
      filteringLabel: string;
    };
  };
  simulator: {
    badge: string;
    title: string;
    description: string;
    slider1Label: string;
    slider1Starter: string;
    slider1Scale: string;
    slider2Label: string;
    slider2HighTicket: string;
    slider3Label: string;
    slider3Conservative: string;
    slider3Average: string;
    slider3HighPerf: string;
    outputBadge: string;
    revenueLabel: string;
    perMonth: string;
    sqlLabel: string;
    perMonthUnit: string;
    dealsLabel: string;
    dealsUnit: string;
    annualPipelineLabel: string;
    cta: string;
    disclaimer: string;
  };
  architecture: {
    badge: string;
    title: string;
    description: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  cases: {
    badge: string;
    title: string;
    description: string;
    stackLabel: string;
    metricsLabel: string;
    disclaimer: string;
    items: {
      client: string;
      sector: string;
      metricLift: string;
      summary: string;
      techStack: string[];
      results: { label: string; value: string }[];
    }[];
  };
  audit: {
    badge: string;
    title: string;
    subtitle: string;
    step1Tab: string;
    step2Tab: string;
    step3Tab: string;
    step1Question: string;
    step1Models: string[];
    step2Question: string;
    step2Bottlenecks: string[];
    step3CompanyLabel: string;
    step3CompanyPlaceholder: string;
    step3EmailLabel: string;
    step3EmailPlaceholder: string;
    btnNext: string;
    btnPrev: string;
    btnSubmit: string;
    completedBadge: string;
    scoreTitle: string;
    reportGeneratedFor: string;
    currentStateLabel: string;
    bottleneckPrefix: string;
    recommendation: string;
    reportSentTo: string;
    priorityLabel: string;
    btnRestart: string;
  };
  faq: {
    badge: string;
    title: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    location: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      simulator: 'ROI Simulator',
      architecture: 'Architecture',
      cases: 'Case Studies',
      audit: 'Audit',
      auditCta: 'B2B Growth Audit',
    },
    hero: {
      badge: 'Growth Infrastructure • Enterprise B2B',
      titleMain: 'Acquisition Engineering',
      titleSub: 'for Agencies & B2B SaaS.',
      description: 'Eliminate manual prospecting. We engineer automated outbound infrastructure, algorithmic qualification, and predictable enterprise deal closing.',
      ctaPrimary: 'Calculate Live ROI',
      ctaSecondary: 'Start Growth Audit (3 Min)',
      metrics: {
        pipelineValue: '$18.4M+',
        pipelineLabel: 'Pipeline Generated',
        timeValue: '14 Days',
        timeLabel: 'Time-to-Production',
        closeRateValue: '28.4%',
        closeRateLabel: 'Avg Win Rate',
        filteringValue: 'Zero Waste',
        filteringLabel: 'Algorithmic Filtering',
      },
    },
    simulator: {
      badge: 'B2B PROFITABILITY SIMULATOR',
      title: 'Calculate Your Expected Return.',
      description: 'Adjust your commercial parameters to project qualified pipeline volume and realistic new revenue.',
      slider1Label: 'Monthly Outbound / Ad Budget',
      slider1Starter: '$1,000 USD (Starter)',
      slider1Scale: '$30,000 USD (Scale)',
      slider2Label: 'Average Contract Value (ACV / LTV)',
      slider2HighTicket: '$40,000 USD (Enterprise)',
      slider3Label: 'Sales Team Win Rate',
      slider3Conservative: '5% (Conservative)',
      slider3Average: '20% (B2B Avg)',
      slider3HighPerf: '40% (Top Performer)',
      outputBadge: 'Return Multiplier',
      revenueLabel: 'Projected New Monthly Revenue:',
      perMonth: 'USD/mo',
      sqlLabel: 'Qualified SQLs',
      perMonthUnit: '/ mo',
      dealsLabel: 'Closed Deals',
      dealsUnit: 'Accounts',
      annualPipelineLabel: 'Annual Pipeline Generated:',
      cta: 'Deploy This Infrastructure',
      disclaimer: '*Calibrated using realistic enterprise B2B benchmarks (CAC proportional to ACV, bounded at 2.4x - 8.0x ROI).',
    },
    architecture: {
      badge: 'ENGINE ARCHITECTURE',
      title: 'From Cold Clicks to Signed Contracts.',
      description: 'A decoupled acquisition engine running 24/7 without relying on manual rep follow-ups.',
      steps: [
        {
          title: '1. Enrichment & Algorithmic Scoring',
          desc: 'Every prospect interaction is enriched with corporate firmographics (revenue, employee headcount, technographic stack) before being routed as an opportunity.',
        },
        {
          title: '2. Hyper-Personalized Nurturing',
          desc: 'Dynamic multichannel sequences via email and WhatsApp Business API serving tailored case studies according to the prospect’s exact vertical.',
        },
        {
          title: '3. Calendar Routing & Enterprise Closing',
          desc: 'Only prospects matching 100% of your Ideal Customer Profile (ICP) gain access to your sales team’s calendar, eliminating unqualified meetings.',
        },
      ],
    },
    cases: {
      badge: 'REFERENCE ARCHITECTURES',
      title: 'Deployment & Impact Models.',
      description: 'Technical implementation blueprints and projected performance based on verified B2B industry benchmarks.',
      stackLabel: 'Integrated Tech Stack:',
      metricsLabel: 'Simulated Benchmark Metrics:',
      disclaimer: '*Simulated and illustrative results based on architectural modeling and industry benchmarks.',
      items: [
        {
          client: 'KronoPay Enterprise',
          sector: 'Fintech B2B Infrastructure',
          metricLift: '+340% Pipeline Velocity',
          summary: 'Replaced manual outbound with a predictive lead scoring engine featuring real-time enrichment via Apollo, Clearbit, and custom webhooks.',
          techStack: ['HubSpot Enterprise', 'n8n Automations', 'Clay Data Enrich', 'Custom Next.js Portal'],
          results: [
            { label: 'Quarterly Closed Accounts', value: '42 Accounts' },
            { label: 'CAC Reduction', value: '-38.5%' },
            { label: 'Avg Contract Value', value: '$28,000 USD' },
          ],
        },
        {
          client: 'LogisTrack LatAm',
          sector: 'Fleet & Logistics SaaS',
          metricLift: '$1.4M ARR Impact',
          summary: 'Built an interactive route pricing funnel with automated client qualification under 90 seconds, directly integrated into Stripe billing.',
          techStack: ['React 19', 'PostgreSQL', 'Stripe Invoicing', 'Segment Telemetry'],
          results: [
            { label: 'Demo Conversion Rate', value: '31.2%' },
            { label: 'Lead-to-Opportunity', value: '4.8x' },
            { label: 'Average Sales Cycle', value: '14 Days' },
          ],
        },
        {
          client: 'Vanguard CyberAudit',
          sector: 'Corporate Cybersecurity',
          metricLift: '99.4% SLA Compliance',
          summary: 'Deployed an ABM (Account-Based Marketing) acquisition pipeline targeting enterprise CISOs and CTOs across the region.',
          techStack: ['LinkedIn Sales API', 'FastAPI Proxy', 'Supabase Auth', 'Retool Dashboard'],
          results: [
            { label: 'C-Level Meetings / Month', value: '28 Confirmed' },
            { label: 'Open Pipeline Value', value: '$850,000 USD' },
            { label: 'Return On Investment', value: '7.4x ROI' },
          ],
        },
      ],
    },
    audit: {
      badge: 'TECHNICAL EVALUATION',
      title: 'Digital Acquisition Audit.',
      subtitle: 'Complete 3 questions to receive your commercial maturity diagnosis.',
      step1Tab: '1. Model',
      step2Tab: '2. Friction',
      step3Tab: '3. Contact',
      step1Question: 'What is your primary business model?',
      step1Models: ['B2B SaaS', 'Agency / Consulting', 'Corporate Services Enterprise'],
      step2Question: 'Where is your primary sales bottleneck?',
      step2Bottlenecks: ['Lack of Qualified SQL Volume', 'CRM Follow-up Leakage', 'Unqualified Budget Leads'],
      step3CompanyLabel: 'Company Name',
      step3CompanyPlaceholder: 'e.g. Acme Technologies',
      step3EmailLabel: 'Corporate Email',
      step3EmailPlaceholder: 'director@acme.com',
      btnNext: 'Next Step',
      btnPrev: '← Back',
      btnSubmit: 'Generate Live Diagnosis',
      completedBadge: 'Audit Completed',
      scoreTitle: 'Diagnosis Score: 68 / 100',
      reportGeneratedFor: 'Audit generated for',
      currentStateLabel: 'CURRENT BOTTLENECK:',
      bottleneckPrefix: 'Constraint at',
      recommendation: 'We recommend decoupling acquisition with an interactive qualification funnel. This prevents unqualified leads from draining your sales team’s schedule.',
      reportSentTo: 'Report sent to:',
      priorityLabel: 'High Priority',
      btnRestart: 'Restart audit',
    },
    faq: {
      badge: 'COMMERCIAL CLARITY',
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'How do you guarantee return on investment?',
          a: 'We operate under strict contractual SLA frameworks. If we do not reach the agreed threshold of qualified sales opportunities in the first 90 days, we continue operating the acquisition infrastructure at zero service fee until reached.',
        },
        {
          q: 'How is NexusCorp different from a traditional marketing agency?',
          a: 'Traditional agencies sell vanity impressions or static templates. We are revenue engineers: we develop the core technical pipeline—lead capture apps, real-time data enrichment, and automated workflows—that directly impact financial EBITDA.',
        },
        {
          q: 'How fast can this infrastructure be launched?',
          a: 'Our sprint methodology allows deploying the foundation architecture and live automated outbound funnels in 14 business days, connecting your CRM, database, and tracking stacks.',
        },
        {
          q: 'What level of involvement does my internal team require?',
          a: 'We only require 2 initial strategic alignment sessions to define your Ideal Customer Profile (ICP) and commercial logic. Once calibrated, the engine runs autonomously and books verified discovery calls directly onto your reps’ calendars.',
        },
      ],
    },
    footer: {
      tagline: 'Enterprise B2B Acquisition & Automated Closing Infrastructure.',
      location: 'Quito • Guayaquil • Global Remote',
      rights: '© 2026 NexusCorp Systems. All rights reserved.',
    },
  },
  es: {
    nav: {
      simulator: 'Simulador ROI',
      architecture: 'Arquitectura',
      cases: 'Casos de Éxito',
      audit: 'Auditoría',
      auditCta: 'Auditoría B2B',
    },
    hero: {
      badge: 'Infraestructura de Crecimiento • Enterprise B2B',
      titleMain: 'Ingeniería de Adquisición',
      titleSub: 'para Agencias & SaaS B2B.',
      description: 'Eliminamos la prospección artesanal. Construimos sistemas automatizados de captación, calificación algorítmica y cierre predecible de contratos de alto valor.',
      ctaPrimary: 'Calcular ROI en Vivo',
      ctaSecondary: 'Iniciar Diagnóstico (3 Min)',
      metrics: {
        pipelineValue: '$18.4M+',
        pipelineLabel: 'Pipeline Generado',
        timeValue: '14 Días',
        timeLabel: 'Tiempo de Despliegue',
        closeRateValue: '28.4%',
        closeRateLabel: 'Tasa Promedio Cierre',
        filteringValue: 'Cero Fricción',
        filteringLabel: 'Filtrado Algorítmico',
      },
    },
    simulator: {
      badge: 'SIMULADOR DE RENTABILIDAD B2B',
      title: 'Calcule su Retorno de Inversión.',
      description: 'Ajuste los parámetros comerciales de su empresa para proyectar el volumen de pipeline y cierres mensuales garantizados.',
      slider1Label: 'Presupuesto Mensual en Captación',
      slider1Starter: '$1,000 USD (Starter)',
      slider1Scale: '$30,000 USD (Scale)',
      slider2Label: 'Ticket Promedio de Venta (LTV)',
      slider2HighTicket: '$40,000 USD (High-Ticket)',
      slider3Label: 'Tasa de Cierre de su Equipo',
      slider3Conservative: '5% (Conservador)',
      slider3Average: '20% (Promedio B2B)',
      slider3HighPerf: '40% (Alto Rendimiento)',
      outputBadge: 'Multiplicador',
      revenueLabel: 'Nueva Facturación Mensual Proyectada:',
      perMonth: 'USD/mes',
      sqlLabel: 'SQLs Calificados',
      perMonthUnit: '/ mes',
      dealsLabel: 'Cierres Nuevos',
      dealsUnit: 'Cuentas',
      annualPipelineLabel: 'Pipeline Anual Acumulado:',
      cta: 'Desplegar Este Sistema',
      disclaimer: '*Modelo calibrado con benchmarks B2B reales (CAC proporcional a LTV y retornos acotados de 2.4x - 8.0x).',
    },
    architecture: {
      badge: 'ARQUITECTURA DEL MOTOR',
      title: 'De Clics a Contratos Firmados.',
      description: 'Un pipeline desacoplado que opera 24/7 sin depender de la memoria de sus vendedores.',
      steps: [
        {
          title: '1. Enriquecimiento & Score Algorítmico',
          desc: 'Cada visitante que interactúa con el portal es enriquecido con datos corporativos (facturación, empleados, tecnologías que usa) antes de calificarlo como oportunidad.',
        },
        {
          title: '2. Nutrición Hiper-Personalizada',
          desc: 'Secuencias de seguimiento dinámicas vía email y WhatsApp API que responden con casos de estudio específicos según el nicho e industria del prospecto.',
        },
        {
          title: '3. Enrutamiento & Cierre en Calendario',
          desc: 'Solo los prospectos que cumplen 100% con su ICP (Perfil de Cliente Ideal) reciben acceso a la agenda del equipo comercial, eliminando reuniones no calificadas.',
        },
      ],
    },
    cases: {
      badge: 'ARQUITECTURAS DE REFERENCIA',
      title: 'Modelos de Impacto & Despliegue.',
      description: 'Escenarios de implementación técnica y resultados proyectados según benchmarks del sector B2B.',
      stackLabel: 'Stack Tecnológico Integrado:',
      metricsLabel: 'Métricas Simuladas de Referencia:',
      disclaimer: '*Resultados simulados e ilustrativos basados en modelado de arquitectura y proyecciones de industria.',
      items: [
        {
          client: 'KronoPay Enterprise',
          sector: 'Fintech B2B Infrastructure',
          metricLift: '+340% Pipeline Velocity',
          summary: 'Reemplazo de prospección manual por un motor de outbound predictivo con enriquecimiento en tiempo real vía Clearbit y Apollo.',
          techStack: ['HubSpot Enterprise', 'n8n Automations', 'Clay Data Enrich', 'Custom Next.js Portal'],
          results: [
            { label: 'Deals Cerrados Trimestre', value: '42 Cuentas' },
            { label: 'Reducción de CAC', value: '-38.5%' },
            { label: 'Valor Promedio Contrato', value: '$28,000 USD' },
          ],
        },
        {
          client: 'LogisTrack LatAm',
          sector: 'SaaS Logístico & Flotas',
          metricLift: '$1.4M ARR Generado',
          summary: 'Construcción de un embudo interactivo de cotización de rutas con calificación algorítmica de prospectos en menos de 90 segundos.',
          techStack: ['React 19', 'PostgreSQL', 'Stripe Invoicing', 'Segment Telemetry'],
          results: [
            { label: 'Tasa de Conversión Demo', value: '31.2%' },
            { label: 'Lead-to-Opportunity', value: '4.8x' },
            { label: 'Tiempo de Cierre Promedio', value: '14 Días' },
          ],
        },
        {
          client: 'Vanguard CyberAudit',
          sector: 'Ciberseguridad Corporativa',
          metricLift: '99.4% SLA Cumplido',
          summary: 'Despliegue de un sistema de captación ABM (Account-Based Marketing) dirigido a Directores de Tecnología y CISOs en Ecuador y Colombia.',
          techStack: ['LinkedIn Sales API', 'FastAPI Proxy', 'Supabase Auth', 'Retool Dashboard'],
          results: [
            { label: 'Reuniones C-Level / Mes', value: '28 Confirmadas' },
            { label: 'Pipeline Abierto', value: '$850,000 USD' },
            { label: 'Retorno sobre Inversión', value: '7.4x ROI' },
          ],
        },
      ],
    },
    audit: {
      badge: 'EVALUACIÓN TÉCNICA',
      title: 'Auditoría de Adquisición Digital.',
      subtitle: 'Complete 3 preguntas para recibir su diagnóstico de madurez comercial.',
      step1Tab: '1. Modelo',
      step2Tab: '2. Fricción',
      step3Tab: '3. Datos',
      step1Question: '¿Cuál es su modelo de negocio predominante?',
      step1Models: ['SaaS B2B', 'Agencia / Consultoría', 'Empresa de Servicios Corporativos'],
      step2Question: '¿Dónde se encuentra su principal cuello de botella?',
      step2Bottlenecks: ['Falta de Volumen de SQLs', 'Fugas en Seguimiento CRM', 'Leads sin Presupuesto Real'],
      step3CompanyLabel: 'Nombre de su Empresa',
      step3CompanyPlaceholder: 'Ej. Acme Technologies',
      step3EmailLabel: 'Correo Corporativo',
      step3EmailPlaceholder: 'director@acme.com',
      btnNext: 'Siguiente Paso',
      btnPrev: '← Anterior',
      btnSubmit: 'Generar Diagnóstico en Vivo',
      completedBadge: 'Auditoría Completada',
      scoreTitle: 'Diagnóstico: Score 68 / 100',
      reportGeneratedFor: 'Informe generado para',
      currentStateLabel: 'ESTADO ACTUAL:',
      bottleneckPrefix: 'Cuello en',
      recommendation: 'Recomendamos desacoplar la captación mediante un embudo interactivo con scoring algorítmico. Esto filtrará prospectos sin presupuesto antes de asignar tiempo a su equipo de ventas.',
      reportSentTo: 'Informe enviado a:',
      priorityLabel: 'Prioridad Alta',
      btnRestart: 'Reiniciar auditoría',
    },
    faq: {
      badge: 'CLARIDAD COMERCIAL',
      title: 'Preguntas Frecuentes',
      items: [
        {
          q: '¿Cómo garantizan el retorno sobre la inversión?',
          a: 'Trabajamos bajo un modelo estructurado con SLAs contractuales. Si no alcanzamos el umbral acordado de oportunidades comerciales calificadas en los primeros 90 días, continuamos operando la infraestructura sin costo hasta conseguirlo.',
        },
        {
          q: '¿Qué diferencia a NexusCorp de una agencia tradicional?',
          a: 'Las agencias tradicionales venden métricas vanidosas (clics, impresiones o webs estáticas). Nosotros somos ingenieros de ingresos: construimos la infraestructura técnica de adquisición (software de captación, enriquecimiento de datos y automatización de embudos) que impacta directamente en el balance financiero.',
        },
        {
          q: '¿Cuánto tiempo toma tener el sistema en producción?',
          a: 'Nuestra metodología de sprint permite desplegar la arquitectura base y las primeras campañas automatizadas en 14 días hábiles, integrando CRM, bases de datos y herramientas de seguimiento.',
        },
        {
          q: '¿Qué nivel de involucramiento requiere mi equipo?',
          a: 'Solo requerimos 2 sesiones estratégicas iniciales para definir el perfil de cliente ideal (ICP) y las reglas de negocio. Una vez calibrado, el sistema opera de forma automatizada y entrega reuniones agendadas directamente en el calendario de sus ejecutivos.',
        },
      ],
    },
    footer: {
      tagline: 'Infraestructura B2B de Adquisición y Cierre Automatizado.',
      location: 'Quito • Guayaquil • Remoto Global',
      rights: '© 2026 NexusCorp Systems. Todos los derechos reservados.',
    },
  },
};
