import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="flex items-center gap-2.5">
          <img src="/logo-bulb.png" alt="Silmtech" className="h-6 w-auto object-contain" />
          <span className="font-[Space_Grotesk] font-semibold text-[14px] tracking-[-0.02em]">Silmtech</span>
        </span>
        <span className="text-[12px] text-white/30">© 2026 Silmtech.</span>
        <div className="flex gap-5 text-white/40 text-[12px]">
          <Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link>
        </div>
      </div>
    </footer>
  )
}
