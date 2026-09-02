import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    num: '01',
    title: 'Páginas Web',
    desc: 'Landing, corporativo o e-commerce. Diseño a medida, desarrollo rápido y SEO técnico.',
    bullets: ['Diseño UX/UI', 'Next.js / CMS', 'E-commerce', 'SEO'],
    img: 'https://images.unsplash.com/photo-1733412505442-36cfa59a4240?w=800&h=600&fit=crop&auto=format',
  },
  {
    num: '02',
    title: 'Software a Medida',
    desc: 'Aplicaciones web, móviles y de escritorio. Automatizamos y conectamos tus sistemas.',
    bullets: ['Apps Web & Mobile', 'APIs', 'Automatización', 'Dashboards'],
    img: 'https://images.unsplash.com/photo-1767817099805-d79e31fb968c?w=800&h=600&fit=crop&auto=format',
  },
  {
    num: '03',
    title: 'Instalación & Mantenimiento',
    desc: 'Infraestructura segura, monitoreo y soporte continuo. Tú te enfocas en tu negocio.',
    bullets: ['Infra & Deploy', 'Monitoreo', 'Seguridad', 'Soporte'],
    img: 'https://images.unsplash.com/photo-1758876204286-ff72a71ef434?w=800&h=600&fit=crop&auto=format',
  },
]

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Services() {
  return (
    <div className="bg-[#F9F8F6] text-[#0F0F0F]">
      <div className="bg-[#0F0F0F] text-white pt-[88px] pb-12 md:pb-16 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-[11px] tracking-[0.16em] font-medium text-white/35 uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-white/15" /> Servicios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-[Space_Grotesk] font-semibold text-[44px] md:text-[60px] leading-[0.9] tracking-[-0.03em]"
          >
            Soluciones<br /><span className="font-[Instrument_Serif] italic font-normal">que escalan</span> contigo.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-white/50 max-w-[520px] text-[14px] leading-relaxed mt-5">
            Tres servicios núcleo + uno en camino. Sin plantillas genéricas.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 -mt-6">
        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.06}>
              <div className="bg-white border border-[#E0DDD6] rounded-2xl overflow-hidden flex flex-col h-full hover:border-[#0F0F0F]/12 hover:shadow-sm transition-all">
                <div className="relative h-[240px] overflow-hidden bg-[#EDEBE6]">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 font-mono text-[11px] bg-white/90 backdrop-blur px-2.5 py-1 rounded-full font-medium">{s.num}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-[Space_Grotesk] font-semibold text-[20px] leading-tight tracking-[-0.02em]">{s.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[#73706B] mt-2">{s.desc}</p>
                  <ul className="flex flex-wrap gap-1.5 mt-4">
                    {s.bullets.map(b => (
                      <li key={b} className="text-[11px] font-medium border border-[#E0DDD6] px-2.5 py-1 rounded-full text-[#73706B] bg-[#F9F8F6]">{b}</li>
                    ))}
                  </ul>
                  <Link to="/contacto" className="mt-5 inline-flex items-center justify-center gap-2 bg-[#0F0F0F] text-white px-5 py-3 rounded-full text-[13px] font-semibold hover:bg-black transition-colors">
                    Cotizar {s.title}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.18}>
            <div className="bg-[#0F0F0F] text-white rounded-2xl flex flex-col h-full relative overflow-hidden min-h-[420px] border border-white/10">
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur border border-white/10 text-white px-3 py-1 rounded-full text-[11px] font-medium tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" /> Próximamente
              </div>
              <div className="p-6 pt-12 flex flex-col flex-1">
                <span className="font-mono text-[11px] text-white/25">04</span>
                <h3 className="font-[Space_Grotesk] font-semibold text-[20px] leading-tight tracking-[-0.02em] mt-2">Inteligencia<br />Aplicada</h3>
                <p className="text-[13px] leading-relaxed text-white/55 mt-3">Automatización con IA y analítica avanzada. En preparación.</p>
                <div className="mt-auto pt-6">
                  <Link to="/contacto" className="inline-flex w-full justify-center bg-white text-black py-3 rounded-full text-[13px] font-semibold hover:bg-zinc-100 transition-colors">
                    Quiero early access
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8">
        <Reveal>
          <div className="bg-white border border-[#E0DDD6] rounded-2xl p-6 md:p-7 text-center">
            <p className="text-[13px] text-[#73706B]">¿No sabes por dónde empezar? <Link to="/contacto" className="font-semibold text-[#0F0F0F] underline underline-offset-4">Agenda una consulta sin compromiso.</Link></p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
