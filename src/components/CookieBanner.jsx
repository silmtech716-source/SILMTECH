import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('silmtech_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('silmtech_cookie_consent', 'accepted')
    setVisible(false)
  }
  const reject = () => {
    localStorage.setItem('silmtech_cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 inset-x-4 md:left-auto md:right-4 md:max-w-[420px] z-[90] bg-[#0F0F0F] text-white rounded-2xl p-5 shadow-2xl border border-white/10">
      <p className="text-[12px] leading-relaxed text-white/80">
        Usamos cookies técnicas necesarias para que la web funcione. No usamos tracking sin tu consentimiento. Ver <Link to="/privacidad" onClick={() => setVisible(false)} className="underline">política de privacidad</Link>.
      </p>
      <div className="flex gap-2 mt-4">
        <button onClick={reject} className="flex-1 border border-white/20 text-white py-2.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">Rechazar</button>
        <button onClick={accept} className="flex-1 bg-white text-black py-2.5 rounded-full text-[12px] font-medium hover:bg-zinc-100 transition-colors">Aceptar</button>
      </div>
    </div>
  )
}
