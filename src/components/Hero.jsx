import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Colorful glow layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/20 via-sky-500/20 to-emerald-400/20 blur-3xl" />
      </div>

      {/* Readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-200 bg-white/5 border border-white/10 rounded-full px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
            Available for work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight text-white"
          >
            Building
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent"> delightful, modern</span>
            web experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-slate-300 text-lg"
          >
            I craft interactive products that blend clean design, robust engineering, and playful motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#work"
              className="relative rounded-xl bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 text-white px-5 py-3 transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              <span className="relative z-10">See my work</span>
              <span className="absolute inset-0 rounded-xl opacity-40 blur-md bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400" />
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 border border-white/10 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
