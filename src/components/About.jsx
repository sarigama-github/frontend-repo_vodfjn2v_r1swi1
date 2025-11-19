import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/10 to-sky-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">About Me</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m a frontend-focused full‑stack developer who loves bringing playful, modern interactions to life.
            My work blends performance, accessibility, and a strong design sensibility. I enjoy collaborating with
            teams to turn complex ideas into polished digital experiences.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Stack', value: 'React, FastAPI, Tailwind, MongoDB' },
              { label: 'Focus', value: 'UX Engineering, Motion, DX' },
              { label: 'Location', value: 'Remote • Worldwide' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-900/40 border border-white/10 p-4"
              >
                <p className="text-xs uppercase tracking-widest text-slate-400">{item.label}</p>
                <p className="mt-1 text-white font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
