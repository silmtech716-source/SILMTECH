import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Gracias() {
  useEffect(() => {
    document.title = '¡Gracias! — Silmtech'
  }, [])
  return (
    <div className="min-h-[70vh] pt-[88px] bg-[#F9F8F6] flex items-center">
      <div className="max-w-[640px] mx-auto px-6 py-16 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white grid place-items-center mx-auto text-[20px]">✓</div>
        <h1 className="font-[Space_Grotesk] font-medium text-[36px] leading-none tracking-[-0.03em] mt-4">¡Gracias por escribirnos!</h1>
        <p className="text-[14px] text-[#73706B] mt-3">Recibimos tu mensaje. Te respondemos en menos de 24 horas (compromiso de respuesta).</p>
        <p className="text-[12px] font-[JetBrains_Mono] text-[#0F0F0F]/40 mt-2">Revisa tu correo • {import.meta.env.VITE_CONTACT_EMAIL}</p>
        <div className="flex justify-center gap-3 mt-8">
          <Link to="/" className="bg-[#0F0F0F] text-white px-6 py-3 rounded-full text-[13px] font-medium">Volver al inicio</Link>
          <Link to="/servicios" className="border border-[#0F0F0F]/15 px-6 py-3 rounded-full text-[13px]">Ver servicios</Link>
        </div>
        <div className="mt-8 text-[12px] text-[#73706B] flex justify-center gap-4">
          <Link to="/" className="underline">Inicio</Link>
          <Link to="/servicios" className="underline">Servicios</Link>
          <Link to="/contacto" className="underline">Contacto</Link>
        </div>
      </div>
    </div>
  )
}
