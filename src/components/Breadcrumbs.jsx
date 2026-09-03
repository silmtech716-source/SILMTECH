import { Link, useLocation } from 'react-router-dom'

const names = { '/': 'Inicio', '/servicios': 'Servicios', '/contacto': 'Contacto', '/privacidad': 'Privacidad', '/gracias': 'Gracias' }

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  if (pathname === '/') return null
  const parts = pathname.split('/').filter(Boolean)
  return (
    <nav aria-label="Migas de pan" className="max-w-[1280px] mx-auto px-6 md:px-10 pt-[84px] pb-2">
      <ol className="flex items-center gap-1.5 text-[12px] text-[#73706B]">
        <li><Link to="/" className="hover:text-[#0F0F0F] underline underline-offset-4">Inicio</Link></li>
        {parts.map((p, i) => {
          const path = `/${parts.slice(0, i + 1).join('/')}`
          const isLast = path === pathname
          return (
            <li key={path} className="flex items-center gap-1.5">
              <span className="text-[#E0DDD6]">/</span>
              {isLast ? <span className="text-[#0F0F0F] font-medium">{names[path] || p}</span> : <Link to={path} className="hover:text-[#0F0F0F] underline underline-offset-4">{names[path] || p}</Link>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
