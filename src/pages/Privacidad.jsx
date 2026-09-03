import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Privacidad() {
  useEffect(() => {
    document.title = 'Política de privacidad | Silmtech'
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', 'Política de privacidad de Silmtech. Cómo tratamos tus datos.')
  }, [])
  return (
    <div className="bg-[#F9F8F6] pt-[88px]">
      <div className="max-w-[800px] mx-auto px-6 md:px-10 py-12">
        <p className="text-[11px] font-[JetBrains_Mono] tracking-[0.14em] uppercase text-[#73706B]">Legal</p>
        <h1 className="font-[Space_Grotesk] font-medium text-[32px] md:text-[40px] leading-none tracking-[-0.03em] mt-2">Política de privacidad</h1>
        <p className="text-[12px] font-[JetBrains_Mono] text-[#9A9690] mt-2">Actualizado: 2 de septiembre de 2026</p>
        <div className="prose prose-sm max-w-none mt-8 space-y-4 text-[13px] leading-relaxed text-[#73706B]">
          <p>En Silmtech respetamos tu privacidad. Solo recolectamos los datos que nos envías vía el formulario (nombre, email, mensaje) para responder a tu solicitud. No vendemos ni compartimos tus datos con terceros.</p>
          <h3 className="font-[Space_Grotesk] font-medium text-[#0F0F0F] text-[16px] mt-6">Datos que recolectamos</h3>
          <p>Nombre, correo electrónico, servicio de interés y mensaje. Vía Formspree, que cifra en tránsito (HTTPS) y en reposo.</p>
          <h3 className="font-[Space_Grotesk] font-medium text-[#0F0F0F] text-[16px]">Tus derechos</h3>
          <p>Puedes solicitar acceso, rectificación o eliminación escribiendo a <a href="mailto:silmtech716@gmail.com" className="underline">silmtech716@gmail.com</a>. Respondemos en 24h (compromiso).</p>
          <h3 className="font-[Space_Grotesk] font-medium text-[#0F0F0F] text-[16px]">Cookies</h3>
          <p>Usamos solo cookies técnicas necesarias. No usamos tracking de terceros sin consentimiento.</p>
        </div>
        <div className="mt-10 flex gap-3">
          <Link to="/" className="text-[13px] underline">Inicio</Link>
          <Link to="/contacto" className="text-[13px] underline">Contacto</Link>
        </div>
      </div>
    </div>
  )
}
