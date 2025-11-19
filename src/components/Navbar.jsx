import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'mt-0' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mt-4 backdrop-blur-xl border rounded-2xl px-4 py-3 flex items-center justify-between transition-colors ${scrolled ? 'bg-slate-900/70 border-white/10' : 'bg-slate-900/40 border-white/10'}`}>
          <a href="#top" className="text-white font-semibold text-lg tracking-tight">
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">My Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200 hover:text-white transition-colors hover:underline underline-offset-8 decoration-sky-400/70">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="relative inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 text-white px-4 py-2 transition-transform hover:scale-[1.02]">
              <span className="relative z-10">Let’s talk</span>
              <span className="absolute inset-0 rounded-xl opacity-40 blur-md bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400" />
            </a>
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
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center rounded-xl bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 text-white px-4 py-2">Let’s talk</a>
          </div>
        </div>
      )}
    </header>
  )
}
