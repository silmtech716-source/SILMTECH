import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

// Edita este array para cambiar el texto que se mueve — ahora separado del hero, sin sobreposición
const MARQUEE_ITEMS = ['Diseño web', 'Software a medida', 'Instalación', 'Soporte', 'Automatización', 'UX/UI']

const SERVICES_PREVIEW = [
  {
    num: '01',
    title: 'Páginas Web',
    desc: 'Sitios que convierten. Landing, corporativo o e-commerce — rápidos y optimizados.',
    tags: ['UX/UI', 'Frontend', 'CMS'],
    img: 'https://images.unsplash.com/photo-1733412505442-36cfa59a4240?w=800&h=600&fit=crop&auto=format',
  },
  {
    num: '02',
    title: 'Software a Medida',
    desc: 'Aplicaciones a la medida de tus flujos. Del prototipo a producción.',
    tags: ['Apps Web', 'Mobile', 'APIs'],
    img: 'https://images.unsplash.com/photo-1767817099805-d79e31fb968c?w=800&h=600&fit=crop&auto=format',
  },
  {
    num: '03',
    title: 'Instalación & Mantenimiento',
    desc: 'Instalamos, configuramos y mantenemos. Soporte continuo para nunca parar.',
    tags: ['Soporte', 'Monitoreo', 'Seguridad'],
    img: 'https://images.unsplash.com/photo-1758876204286-ff72a71ef434?w=800&h=600&fit=crop&auto=format',
  },
]

const PROCESS = [
  {
    n: '01',
    t: 'Consulta',
    short: 'Entendemos tu contexto y objetivos.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format',
    desc: 'Sesión de descubrimiento de 45 min. Mapeamos tu proceso actual, dolores y métricas de éxito. Sin compromiso, con preguntas incómodas que ahorran meses.',
    bullets: ['Entrevista con stakeholders', 'Auditoría rápida de lo existente', 'Definición de objetivos y KPIs'],
  },
  {
    n: '02',
    t: 'Propuesta',
    short: 'Plan claro con tiempos y costos.',
    img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=800&h=600&fit=crop&auto=format',
    desc: 'Te entregamos roadmap técnico, stack, hitos semanales y presupuesto cerrado. Sabes exactamente qué construir, cuánto tarda y cuánto cuesta.',
    bullets: ['Arquitectura y stack', 'Cronograma por sprints', 'Presupuesto transparente'],
  },
  {
    n: '03',
    t: 'Desarrollo',
    short: 'Iteraciones cortas con demos.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&auto=format',
    desc: 'Construimos en ciclos de 1 semana. Ves el avance en vivo, acceso al repo y demos cada viernes. Feedback temprano evita retrabajo.',
    bullets: ['Sprints + demos semanales', 'Repositorio y preview en vivo', 'QA continuo'],
  },
  {
    n: '04',
    t: 'Entrega',
    short: 'Deploy y acompañamiento.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
    desc: 'Desplegamos en tu infra, capacitamos al equipo y dejamos monitoreo, backups y soporte. No te dejamos solo después del launch.',
    bullets: ['Deploy + formación', 'Monitoreo y backups', 'Soporte continuo'],
  },
]

function Reveal({ children, delay = 0, y = 18 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const [active, setActive] = useState(null)

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  return (
    <div className="bg-[#F9F8F6] text-[#0F0F0F] overflow-clip">
      {/* HERO */}
      <section ref={heroRef} className="relative bg-[#0F0F0F] text-white min-h-[92vh] pt-[64px] grid lg:grid-cols-[1.05fr_0.95fr] overflow-hidden">
        <motion.div className="px-6 md:px-10 lg:px-16 py-14 lg:py-20 flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 text-white/45 text-[11px] font-medium tracking-[0.16em] uppercase mb-8"
          >
            <img src="/logo-bulb.png" alt="" className="w-7 h-7 object-contain" />
            Estudio de tecnología
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-[Space_Grotesk] font-semibold leading-[0.9] tracking-[-0.04em] text-[54px] sm:text-[66px] lg:text-[78px] xl:text-[84px]"
          >
            Tecnología<br />
            que hace<br />
            <span className="font-[Instrument_Serif] italic font-normal tracking-[-0.03em]">crecer</span><br />
            tu negocio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/55 text-[15px] md:text-[16px] leading-relaxed max-w-[420px] mt-6"
          >
            Páginas web, software a medida e instalación. Diseño y desarrollo sin plantillas genéricas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-3 mt-9"
          >
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-100 px-7 py-3.5 text-[14px] font-semibold rounded-full transition-colors"
            >
              Solicitar propuesta
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/5 text-white px-7 py-3.5 text-[14px] font-medium rounded-full transition-colors"
            >
              Ver servicios
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative h-[420px] lg:h-auto overflow-hidden bg-[#1A1A1A]">
          <motion.img
            style={{ y: imgY, scale: 1.06 }}
            src="https://images.unsplash.com/photo-1783520093896-e8591d0bdcf9?w=900&h=900&fit=crop&auto=format"
            alt="Equipo"
            className="absolute inset-0 w-full h-[112%] object-cover opacity-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-transparent lg:via-[#0F0F0F]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/50 to-transparent" />
          <div className="absolute top-6 right-6 hidden lg:flex items-center gap-2 bg-white text-black px-3.5 py-2 rounded-full text-[11px] font-semibold tracking-wide shadow-xl">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Disponible para nuevos proyectos
          </div>
        </div>
      </section>

      {/* MARQUEE — letras que se mueven (editable arriba en MARQUEE_ITEMS) */}
      <div className="bg-[#EDEBE6] border-y border-[#E0DDD6] py-3.5 overflow-hidden">
        <div className="flex gap-8 animate-[marquee_28s_linear_infinite] w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={item + i} className="flex items-center gap-8 shrink-0">
              <span className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#0F0F0F]/55 whitespace-nowrap">{item}</span>
              <span className="w-1 h-1 rounded-full bg-[#0F0F0F]/15" />
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-33.33%) } }`}</style>
      </div>

      {/* SERVICIOS PREVIEW */}
      <section id="servicios" className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#73706B] mb-3">Servicios</p>
              <h2 className="font-[Space_Grotesk] font-semibold text-[36px] md:text-[48px] leading-none tracking-[-0.03em]">
                Lo que hacemos
              </h2>
            </div>
            <Link to="/servicios" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0F0F0F] border border-[#0F0F0F]/15 px-5 py-2.5 rounded-full hover:bg-[#0F0F0F] hover:text-white transition-colors">
              Explorar servicios →
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {SERVICES_PREVIEW.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.07}>
              <Link to="/servicios" className="group bg-white border border-[#E0DDD6] rounded-2xl overflow-hidden flex flex-col h-full hover:border-[#0F0F0F]/15 hover:shadow-sm transition-all">
                <div className="relative h-[210px] overflow-hidden bg-[#EDEBE6]">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <span className="absolute top-4 left-4 font-mono text-[11px] tracking-wide bg-white/90 backdrop-blur px-2.5 py-1 rounded-full font-medium">{s.num}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-[Space_Grotesk] font-semibold text-[19px] leading-tight tracking-[-0.02em]">{s.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[#73706B] mt-2 flex-1">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {s.tags.map(t => (
                      <span key={t} className="text-[11px] font-medium border border-[#E0DDD6] px-2.5 py-1 rounded-full text-[#73706B] bg-[#F9F8F6]">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-6 bg-[#0F0F0F] rounded-2xl px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <p className="text-[13px] text-white/60 text-center md:text-left">
              ¿No sabes qué necesitas? <span className="text-white font-medium">Te orientamos sin compromiso.</span>
            </p>
            <Link to="/contacto" className="shrink-0 bg-white text-black px-6 py-2.5 rounded-full text-[13px] font-semibold hover:bg-zinc-100 transition-colors">
              Hablar con un experto
            </Link>
          </div>
        </Reveal>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="bg-[#0F0F0F] text-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-4 mb-2">
              <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-white/30">Proceso</p>
              <span className="hidden md:block text-[11px] text-white/30">Haz click en cada paso →</span>
            </div>
            <h2 className="font-[Space_Grotesk] font-semibold text-[36px] md:text-[48px] leading-none tracking-[-0.03em] mb-10">Así trabajamos</h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <button
                  onClick={() => setActive(step)}
                  className="w-full text-left border border-white/10 rounded-2xl p-7 h-full bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/15 transition-colors group"
                >
                  <div className="font-mono text-[11px] text-white/25">{step.n}</div>
                  <div className="w-6 h-px bg-white/15 my-4 group-hover:w-8 transition-all" />
                  <div className="font-[Space_Grotesk] font-medium text-[16px] tracking-[-0.01em] flex items-center gap-2">
                    {step.t} <span className="opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all text-[12px]">↗</span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-white/45 mt-2">{step.short}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal proceso */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div onClick={() => setActive(null)} className="absolute inset-0 bg-[#0F0F0F]/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#F9F8F6] rounded-2xl overflow-hidden max-w-[920px] w-full max-h-[90vh] flex flex-col md:grid md:grid-cols-[1.1fr_0.9fr] shadow-2xl"
            >
              <div className="relative h-[220px] md:h-auto bg-[#EDEBE6] overflow-hidden">
                <img src={active.img} alt={active.t} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-mono font-medium">{active.n} — {active.t}</div>
              </div>
              <div className="p-6 md:p-8 overflow-auto">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-[Space_Grotesk] font-semibold text-[26px] leading-none tracking-[-0.02em]">{active.t}</h3>
                  <button onClick={() => setActive(null)} className="shrink-0 w-8 h-8 rounded-full bg-[#0F0F0F] text-white grid place-items-center hover:bg-black transition-colors">✕</button>
                </div>
                <p className="text-[13px] leading-relaxed text-[#73706B] mt-4">{active.desc}</p>
                <ul className="mt-5 space-y-2">
                  {active.bullets.map(b => (
                    <li key={b} className="flex gap-2 text-[13px]"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0F0F0F] shrink-0" /> {b}</li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => setActive(null)} className="px-5 py-2.5 rounded-full border border-[#0F0F0F]/15 text-[13px] font-medium hover:bg-white transition-colors">Cerrar</button>
                  <Link to="/contacto" onClick={() => setActive(null)} className="px-5 py-2.5 rounded-full bg-[#0F0F0F] text-white text-[13px] font-semibold hover:bg-black transition-colors">Empezar en {active.t.toLowerCase()} →</Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NOSOTROS teaser */}
      <section id="nosotros" className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#73706B] mb-3">Nosotros</p>
          <h2 className="font-[Space_Grotesk] font-semibold text-[36px] md:text-[46px] leading-[0.95] tracking-[-0.03em]">
            Tecnología<br />con criterio<span className="font-[Instrument_Serif] italic font-normal">.</span>
          </h2>
          <p className="text-[14px] leading-relaxed text-[#73706B] mt-5 max-w-[460px]">
            Directo sin intermediarios, sin humo. Hablas con quien construye.
          </p>
          <Link to="/servicios" className="inline-flex items-center gap-2 mt-7 text-[13px] font-medium border border-[#0F0F0F]/12 px-5 py-2.5 rounded-full hover:bg-[#0F0F0F] hover:text-white transition-colors">
            Conocer servicios →
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-2xl overflow-hidden bg-[#EDEBE6] aspect-[4/3.2]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop&auto=format"
              alt="Equipo Silmtech"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4 flex items-center gap-3 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#0F0F0F] grid place-items-center text-white text-[11px] font-semibold">ST</div>
              <div>
                <p className="text-[12px] font-medium leading-tight">Trabajo directo con el equipo técnico.</p>
                <p className="text-[11px] text-[#73706B]">Sin capas, sin demoras.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
