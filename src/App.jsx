import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Breadcrumbs from './components/Breadcrumbs'
import FixedCTAMobile from './components/FixedCTAMobile'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Gracias from './pages/Gracias'
import Privacidad from './pages/Privacidad'
import NotFound from './pages/NotFound'

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Migas de pan */}
        <Breadcrumbs />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToHash />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pb-[72px] lg:pb-0">
          <AnimatedRoutes />
        </main>
        <FixedCTAMobile />
        <CookieBanner />
        <Footer />
      </div>
    </HashRouter>
  )
}
