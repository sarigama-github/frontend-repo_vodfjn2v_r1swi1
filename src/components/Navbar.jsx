import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="text-white font-semibold text-lg tracking-tight">My Portfolio</a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 transition-colors">Let’s talk</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24}/> : <Menu size={24}/>} 
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white px-2 py-2 rounded-lg">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 transition-colors">Let’s talk</a>
          </div>
        </div>
      )}
    </header>
  )
}
