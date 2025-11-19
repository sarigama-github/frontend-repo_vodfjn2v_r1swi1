import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(30rem_30rem_at_20%_10%,rgba(30,144,255,0.15),transparent),radial-gradient(40rem_40rem_at_80%_20%,rgba(99,102,241,0.15),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Your Name</p>
          <div className="text-slate-400 text-sm">Built with love and good vibes</div>
        </div>
      </footer>
    </div>
  )
}

export default App
