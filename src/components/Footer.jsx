import { Link } from 'react-router-dom'
import logoBulb from '../assets/logo-bulb.png'

export default function Footer() {
  return (
    <footer className="relative bg-[#0F0F0F] text-white border-t border-white/10">
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#EC4899] opacity-90" />
      <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#EC4899] opacity-50" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="flex items-center gap-2.5">
          <img src={logoBulb} alt="Silmtech" className="h-6 w-auto object-contain" />
          <span className="font-[Space_Grotesk] font-semibold text-[14px] tracking-[-0.02em]">Silmtech</span>
        </span>
        <span className="text-[12px] text-white/30">© 2026 Silmtech.</span>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 text-white/40 text-[11px] sm:text-[12px]">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
          <Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link>
          <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          <a href={import.meta.env.VITE_IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="2" width="20" height="20" rx="6" /><circle cx="12" cy="12" r="5" /></svg>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
