import { useMemo } from 'react'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const sampleProjects = [
  {
    title: 'Realtime Dashboard',
    description: 'A metrics dashboard with live updates and smooth animations.',
    tags: ['React', 'Tailwind', 'WebSockets'],
    live: 'https://example.com',
    repo: '#'
  },
  {
    title: 'E-commerce UI kit',
    description: 'Reusable components and patterns for modern storefronts.',
    tags: ['React', 'Radix UI', 'Framer Motion'],
    live: 'https://example.com',
    repo: '#'
  },
  {
    title: '3D Landing',
    description: 'Interactive hero built with Spline and micro-interactions.',
    tags: ['Spline', 'React', 'Animations'],
    live: 'https://example.com',
    repo: '#'
  },
]

export default function Work() {
  const projects = useMemo(() => sampleProjects, [])

  return (
    <section id="work" className="relative py-24">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-48 w-[70%] bg-gradient-to-r from-sky-500/10 via-fuchsia-500/10 to-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white flex items-center gap-2">
            <Sparkles className="text-emerald-300" /> Selected Work
          </h2>
          <p className="mt-2 text-slate-300">A few projects that showcase my approach and craft.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-sky-400/50"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-500/20 via-fuchsia-500/20 to-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-200 transition-colors">{p.title}</h3>
                  <p className="mt-1 text-slate-300 text-sm">{p.description}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-white bg-gradient-to-r from-sky-600/30 to-fuchsia-600/30 border border-white/10 rounded-full px-2 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.live} target="_blank" className="inline-flex items-center gap-1 text-sky-300 hover:text-white transition-colors">
                  <ExternalLink size={16}/> Live
                </a>
                <a href={p.repo} target="_blank" className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                  <Github size={16}/> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
