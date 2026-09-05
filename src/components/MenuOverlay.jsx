import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logoBulb from '../assets/logo-bulb.png'

const links = [
  { label: 'Inicio', to: '/', desc: 'Resumen general', n: '01' },
  { label: 'Servicios', to: '/servicios', desc: 'Soluciones a medida', n: '02' },
  { label: 'Contacto', to: '/contacto', desc: 'Hablemos de tu proyecto', n: '03' },
]

export default function MenuOverlay({ onClose }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[80] bg-[#0F0F0F]/40 backdrop-blur-sm"
      />

      {/* Drawer derecha — debajo de la barra superior para que el header se vea */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="fixed top-[64px] right-0 bottom-0 z-[81] w-[88vw] max-w-[380px] sm:max-w-[400px] bg-[#0F0F0F] text-white flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.5)] border-l border-white/10"
      >
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#EC4899]" />
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
            <img src={logoBulb} alt="" className="absolute -right-12 -bottom-12 w-[340px] h-[340px] object-contain grayscale" />
          </div>

          {/* Nav */}
          <div className="flex-1 overflow-auto px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-[JetBrains_Mono] tracking-[0.14em] uppercase text-white/30">Navegación</p>
              <button onClick={onClose} className="w-8 h-8 rounded-full bg-white text-black grid place-items-center hover:bg-zinc-100 transition-colors" aria-label="Cerrar">✕</button>
            </div>
            <nav className="space-y-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    onClick={onClose}
                    className="group flex items-center gap-3 py-4 border-b border-white/[0.06] last:border-0"
                  >
                    <span className="font-[JetBrains_Mono] text-[10px] text-white/25 w-6">{l.n}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-[Space_Grotesk] font-medium text-[20px] leading-none tracking-[-0.02em] group-hover:translate-x-1 transition-transform">
                        {l.label}
                      </div>
                      <div className="text-[12px] text-white/35 group-hover:text-white/55 mt-0.5">{l.desc}</div>
                    </div>
                    <span className="w-8 h-8 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black text-white/40 flex items-center justify-center transition-colors">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 rounded-[12px] bg-white text-black p-5 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#EC4899]" />
              <p className="text-[10px] font-[JetBrains_Mono] tracking-[0.12em] uppercase text-black/40">Contacto</p>
              <a href={`mailto:${(import.meta.env.VITE_CONTACT_EMAIL || "silmtech716@gmail.com")}`} className="block text-[14px] font-medium mt-1 break-all">{(import.meta.env.VITE_CONTACT_EMAIL || "silmtech716@gmail.com")}</a>
              <a href={(import.meta.env.VITE_IG_URL || "https://www.instagram.com/silmtech/")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-[12px] font-medium text-[#0F0F0F] border border-[#E0DDD6] px-3 py-1.5 rounded-full hover:bg-[#F9F8F6] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="2" width="20" height="20" rx="6" /><circle cx="12" cy="12" r="5" /></svg>
                Instagram DM
              </a>
              <p className="text-[11px] text-black/50 mt-2">Respuesta en &lt;24h</p>
              <Link to="/contacto" onClick={onClose} className="mt-3 inline-flex bg-[#0F0F0F] text-white px-4 py-2 rounded-full text-[12px] font-medium">Iniciar proyecto →</Link>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-white/6 flex items-center justify-between text-[10px] font-[JetBrains_Mono] tracking-wide text-white/20">
            <span>© 2026 Silmtech</span>
            <span>Colombia • Remoto</span>
          </div>
        </motion.div>
      </>
  )
}
