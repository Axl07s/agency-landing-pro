import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building, Users, BarChart3, Star, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: '¿En qué se diferencian de una agencia tradicional?', a: 'No vendemos "likes" ni páginas web estáticas. Construimos sistemas de adquisición de clientes medibles (Embudos, CRM, automatizaciones) con un ROI claro.' },
    { q: '¿Cuánto tardan en implementar el sistema?', a: 'Nuestro tiempo promedio de despliegue es de 3 a 4 semanas, dependiendo de la complejidad de las integraciones necesarias para su negocio.' },
    { q: '¿Ofrecen garantía de resultados?', a: 'Sí. Si nuestro sistema no genera un incremento mínimo del 20% en prospectos calificados en los primeros 90 días, trabajamos sin costo hasta lograrlo.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            Nexus<span className="text-blue-600">Corp</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#servicios" className="hover:text-blue-600 transition">Servicios</a>
            <a href="#resultados" className="hover:text-blue-600 transition">Casos de Éxito</a>
            <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
          </div>
          <a href="#contacto" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors">
            Agendar Asesoría
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
              Agencia B2B Líder en Ecuador
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Escalamos tu negocio con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sistemas de Alta Conversión</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Dejamos atrás las webs que parecen folletos. Construimos motores de venta automatizados para captar, nutrir y cerrar clientes B2B.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-900/20">
                Analizar mi Empresa <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[2rem] transform rotate-3 scale-105"></div>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Corporate Agency" className="relative rounded-2xl shadow-2xl object-cover aspect-[4/3] border border-white/50" />
            
            {/* Floating Metric */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">+300%</p>
                <p className="text-xs text-slate-500">Incremento en Leads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features */}
      <section id="servicios" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Nuestra Metodología</h2>
            <p className="text-slate-600">No adivinamos. Implementamos un sistema probado de 3 fases para predecir el crecimiento de su empresa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Captación Predictiva', desc: 'Embudos de venta optimizados que atraen prospectos altamente calificados las 24 horas del día.' },
              { icon: Building, title: 'Sistemas Internos', desc: 'Digitalizamos la operación de su equipo con software a medida para gestionar y nutrir los leads.' },
              { icon: CheckCircle2, title: 'Cierre Automatizado', desc: 'Campañas de seguimiento automatizado que educan al prospecto hasta que esté listo para comprar.' }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="resultados" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Resultados Comprobados</h2>
            <p className="text-slate-400">Compañías que transformaron su proceso comercial con NexusCorp.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { author: 'Javier M.', role: 'CEO, Logística EC', quote: 'Desde que implementaron el embudo B2B, nuestro equipo de ventas no da abasto. Pasamos de buscar clientes a filtrarlos.' },
              { author: 'Andrea S.', role: 'Directora, Clínica Médica', quote: 'La automatización de citas nos ahorró decenas de horas semanales y redujo el ausentismo de pacientes a casi cero.' },
              { author: 'Roberto C.', role: 'Founder, TechLatam', quote: 'Profesionales absolutos. No solo diseñaron una página increíble, construyeron un activo que genera dinero real.' }
            ].map((t, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="flex text-yellow-400 mb-4">
                  <Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/>
                </div>
                <p className="text-slate-300 mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Contact */}
      <section id="contacto" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                    <ChevronDown className={w-5 h-5 text-blue-600 transition-transform } />
                  </button>
                  <div className={overflow-hidden transition-all duration-300 }>
                    <p className="p-6 pt-0 text-slate-600">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitar Análisis</h3>
            <p className="text-slate-600 mb-8">Agende una llamada estratégica gratuita con nuestro equipo.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                <input type="text" className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" placeholder="Juan Pérez" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" placeholder="Mi Empresa S.A." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                  <input type="tel" className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" placeholder="+593 99..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Presupuesto Mensual de Marketing</label>
                <select className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all bg-white">
                  <option>Menos de </option>
                  <option> - ,500</option>
                  <option>Más de ,500</option>
                </select>
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-600/30">
                Agendar Llamada
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-xl tracking-tight text-white mb-4">
              Nexus<span className="text-blue-500">Corp</span>
            </div>
            <p className="text-sm">Transformando empresas en Ecuador mediante tecnología y automatización.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> hola@nexuscorp.ec</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +593 2 123 4567</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Quito, Ecuador</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-white transition">Políticas de Privacidad</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
