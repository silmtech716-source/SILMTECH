import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Inicio', to: '/', desc: 'Resumen' },
  { label: 'Servicios', to: '/servicios', desc: 'Soluciones' },
  { label: 'Contacto', to: '/contacto', desc: 'Hablemos' },
]

export default function MenuOverlay({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[80] bg-[#0F0F0F] text-white flex flex-col"
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none grain" />
      
      <div className="flex-1 grid lg:grid-cols-[1.2fr_0.8fr] pt-[64px] min-h-0">
        <div className="px-6 md:px-10 lg:px-16 py-10 lg:py-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 overflow-auto">
          <p className="text-[11px] tracking-[0.18em] font-medium text-white/30 uppercase mb-10 flex items-center gap-3">
            <span className="w-8 h-px bg-white/20" /> Navegación
          </p>

          <nav className="space-y-1">
            {links.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.06 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={l.to}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-4 md:py-5 border-b border-white/[0.06] last:border-0 hover:border-white/15 transition-colors"
                >
                  <span className="font-mono text-[11px] text-white/25 group-hover:text-white/60 transition-colors">
                    0{i + 1}
                  </span>
                  <span className="font-[Space_Grotesk] font-semibold text-[34px] md:text-[46px] leading-none tracking-[-0.03em] group-hover:translate-x-1 transition-transform duration-300">
                    {l.label}
                  </span>
                  <span className="hidden md:inline text-[12px] tracking-wide text-white/30 group-hover:text-white/60 ml-2">
                    — {l.desc}
                  </span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        <div className="px-6 md:px-10 lg:px-12 py-10 flex flex-col justify-between gap-10 bg-white/[0.02]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[11px] tracking-[0.16em] font-medium text-white/30 uppercase mb-3">Contacto directo</p>
              <a href="mailto:silmtech716@gmail.com" className="block font-[Space_Grotesk] font-semibold text-[24px] leading-none hover:text-white/80 transition-colors">silmtech716@gmail.com</a>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-[11px] tracking-[0.14em] font-medium text-white/30 uppercase mb-2">Ubicación</p>
                <p className="text-[13px] leading-relaxed text-white/70">Ciudad, País<br /><span className="text-white/35">Remoto — Global</span></p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.14em] font-medium text-white/30 uppercase mb-2">Horario</p>
                <p className="text-[13px] leading-relaxed text-white/70">Lun — Vie 9:00–18:00<br /><span className="text-white/35">Respuesta en menos de24h</span></p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="rounded-2xl bg-white text-black p-6 md:p-7 relative overflow-hidden"
          >
            <p className="text-[11px] tracking-[0.14em] font-semibold uppercase text-black/40 mb-3">¿Listo para empezar?</p>
            <p className="font-[Space_Grotesk] font-semibold text-[22px] leading-[1.1] tracking-[-0.02em]">Cuéntanos tu idea<br />y te respondemos en menos de 24h.</p>
            <Link
              to="/contacto"
              onClick={onClose}
              className="mt-5 inline-flex items-center gap-2 bg-black text-white px-5 py-3 text-[13px] font-semibold rounded-full hover:bg-zinc-800 transition-colors"
            >
              Iniciar proyecto →
            </Link>
          </motion.div>

          <p className="text-[11px] tracking-wide text-white/20">© 2026 Silmtech.</p>
        </div>
      </div>
    </motion.div>
  )
}
