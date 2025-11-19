import { useMemo } from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Selected Work</h2>
          <p className="mt-2 text-slate-300">A few projects that showcase my approach and craft.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">{p.title}</h3>
                  <p className="mt-1 text-slate-300 text-sm">{p.description}</p>
                </div>
                <Star className="text-blue-300/70" size={20} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-blue-200/90 bg-blue-500/10 border border-blue-300/20 rounded-full px-2 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.live} target="_blank" className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition-colors">
                  <ExternalLink size={16}/> Live
                </a>
                <a href={p.repo} target="_blank" className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                  <Github size={16}/> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
