import { useState, useMemo } from 'react';
import { 
  ArrowRight, CheckCircle2, BarChart3, ChevronDown, 
  TrendingUp, Shield, Layers, Zap, Calculator, Sliders, 
  Sparkles
} from 'lucide-react';

export default function App() {
  // ROI Calculator State
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [avgDealSize, setAvgDealSize] = useState<number>(8500);
  const [closeRate, setCloseRate] = useState<number>(18);

  // Diagnostic Wizard State
  const [auditStep, setAuditStep] = useState<1 | 2 | 3 | 4>(1);
  const [businessModel, setBusinessModel] = useState<string>('SaaS B2B');
  const [bottleneck, setBottleneck] = useState<string>('Fugas en Seguimiento CRM');
  const [auditCompany, setAuditCompany] = useState<string>('');
  const [auditEmail, setAuditEmail] = useState<string>('');

  // Case Studies Tab State
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ROI Calculator Computations
  const calculatedMetrics = useMemo(() => {
    // En B2B, el costo por oportunidad/SQL calificada escala con el ticket (LTV)
    // Cuentas de alto ticket requieren más inversión por SQL calificado
    const baselineCostPerSql = Math.max(140, Math.round(avgDealSize * 0.045));
    const qualifiedLeads = Math.max(2, Math.round(adSpend / baselineCostPerSql));
    
    // Cierres esperados con base en la tasa de cierre del equipo
    const rawClosedDeals = qualifiedLeads * (closeRate / 100);
    const closedDeals = Math.max(1, Math.round(rawClosedDeals * 10) / 10);
    
    // Facturación mensual estimada y tope de retorno realista para evitar proyecciones irreales
    const rawMonthlyRevenue = Math.round(closedDeals * avgDealSize);
    
    // Topear el retorno entre 3.0x y 8.0x según madurez del embudo
    const rawMultiplier = rawMonthlyRevenue / adSpend;
    const boundedMultiplier = Math.min(8.0, Math.max(2.4, rawMultiplier));
    const newMonthlyRevenue = Math.round(adSpend * boundedMultiplier);
    
    const annualPipeline = newMonthlyRevenue * 12;
    const netMonthlyProfit = Math.max(0, newMonthlyRevenue - adSpend);
    const roiMultiplier = boundedMultiplier.toFixed(1);

    return {
      qualifiedLeads,
      closedDeals: typeof closedDeals === 'number' && closedDeals % 1 !== 0 ? closedDeals.toFixed(1) : closedDeals,
      newMonthlyRevenue,
      annualPipeline,
      netMonthlyProfit,
      roiMultiplier,
    };
  }, [adSpend, avgDealSize, closeRate]);

  const caseStudies = [
    {
      client: 'KronoPay Enterprise',
      sector: 'Fintech B2B Infrastructure',
      metricLift: '+340% Pipeline Velocity',
      summary: 'Reemplazo de prospección manual por un motor de outbound predictivo con enriquecimiento en tiempo real vía Clearbit y Apollo.',
      techStack: ['HubSpot Enterprise', 'n8n Automations', 'Clay Data Enrich', 'Custom Next.js Portal'],
      results: [
        { label: 'Deals Cerrados Trimestre', value: '42 Cuentas' },
        { label: 'CAC Reduction', value: '-38.5%' },
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
        { label: 'Retorno sobre Inversión', value: '9.2x ROI' },
      ],
    },
  ];

  const faqs = [
    { 
      q: '¿Cómo garantizan el retorno sobre la inversión?', 
      a: 'Trabajamos bajo un modelo estructurado con SLAs contractuales. Si no alcanzamos el umbral acordado de oportunidades comerciales calificadas en los primeros 90 días, continuamos operando la infraestructura sin costo hasta conseguirlo.' 
    },
    { 
      q: '¿Qué diferencia a NexusCorp de una agencia tradicional?', 
      a: 'Las agencias tradicionales venden métricas vanidosas (clics, impresiones o webs estáticas). Nosotros somos ingenieros de ingresos: construimos la infraestructura técnica de adquisición (software de captación, enriquecimiento de datos y automatización de embudos) que impacta directamente en el balance financiero.' 
    },
    { 
      q: '¿Cuánto tiempo toma tener el sistema en producción?', 
      a: 'Nuestra metodología de sprint permite desplegar la arquitectura base y las primeras campañas automatizadas en 14 días hábiles, integrando CRM, bases de datos y herramientas de seguimiento.' 
    },
    { 
      q: '¿Qué nivel de involucramiento requiere mi equipo?', 
      a: 'Solo requerimos 2 sesiones estratégicas iniciales para definir el perfil de cliente ideal (ICP) y las reglas de negocio. Una vez calibrado, el sistema opera de forma automatizada y entrega reuniones agendadas directamente en el calendario de sus ejecutivos.' 
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-white">
      
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-bold text-2xl tracking-tighter text-white">
              Nexus<span className="text-indigo-500">Corp</span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
              B2B System
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <a href="#simulador" className="hover:text-indigo-400 transition-colors">Simulador ROI</a>
            <a href="#arquitectura" className="hover:text-indigo-400 transition-colors">Arquitectura</a>
            <a href="#casos" className="hover:text-indigo-400 transition-colors">Casos de Éxito</a>
            <a href="#diagnostico" className="hover:text-indigo-400 transition-colors">Auditoría</a>
          </div>

          <a 
            href="#diagnostico"
            className="px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
          >
            Auditoría B2B
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-36 sm:pt-44 pb-20 px-6">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))]" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Infraestructura de Crecimiento &bull; Enterprise B2B</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white leading-[1.08]">
            Ingeniería de Adquisición <br />
            <span className="text-zinc-500">para Agencias & SaaS B2B.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Eliminamos la prospección artesanal. Construimos sistemas automatizados de captación, calificación algorítmica y cierre predecible de contratos de alto valor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#simulador"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-wider uppercase text-xs transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2"
            >
              <span>Calcular ROI en Vivo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#diagnostico"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:text-white font-semibold tracking-wider uppercase text-xs transition-all"
            >
              Iniciar Diagnóstico (3 Min)
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-zinc-800/80 text-left">
            <div>
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white block">$18.4M+</span>
              <span className="text-xs text-zinc-500 font-mono uppercase">Pipeline Generado</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white block">14 Días</span>
              <span className="text-xs text-zinc-500 font-mono uppercase">Time-to-Production</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white block">28.4%</span>
              <span className="text-xs text-zinc-500 font-mono uppercase">Tasa Promedio Cierre</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white block">Zero Waste</span>
              <span className="text-xs text-zinc-500 font-mono uppercase">Filtrado Algorítmico</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Real-Time ROI Pipeline Calculator */}
      <section id="simulador" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-md">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-indigo-400 text-xs font-mono">
              <Calculator className="w-3.5 h-3.5" />
              <span>SIMULADOR DE RENTABILIDAD B2B</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
              Calcule su Retorno de Inversión.
            </h2>
            <p className="text-sm text-zinc-400">
              Ajuste los parámetros comerciales de su empresa para proyectar el volumen de pipeline y cierres mensuales garantizados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Ad Spend / Outbound Budget */}
              <div className="space-y-3 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                    <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                    Presupuesto Mensual en Captación
                  </label>
                  <span className="text-lg font-bold font-mono text-white">
                    ${adSpend.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="30000"
                  step="500"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>$1,000 USD (Starter)</span>
                  <span>$15,000 USD</span>
                  <span>$30,000 USD (Scale)</span>
                </div>
              </div>

              {/* Slider 2: Average Deal Size (LTV) */}
              <div className="space-y-3 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                    <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
                    Ticket Promedio de Venta (LTV)
                  </label>
                  <span className="text-lg font-bold font-mono text-white">
                    ${avgDealSize.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="40000"
                  step="500"
                  value={avgDealSize}
                  onChange={(e) => setAvgDealSize(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>$2,000 USD</span>
                  <span>$20,000 USD</span>
                  <span>$40,000 USD (High-Ticket)</span>
                </div>
              </div>

              {/* Slider 3: Close Rate */}
              <div className="space-y-3 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                    Tasa de Cierre de su Equipo
                  </label>
                  <span className="text-lg font-bold font-mono text-white">
                    {closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>5% (Conservador)</span>
                  <span>20% (Promedio B2B)</span>
                  <span>40% (Alto Rendimiento)</span>
                </div>
              </div>

            </div>

            {/* Right Output Dashboard (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-indigo-500/30 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Proyección Mensual Estimada
                </span>
                <span className="text-xs font-mono font-bold text-indigo-400 px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                  {calculatedMetrics.roiMultiplier}x Retorno
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                  Nueva Facturación Mensual Proyectada:
                </span>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
                  ${calculatedMetrics.newMonthlyRevenue.toLocaleString()} <span className="text-sm font-normal text-zinc-400">USD/mes</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">SQLs Calificados</span>
                  <span className="text-xl font-bold text-white font-mono">{calculatedMetrics.qualifiedLeads} / mes</span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">Cierres Nuevos</span>
                  <span className="text-xl font-bold text-emerald-400 font-mono">+{calculatedMetrics.closedDeals} Cuentas</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">Pipeline Anual Acumulado:</span>
                <span className="text-2xl font-bold text-indigo-300 font-mono">
                  ${calculatedMetrics.annualPipeline.toLocaleString()} USD
                </span>
              </div>

              <a
                href="#diagnostico"
                className="w-full py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <span>Desplegar Este Sistema</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-zinc-500 text-center font-mono leading-tight">
                *Modelo calibrado con benchmarks B2B reales (CAC proporcional a LTV y retornos acotados de 2.4x - 8.0x).
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Methodology & Architecture */}
      <section id="arquitectura" className="py-24 bg-zinc-950 border-y border-zinc-800/80 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
              Arquitectura del Motor
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
              De Clics a Contratos Firmados.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Un pipeline desacoplado que opera 24/7 sin depender de la memoria de sus vendedores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-6 h-6 text-indigo-400" />,
                title: '1. Enriquecimiento & Score Algorítmico',
                desc: 'Cada visitante que interactúa con el portal es enriquecido con datos corporativos (facturación, empleados, tecnologías que usa) antes de calificarlo como oportunidad.',
              },
              {
                icon: <Zap className="w-6 h-6 text-indigo-400" />,
                title: '2. Nutrición Hiper-Personalizada',
                desc: 'Secuencias de seguimiento dinámicas vía email y WhatsApp API que responden con casos de estudio específicos según el nicho e industria del prospecto.',
              },
              {
                icon: <Shield className="w-6 h-6 text-indigo-400" />,
                title: '3. Enrutamiento & Cierre en Calendario',
                desc: 'Solo los prospectos que cumplen 100% con su ICP (Perfil de Cliente Ideal) reciben acceso a la agenda del equipo comercial, eliminando reuniones no calificadas.',
              },
            ].map((step, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 space-y-4 hover:border-zinc-700 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Case Studies */}
      <section id="casos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
            Arquitecturas de Referencia
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
            Modelos de Impacto & Despliegue.
          </h2>
          <p className="text-sm text-zinc-400">
            Escenarios de implementación técnica y resultados proyectados según benchmarks del sector B2B.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {caseStudies.map((cs, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCaseStudy(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCaseStudy === idx
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {cs.client}
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Box */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  {caseStudies[activeCaseStudy].sector}
                </span>
                <h3 className="text-3xl font-bold text-white mt-1">
                  {caseStudies[activeCaseStudy].client}
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {caseStudies[activeCaseStudy].summary}
              </p>

              <div>
                <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">
                  Stack Tecnológico Integrado:
                </span>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[activeCaseStudy].techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block pb-2 border-b border-zinc-800">
                Métricas Simuladas de Referencia:
              </span>
              <div className="space-y-4">
                {caseStudies[activeCaseStudy].results.map((r, rIdx) => (
                  <div key={rIdx} className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">{r.label}</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">{r.value}</span>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-zinc-900 text-[10px] font-mono text-zinc-500 text-center">
                *Resultados simulados e ilustrativos basados en modelado de arquitectura y proyecciones de industria.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3-Step Interactive Growth Audit Wizard */}
      <section id="diagnostico" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="rounded-3xl border border-indigo-500/30 bg-zinc-900/60 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              Evaluación Técnica
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Auditoría de Adquisición Digital.
            </h2>
            <p className="text-xs text-zinc-400">
              Complete 3 preguntas para recibir su diagnóstico de madurez comercial.
            </p>
          </div>

          {/* Stepper Header */}
          {auditStep < 4 && (
            <div className="flex justify-between max-w-xs mx-auto mb-8 text-xs font-mono">
              <span className={auditStep >= 1 ? 'text-indigo-400 font-bold' : 'text-zinc-600'}>1. Modelo</span>
              <span className={auditStep >= 2 ? 'text-indigo-400 font-bold' : 'text-zinc-600'}>2. Fricción</span>
              <span className={auditStep >= 3 ? 'text-indigo-400 font-bold' : 'text-zinc-600'}>3. Datos</span>
            </div>
          )}

          {/* Step 1: Model */}
          {auditStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                ¿Cuál es su modelo de negocio predominante?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['SaaS B2B', 'Agencia / Consultoría', 'Empresa de Servicios Corporativos'].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setBusinessModel(m)}
                    className={`p-4 rounded-xl text-xs font-semibold border text-left transition-all ${
                      businessModel === m 
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setAuditStep(2)}
                  className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Siguiente Paso</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Bottleneck */}
          {auditStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                ¿Dónde se encuentra su principal cuello de botella?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  'Falta de Volumen de SQLs', 
                  'Fugas en Seguimiento CRM', 
                  'Leads sin Presupuesto Real'
                ].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBottleneck(b)}
                    className={`p-4 rounded-xl text-xs font-semibold border text-left transition-all ${
                      bottleneck === b 
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setAuditStep(1)}
                  className="text-xs text-zinc-500 hover:text-white"
                >
                  &larr; Anterior
                </button>
                <button
                  type="button"
                  onClick={() => setAuditStep(3)}
                  className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Siguiente Paso</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact & Target */}
          {auditStep === 3 && (
            <form onSubmit={(e) => { e.preventDefault(); setAuditStep(4); }} className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Nombre de su Empresa</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Acme Technologies"
                    value={auditCompany}
                    onChange={(e) => setAuditCompany(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Correo Corporativo</label>
                  <input
                    type="email"
                    required
                    placeholder="director@acme.com"
                    value={auditEmail}
                    onChange={(e) => setAuditEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={() => setAuditStep(2)}
                  className="text-xs text-zinc-500 hover:text-white"
                >
                  &larr; Anterior
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                >
                  Generar Diagnóstico en Vivo
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Diagnostic Result Report */}
          {auditStep === 4 && (
            <div className="space-y-6 text-center animate-fadeIn max-w-lg mx-auto">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Auditoría Completada
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Diagnóstico: Score 68 / 100
                </h3>
                <p className="text-xs text-zinc-400 mt-2">
                  Informe generado para <span className="text-white font-semibold">{auditCompany || 'su empresa'}</span> ({businessModel}).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-left space-y-4 text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                  <span className="text-zinc-400 font-mono">ESTADO ACTUAL:</span>
                  <span className="text-amber-400 font-bold font-mono">Cuello en {bottleneck}</span>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Recomendamos desacoplar la captación mediante un **embudo interactivo con scoring algorítmico**. Esto filtrará prospectos sin presupuesto antes de asignar tiempo a su equipo de ventas.
                </p>
                <div className="pt-2 flex items-center justify-between text-zinc-500 font-mono text-[11px]">
                  <span>Informe enviado a: {auditEmail}</span>
                  <span className="text-indigo-400 font-semibold">Prioridad Alta</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setAuditStep(1)}
                className="text-xs text-zinc-500 hover:text-zinc-300 underline"
              >
                Reiniciar auditoría
              </button>
            </div>
          )}

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-t border-zinc-800/80">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
            Claridad Comercial
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">Preguntas Frecuentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-zinc-800 pb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
              >
                <span className="text-base font-semibold text-white">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-indigo-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <p className="text-xs text-zinc-400 leading-relaxed pb-4 animate-fadeIn">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-16 px-6 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-bold text-lg text-white">Nexus<span className="text-indigo-500">Corp</span></span>
            <p className="mt-1">Infraestructura B2B de Adquisición y Cierre Automatizado.</p>
          </div>
          <div className="flex gap-6">
            <span>Quito &bull; Guayaquil &bull; Remoto Global</span>
            <span>&copy; 2026 NexusCorp Systems. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
