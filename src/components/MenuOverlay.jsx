import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logoBulb from '../assets/logo-bulb.png'

const links = [
  { label: 'Inicio', to: '/', desc: 'Resumen general' },
  { label: 'Servicios', to: '/servicios', desc: 'Soluciones a medida' },
  { label: 'Contacto', to: '/contacto', desc: 'Hablemos de tu proyecto' },
]

export default function MenuOverlay({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[80] bg-[#0F0F0F] text-white flex flex-col"
    >
      {/* Gradient Stripe top line */}
      <div className="absolute top-[64px] inset-x-0 h-[1.5px] bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#EC4899] opacity-90 z-10" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#0EA5E9]/12 via-[#6366F1]/10 to-[#8B5CF6]/12 blur-[60px] rounded-full" />
        <img src={logoBulb} alt="" className="absolute -right-16 -bottom-16 w-[380px] h-[380px] object-contain opacity-[0.04] grayscale pointer-events-none hidden lg:block" />
      </div>

      <div className="flex-1 overflow-auto flex flex-col pt-[64px]">
        <div className="flex-1 grid lg:grid-cols-[1.3fr_0.9fr] min-h-0">
          {/* Izquierda */}
          <div className="px-5 sm:px-8 lg:px-12 xl:px-16 py-7 lg:py-10 flex flex-col">
            <p className="text-[10px] font-[JetBrains_Mono] tracking-[0.16em] uppercase text-white/30 mb-5 flex items-center gap-2.5">
              <span className="w-6 h-px bg-gradient-to-r from-[#06B6D4] to-[#7C3AED]" /> Navegación
            </p>

            <nav>
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ x: -8, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={l.to}
                    onClick={onClose}
                    className="group relative flex items-center gap-4 py-4 sm:py-5 border-b border-white/[0.06] last:border-0 hover:border-white/10 -mx-2 px-2 lg:mx-0 lg:px-0"
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-0 group-hover:h-8 bg-gradient-to-b from-[#06B6D4] to-[#7C3AED] transition-all duration-300 hidden lg:block -ml-4" />
                    <span className="font-[JetBrains_Mono] text-[10px] tracking-wide text-white/25 group-hover:text-white/60 w-7 shrink-0">
                      0{i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-[Space_Grotesk] font-medium text-[30px] sm:text-[38px] lg:text-[48px] leading-none tracking-[-0.035em] group-hover:translate-x-1 transition-transform duration-300">
                        <span className="group-hover:bg-gradient-to-r group-hover:from-[#7DD3FC] group-hover:to-[#A78BFA] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {l.label}
                        </span>
                      </div>
                      <div className="text-[12px] sm:text-[13px] text-white/35 group-hover:text-white/60 mt-1">{l.desc}</div>
                    </div>
                    <span className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black sm:bg-white/10 sm:text-white sm:group-hover:bg-white sm:group-hover:text-black border border-white/10 flex items-center justify-center transition-all">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-7 lg:hidden">
              <Link to="/contacto" onClick={onClose} className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#7C3AED] text-white py-3.5 rounded-full text-[13px] font-medium text-center flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform">
                Solicitar propuesta →
              </Link>
            </div>
          </div>

          {/* Derecha */}
          <div className="px-5 sm:px-8 lg:px-10 py-7 lg:py-10 flex flex-col gap-7 bg-white/[0.02] lg:bg-white/[0.03] border-t lg:border-t-0 lg:border-l border-white/6">
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="space-y-5">
              <div>
                <p className="text-[10px] font-[JetBrains_Mono] tracking-[0.14em] uppercase text-white/30 mb-2">Contacto directo</p>
                <a href="mailto:silmtech716@gmail.com" className="block font-[Space_Grotesk] font-medium text-[18px] sm:text-[20px] leading-none break-all hover:text-white/80 transition-colors">silmtech716@gmail.com</a>
                <p className="text-[11px] font-[JetBrains_Mono] text-white/25 mt-2">Respuesta en menos de 24h • Lun—Vie</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/6">
                <div>
                  <p className="text-[10px] font-[JetBrains_Mono] tracking-[0.12em] uppercase text-white/25 mb-1">Ubicación</p>
                  <p className="text-[12px] leading-relaxed text-white/65">Colombia<br /><span className="text-white/30 text-[11px]">Remoto — Global</span></p>
                </div>
                <div>
                  <p className="text-[10px] font-[JetBrains_Mono] tracking-[0.12em] uppercase text-white/25 mb-1">Stack</p>
                  <p className="text-[12px] leading-relaxed text-white/65">Next.js • CMS<br /><span className="text-white/30 text-[11px]">Vercel</span></p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }} className="rounded-[14px] bg-white text-black p-5 sm:p-6 relative overflow-hidden hidden lg:block">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#EC4899]" />
              <p className="text-[10px] font-[JetBrains_Mono] tracking-[0.14em] uppercase text-black/35 mb-2">¿Listo para empezar?</p>
              <p className="font-[Space_Grotesk] font-medium text-[17px] leading-tight tracking-[-0.02em]">Cuéntanos tu idea y te respondemos hoy mismo.</p>
              <Link to="/contacto" onClick={onClose} className="mt-4 inline-flex bg-[#0F0F0F] text-white px-5 py-2.5 rounded-full text-[12px] font-medium hover:bg-black transition-colors">
                Iniciar proyecto →
              </Link>
            </motion.div>

            <p className="text-[10px] font-[JetBrains_Mono] tracking-wide text-white/15 mt-auto hidden lg:block">© 2026 Silmtech — Tecnología con criterio</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
