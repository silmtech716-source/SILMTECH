import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import logoBulb from '../assets/logo-bulb.png'

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
    bullets: ['Entrevista con stakeholders', 'Auditoría rápida de lo existente', 'Definición de objetivos'],
  },
  {
    n: '02',
    t: 'Propuesta',
    short: 'Plan claro con tiempos y costos.',
    img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=800&h=600&fit=crop&auto=format',
    desc: 'Te entregamos Mockups, la planeacion y el presupuesto cerrado. Sabes exactamente qué construir, cuánto tarda y cuánto cuesta.',
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

function Reveal({ children, delay = 0, y = 14 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const [active, setActive] = useState(null)
  const [faqOpen, setFaqOpen] = useState(0)

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  useEffect(() => {
    document.title = 'Silmtech — Tecnología que hace crecer tu negocio'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Páginas web, software a medida e instalación. Respuesta en 24h. Colombia remoto global.')
    // OG imagen RRSS
    let og = document.querySelector('meta[property="og:image"]')
    if (!og) { og = document.createElement('meta'); og.setAttribute('property', 'og:image'); document.head.appendChild(og) }
    og.setAttribute('content', 'https://silmtech716-source.github.io/SILMTECH/logo-bulb.png')
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle) }
    ogTitle.setAttribute('content', 'Silmtech — Tecnología con criterio')
  }, [])

  return (
    <div className="bg-[#F9F8F6] text-[#0F0F0F] overflow-clip">
      {/* HERO — Stripe Bold: gradient bulb + código */}
      <section ref={heroRef} className="relative bg-[#0F0F0F] text-white min-h-[88vh] pt-[64px] grid lg:grid-cols-[1.05fr_0.95fr] overflow-hidden">
        {/* Gradient Stripe — bulb azul->púrpura */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute -top-32 -left-20 w-[900px] h-[520px] bg-gradient-to-br from-[#0EA5E9] via-[#6366F1] to-[#8B5CF6] opacity-[0.18] blur-[80px] rounded-[40%]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[420px] bg-gradient-to-r from-[#06B6D4]/10 via-[#7C3AED]/10 to-[#EC4899]/10 -skew-y-2" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        </div>

        <div className="px-6 md:px-10 lg:px-14 py-12 lg:py-16 flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-white/40 text-[11px] font-[JetBrains_Mono] tracking-[0.14em] uppercase mb-7"
          >
            <img src={logoBulb} alt="" className="w-5 h-5 object-contain" />
            Estudio de tecnología — Colombia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-[Space_Grotesk] font-medium leading-[0.88] tracking-[-0.045em] text-[48px] sm:text-[60px] lg:text-[68px] xl:text-[74px]"
          >
            Tecnología<br />
            que hace<br />
            <span className="font-[Instrument_Serif] italic font-normal tracking-[-0.02em] bg-gradient-to-r from-[#7DD3FC] via-[#A78BFA] to-[#F0ABFC] bg-clip-text text-transparent">crecer</span><br />
            tu negocio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-white/55 text-[13.5px] leading-[1.7] max-w-[400px] mt-5 font-[Inter]"
          >
            Páginas web, software a medida e instalación. Infraestructura que escala — sin plantillas genéricas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="flex flex-wrap gap-2.5 mt-7"
          >
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 px-7 py-3 text-[13px] font-medium rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-colors">
              Solicitar propuesta
            </Link>
            <Link to="/servicios" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/25 hover:bg-white/[0.06] text-white px-6 py-3 text-[13px] font-medium rounded-full transition-colors">
              Ver servicios
            </Link>
          </motion.div>

          {/* Logos Stripe-style */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="hidden lg:flex items-center gap-5 mt-10 pt-6 border-t border-white/6">
            <span className="text-[10px] font-[JetBrains_Mono] tracking-[0.12em] uppercase text-white/25">Stack</span>
            <div className="flex items-center gap-4 text-[12px] font-medium text-white/45">
              <span>Next.js</span><span className="w-px h-3 bg-white/10" /><span>CMS</span><span className="w-px h-3 bg-white/10" /><span>Vercel</span>
            </div>
          </motion.div>
        </div>

        {/* Derecha — ventana código Stripe */}
        <div className="relative h-[440px] lg:h-auto overflow-hidden bg-transparent border-t lg:border-t-0 lg:border-l border-white/6 flex items-center justify-center p-6 lg:p-10">
          <motion.img style={{ y: imgY }} src="https://images.unsplash.com/photo-1783520093896-e8591d0bdcf9?w=900&h=900&fit=crop&auto=format" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] grayscale" />
          
          <motion.div initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="relative w-full max-w-[480px] bg-[#151515]/90 backdrop-blur border border-white/10 rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06)]">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/6 bg-gradient-to-r from-white/[0.03] to-transparent">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" /><span className="w-3 h-3 rounded-full bg-[#FFBD2E]" /><span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 text-[11px] font-[JetBrains_Mono] text-white/30">silmtech.config.ts</span>
              <span className="ml-auto text-[10px] font-[JetBrains_Mono] text-emerald-400/80">● live</span>
            </div>
            <pre className="p-5 text-[12.5px] leading-[1.7] font-[JetBrains_Mono] overflow-x-auto">
              <code className="text-white/85">
                <span className="text-white/25">// proyecto: tu-empresa.com</span>{'\n'}
                <span className="text-[#9A96FF]">export</span> <span className="text-white/60">default</span> {'{'} {'\n'}
                {'  '}<span className="text-[#7DD3FC]">site</span>: <span className="text-[#86EFAC]">"tu-empresa.com"</span>,{'\n'}
                {'  '}<span className="text-[#7DD3FC]">stack</span>: [<span className="text-[#86EFAC]">"Next.js"</span>, <span className="text-[#86EFAC]">"CMS"</span>],{'\n'}
                {'  '}<span className="text-[#7DD3FC]">deploy</span>: <span className="text-[#86EFAC]">"vercel"</span>,{'\n'}
                {'  '}<span className="text-[#7DD3FC]">estado</span>: <span className="text-[#FBBF24]">"en producción"</span> {'\n'}
                {'}'}
              </code>
            </pre>
            <div className="px-4 py-3 bg-[#0F0F0F] border-t border-white/6 flex items-center justify-between">
              <span className="text-[11px] font-[JetBrains_Mono] text-emerald-400">✓ Build passed • 1.2s</span>
              <span className="text-[11px] font-[JetBrains_Mono] text-white/25">→ silmtech</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MARQUEE — Framer Motion para Firefox + móvil fluido */}
      <div className="bg-[#EDEBE6]/60 border-y border-[#E0DDD6] py-2 sm:py-2.5 overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 w-max"
          style={{ willChange: 'transform' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={item + i} className="flex items-center gap-4 sm:gap-6 shrink-0">
              <span className="text-[10px] sm:text-[11px] font-[JetBrains_Mono] tracking-[0.12em] uppercase text-[#0F0F0F]/40 whitespace-nowrap">{item}</span>
              <span className="w-px h-3 bg-[#0F0F0F]/8 hidden sm:block" />
              <span className="w-1 h-1 rounded-full bg-[#0F0F0F]/15 sm:hidden" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* SERVICIOS — asimétrico editorial (Mercury) */}
      <section id="servicios" className="max-w-[1280px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-[11px] font-[JetBrains_Mono] tracking-[0.14em] uppercase text-[#73706B] mb-2">Servicios</p>
              <h2 className="font-[Space_Grotesk] font-medium text-[30px] md:text-[40px] leading-none tracking-[-0.03em]">Lo que hacemos</h2>
            </div>
            <Link to="/servicios" className="hidden md:inline-flex text-[12px] font-medium text-[#0F0F0F]/60 hover:text-[#0F0F0F] underline underline-offset-4 decoration-[#E0DDD6]">Ver todo →</Link>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1.35fr_0.9fr] gap-4">
          {/* Destacado — Stripe accent */}
          <Reveal>
            <Link to="/servicios" className="group relative bg-white border border-[#E0DDD6] rounded-[12px] overflow-hidden flex flex-col lg:flex-row h-full min-h-[380px] hover:border-[#0F0F0F]/10 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#EC4899] opacity-80" />
              <div className="lg:w-[52%] relative h-[200px] lg:h-auto overflow-hidden bg-[#EDEBE6]">
                <img src={SERVICES_PREVIEW[0].img} alt={`Imagen de ${SERVICES_PREVIEW[0].title} - servicio de Silmtech`} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 grayscale group-hover:grayscale-0" loading="lazy" />
                <span className="absolute top-3 left-3 text-[10px] font-[JetBrains_Mono] tracking-wide bg-white px-2 py-1 rounded-full shadow-sm">01 — Destacado</span>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="font-[Space_Grotesk] font-medium text-[22px] leading-tight tracking-[-0.02em]">{SERVICES_PREVIEW[0].title}</h3>
                <p className="text-[13px] leading-relaxed text-[#73706B] mt-2">{SERVICES_PREVIEW[0].desc}</p>
                <div className="flex gap-2 mt-4 text-[11px] font-[JetBrains_Mono] text-[#0F0F0F]/45">
                  {SERVICES_PREVIEW[0].tags.map(t => <span key={t} className="after:content-['·'] last:after:content-[''] after:ml-2">{t}</span>)}
                </div>
                <span className="mt-auto pt-6 text-[12px] font-medium inline-flex items-center gap-1.5">Explorar <span className="group-hover:translate-x-0.5 transition-transform">→</span></span>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-4">
            {SERVICES_PREVIEW.slice(1).map((s, i) => (
              <Reveal key={s.num} delay={i * 0.06}>
                <Link to="/servicios" className="group bg-white border border-[#E0DDD6] rounded-[12px] p-5 flex gap-4 hover:border-[#0F0F0F]/10 transition-colors">
                  <img src={s.img} alt={`Imagen de ${s.title} - servicio Silmtech`} className="w-[96px] h-[96px] rounded-[8px] object-cover shrink-0 grayscale group-hover:grayscale-0 transition-all" loading="lazy" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-[JetBrains_Mono] text-[#9A9690]">{s.num}</div>
                    <h3 className="font-[Space_Grotesk] font-medium text-[15px] leading-tight mt-0.5">{s.title}</h3>
                    <p className="text-[12px] leading-relaxed text-[#73706B] mt-1 line-clamp-2">{s.desc}</p>
                    <div className="text-[11px] font-[JetBrains_Mono] text-[#0F0F0F]/35 mt-2">{s.tags.join(' · ')}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-4 bg-[#0F0F0F] rounded-[12px] px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-white border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4]/10 via-[#7C3AED]/10 to-transparent opacity-60" />
            <p className="relative text-[12px] text-white/60">¿No sabes qué necesitas? <span className="text-white font-medium">Te orientamos sin compromiso.</span></p>
            <Link to="/contacto" className="relative bg-white text-black px-5 py-2 rounded-full text-[12px] font-medium hover:bg-zinc-100 transition-colors">Hablar con un experto →</Link>
          </div>
        </Reveal>
      </section>

      {/* NOSOTROS — Mercury calm */}
      <section id="nosotros" className="max-w-[1280px] mx-auto px-6 md:px-10 py-14 md:py-20 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
        <Reveal>
          <p className="text-[11px] font-[JetBrains_Mono] tracking-[0.14em] uppercase text-[#73706B]">Nosotros</p>
          <h2 className="font-[Space_Grotesk] font-medium text-[30px] md:text-[40px] leading-[0.95] tracking-[-0.03em] mt-2">Tecnología<br />con criterio<span className="font-[Instrument_Serif] italic font-normal">.</span></h2>
          <p className="text-[13px] leading-relaxed text-[#73706B] mt-4 max-w-[420px]">
            Sin intermediarios. Hablas directo con quien diseña y codea. Inspirado en el cuidado de Mercury y la precisión de Linear.
          </p>
          <Link to="/servicios" className="inline-flex mt-6 text-[12px] font-medium border border-[#0F0F0F]/10 px-4 py-2 rounded-full hover:bg-[#0F0F0F] hover:text-white transition-colors">Conocer servicios →</Link>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative rounded-[12px] overflow-hidden bg-[#EDEBE6] aspect-[4/3.1]">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop&auto=format" alt="Foto de equipo de Silmtech trabajando en oficina" className="w-full h-full object-cover grayscale-[0.2]" loading="lazy" />
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur rounded-[10px] px-3 py-3 flex items-center gap-3">
              <img src={logoBulb} alt="" className="w-7 h-7 object-contain" />
              <div>
                <p className="text-[11px] font-medium leading-tight">Trabajo directo, sin capas.</p>
                <p className="text-[11px] text-[#73706B] font-[JetBrains_Mono]">silmtech716@gmail.com</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROCESO — premium editorial */}
      <section id="proceso" className="relative bg-[#0A0A0A] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 30% 20%, #7C3AED 0%, transparent 45%), radial-gradient(circle at 80% 80%, #06B6D4 0%, transparent 40%)` }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center mb-10">
              <p className="text-[11px] font-[JetBrains_Mono] tracking-[0.16em] uppercase text-white/30">Proceso</p>
              <h2 className="font-[Space_Grotesk] font-medium text-[32px] md:text-[46px] leading-none tracking-[-0.03em] mt-3">Así trabajamos</h2>
              <p className="text-[13px] leading-relaxed text-white/45 mt-3">Claro, sin sorpresas. Haz click en cada paso para ver el detalle.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <button onClick={() => setActive(step)} className="group relative text-left bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 hover:border-white/15 rounded-[16px] overflow-hidden transition-all flex flex-col h-full">
                  <div className="relative h-[150px] overflow-hidden">
                    <img src={step.img} alt={step.t} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-500 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                    <span className="absolute top-3 left-3 bg-white text-black px-2 py-1 rounded-full text-[10px] font-[JetBrains_Mono] font-medium">{step.n}</span>
                    <span className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white text-black grid place-items-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all text-[11px]">↗</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-[Space_Grotesk] font-medium text-[16px]">{step.t}</h3>
                    <p className="text-[12.5px] leading-relaxed text-white/45 mt-1.5 flex-1">{step.short}</p>
                    <span className="mt-4 inline-flex text-[11px] font-[JetBrains_Mono] tracking-wide text-white/25 group-hover:text-white/60">Ver detalle →</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div onClick={() => setActive(null)} className="absolute inset-0 bg-[#0F0F0F]/60 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 8, opacity: 0 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} className="relative bg-[#F9F8F6] rounded-[14px] overflow-hidden max-w-[880px] w-full max-h-[90vh] flex flex-col md:grid md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative h-[200px] md:h-auto bg-[#EDEBE6]">
                <img src={active.img} alt={active.t} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-full text-[10px] font-[JetBrains_Mono]">{active.n} — {active.t}</span>
              </div>
              <div className="p-6 md:p-7 overflow-auto">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-[Space_Grotesk] font-medium text-[22px] leading-none">{active.t}</h3>
                  <button onClick={() => setActive(null)} className="w-7 h-7 rounded-full bg-[#0F0F0F] text-white grid place-items-center text-[12px]">✕</button>
                </div>
                <p className="text-[12.5px] leading-relaxed text-[#73706B] mt-3">{active.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {active.bullets.map(b => <li key={b} className="flex gap-2 text-[12.5px]"><span className="mt-2 w-1 h-1 rounded-full bg-[#0F0F0F] shrink-0" />{b}</li>)}
                </ul>
                <div className="mt-5 flex gap-2">
                  <button onClick={() => setActive(null)} className="px-4 py-2 rounded-full border border-[#0F0F0F]/10 text-[12px]">Cerrar</button>
                  <Link to="/contacto" onClick={() => setActive(null)} className="px-4 py-2 rounded-full bg-[#0F0F0F] text-white text-[12px] font-medium">Empezar →</Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQS — de últimas */}
      <section id="faqs" className="max-w-[800px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <Reveal>
          <p className="text-[11px] font-[JetBrains_Mono] tracking-[0.14em] uppercase text-[#73706B] text-center">FAQs</p>
          <h2 className="font-[Space_Grotesk] font-medium text-[28px] md:text-[36px] leading-none tracking-[-0.03em] text-center mt-2">Preguntas frecuentes</h2>
        </Reveal>
        <div className="mt-8 border-t border-[#E0DDD6]">
          {[
            { q: '¿Cuánto tarda un proyecto?', a: 'Depende del tipo de proyecto. te damos cronograma cerrado en la propuesta.' },
            { q: '¿Cómo es el compromiso de tiempo de respuesta?', a: 'Respondemos en menos de 24 horas hábiles y te damos acceso a repo y previews semanales. Soporte continuo tras entrega.' },
            { q: '¿Hacen migas de pan y SEO técnico?', a: 'Sí. Cada página lleva títulos únicos, metadescripciones, imagen RRSS (og:image), textos ALT y robots.txt optimizado.' },
            { q: '¿Dónde están ubicados?', a: 'Colombia, remoto global. Ver mapa en Contacto. Reuniones por Meet y entrega online.' },
          ].map((f, i) => (
            <div key={f.q} className="border-b border-[#E0DDD6]">
              <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} className="w-full text-left py-4 flex items-center justify-between gap-4">
                <span className="font-medium text-[13px]">{f.q}</span>
                <span className={`w-6 h-6 rounded-full border border-[#E0DDD6] grid place-items-center text-[11px] shrink-0 transition-transform ${faqOpen === i ? 'rotate-45 bg-[#0F0F0F] text-white border-[#0F0F0F]' : ''}`}>+</span>
              </button>
              {faqOpen === i && <p className="text-[12.5px] leading-relaxed text-[#73706B] pb-4 pr-8">{f.a} <Link to="/contacto" className="underline">Contáctanos</Link></p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
