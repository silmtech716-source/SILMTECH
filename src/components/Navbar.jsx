import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import MenuOverlay from './MenuOverlay'
import logoBulb from '../assets/logo-bulb.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-[90] flex items-center justify-between px-6 md:px-10 h-[64px] border-b transition-colors duration-300 ${
          open
            ? 'bg-[#0F0F0F] border-white/10'
            : scrolled
              ? 'bg-[#0F0F0F]/95 backdrop-blur-xl border-white/10'
              : 'bg-[#0F0F0F] border-white/[0.06]'
        }`}
      >
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#EC4899]" />
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoBulb} alt="Silmtech" className="h-8 w-auto object-contain" />
          <span className="font-[Space_Grotesk] font-semibold text-[17px] tracking-[-0.02em] text-white">
            Silmtech
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a href={import.meta.env.VITE_IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram Silmtech" className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/10 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="2" width="20" height="20" rx="6" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" /></svg>
          </a>
          <Link
            to="/contacto"
            className="hidden md:inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-100 px-5 py-2.5 text-[13px] font-semibold tracking-wide rounded-full transition-colors"
          >
            Solicitar propuesta
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="relative flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-zinc-100 transition-colors"
          >
            <span className="hidden sm:inline">{open ? 'Cerrar' : 'Menú'}</span>
            <span className="relative w-4 h-3 flex flex-col justify-between">
              <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] bg-black w-full origin-center" transition={{ duration: 0.25 }} />
              <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-[1.5px] bg-black w-full" transition={{ duration: 0.15 }} />
              <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] bg-black w-full origin-center" transition={{ duration: 0.25 }} />
            </span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && <MenuOverlay onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
