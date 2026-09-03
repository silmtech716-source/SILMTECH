import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Página no encontrada | Silmtech'
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', 'La página que buscas no existe. Vuelve al inicio o contáctanos.')
  }, [])
  return (
    <div className="min-h-[70vh] pt-[88px] bg-[#F9F8F6] flex items-center">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 text-center w-full">
        <p className="text-[11px] font-[JetBrains_Mono] tracking-[0.14em] uppercase text-[#73706B]">Error 404</p>
        <h1 className="font-[Space_Grotesk] font-medium text-[42px] md:text-[56px] leading-none tracking-[-0.03em] mt-3">Página no encontrada</h1>
        <p className="text-[14px] text-[#73706B] mt-4 max-w-[480px] mx-auto">Parece que te perdiste. La URL no existe o fue movida. Te llevamos de vuelta.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link to="/" className="bg-[#0F0F0F] text-white px-6 py-3 rounded-full text-[13px] font-medium">Volver al inicio</Link>
          <Link to="/contacto" className="border border-[#0F0F0F]/15 px-6 py-3 rounded-full text-[13px] font-medium">Contactar</Link>
        </div>
        <div className="mt-12 flex justify-center gap-4 text-[12px] text-[#0F0F0F]/40">
          <Link to="/servicios" className="underline underline-offset-4">Servicios</Link>
          <Link to="/contacto" className="underline underline-offset-4">Contacto</Link>
        </div>
      </div>
    </div>
  )
}
