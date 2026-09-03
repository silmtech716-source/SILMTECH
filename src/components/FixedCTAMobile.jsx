import { Link, useLocation } from 'react-router-dom'

export default function FixedCTAMobile() {
  const { pathname } = useLocation()
  if (pathname === '/contacto' || pathname === '/gracias') return null
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur border-t border-[#E0DDD6] px-4 py-3 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[11px] font-[JetBrains_Mono] tracking-wide text-[#73706B]">¿Hablamos?</p>
        <p className="text-[12px] font-medium leading-none">Respuesta en &lt;24h</p>
      </div>
      <Link to="/contacto" className="shrink-0 bg-[#0F0F0F] text-white px-5 py-2.5 rounded-full text-[13px] font-medium">
        Solicitar propuesta
      </Link>
    </div>
  )
}
