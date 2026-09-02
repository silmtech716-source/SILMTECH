export default function Contact() {

  return (
    <div className="bg-[#F9F8F6] pt-[88px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 md:py-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-12 items-start">
        {/* Izquierda — texto editable */}
        <div className="lg:sticky lg:top-[88px]">
          <p className="text-[11px] tracking-[0.16em] font-medium uppercase text-[#73706B] mb-3">Contacto</p>
          <h1 className="font-[Space_Grotesk] font-semibold text-[40px] md:text-[52px] leading-none tracking-[-0.03em]">
            Cuéntanos<br />tu proyecto<span className="font-[Instrument_Serif] italic font-normal">.</span>
          </h1>
          <p className="text-[14px] leading-relaxed text-[#73706B] mt-4 max-w-[420px]">
            Todo lo que tu empresa necesita en tecnología, te respondemos lo mas rapido que se pueda
          </p>

          <div className="mt-8 space-y-0 border-t border-[#E0DDD6]">
            {[
              { l: 'Email', v: 'silmtech716@gmail.com', href: 'mailto:silmtech716@gmail.com' },
              { l: 'Ubicación', v: 'Colombia · Remoto' },
            ].map(c => (
              <div key={c.l} className="flex justify-between items-center py-3.5 border-b border-[#E0DDD6]">
                <span className="text-[11px] tracking-[0.12em] font-medium uppercase text-[#73706B]">{c.l}</span>
                {c.href ? <a href={c.href} className="text-[13px] font-medium hover:underline underline-offset-4">{c.v}</a> : <span className="text-[13px] font-medium">{c.v}</span>}
              </div>
            ))}
          </div>

        </div>

        <form action="https://formspree.io/f/xdeozglr" method="POST" className="bg-white border border-[#E0DDD6] rounded-2xl p-6 md:p-8 space-y-5 shadow-sm">

          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="_subject" value="Nuevo lead — Silmtech" />
          <input type="hidden" name="_language" value="es" />

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="space-y-1.5 block">
              <span className="text-[11px] tracking-[0.12em] font-medium uppercase text-[#73706B]">Nombre</span>
              <input required type="text" name="nombre" placeholder="Tu nombre" className="w-full border border-[#E0DDD6] bg-[#F9F8F6] rounded-full px-4 py-3 text-[14px] outline-none focus:border-[#0F0F0F] focus:bg-white transition-colors" />
            </label>
            <label className="space-y-1.5 block">
              <span className="text-[11px] tracking-[0.12em] font-medium uppercase text-[#73706B]">Correo</span>
              <input required type="email" name="email" placeholder="tu@email.com" className="w-full border border-[#E0DDD6] bg-[#F9F8F6] rounded-full px-4 py-3 text-[14px] outline-none focus:border-[#0F0F0F] focus:bg-white transition-colors" />
            </label>
          </div>

          <label className="space-y-1.5 block">
            <span className="text-[11px] tracking-[0.12em] font-medium uppercase text-[#73706B]">Servicio</span>
            <select required name="servicio" defaultValue="" className="w-full border border-[#E0DDD6] bg-[#F9F8F6] rounded-full px-4 py-3 text-[14px] outline-none focus:border-[#0F0F0F] focus:bg-white transition-colors">
              <option value="" disabled>Selecciona un servicio</option>
              <option>Páginas Web</option>
              <option>Software a Medida</option>
              <option>Instalación & Mantenimiento</option>
              <option>No estoy seguro</option>
            </select>
          </label>

          <label className="space-y-1.5 block">
            <span className="text-[11px] tracking-[0.12em] font-medium uppercase text-[#73706B]">Mensaje</span>
            <textarea required rows={4} name="mensaje" placeholder="Cuéntanos sobre tu proyecto..." className="w-full border border-[#E0DDD6] bg-[#F9F8F6] rounded-2xl px-4 py-3 text-[14px] outline-none focus:border-[#0F0F0F] focus:bg-white transition-colors resize-none" />
          </label>

          <button type="submit" className="w-full bg-[#0F0F0F] hover:bg-black text-white py-4 rounded-full text-[14px] font-semibold transition-colors">
            Enviar mensaje
          </button>
          <p className="text-center text-[11px] text-[#73706B]">O escríbenos directo: <a href="mailto:silmtech716@gmail.com" className="underline font-medium text-[#0F0F0F]">silmtech716@gmail.com</a></p>
        </form>
      </div>
    </div>
  )
}
