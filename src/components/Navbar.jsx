import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-extrabold tracking-tight text-xl">
            <span className="text-gray-900">Chez</span>{' '}
            <span className="text-blue-600">Guizou</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition-colors"
            >
              Get a quote
            </a>
          </nav>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
