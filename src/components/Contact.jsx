import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to send. Please try again.')
      setStatus({ type: 'success', message: 'Thanks! I will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-0 right-0 mx-auto h-40 w-[60%] bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s build something great</h2>
          <p className="mt-2 text-slate-300">Tell me about your project, timeline, and goals.</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input name="name" required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="jane@email.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="What are we building?" />
            </div>

            <div className="flex items-center gap-3">
              <button disabled={loading} className="relative rounded-xl bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 disabled:opacity-60 text-white px-5 py-3 transition-transform hover:scale-[1.02]">
                <span className="relative z-10">{loading ? 'Sending…' : 'Send message'}</span>
                <span className="absolute inset-0 rounded-xl opacity-40 blur-md bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400" />
              </button>
              {status && (
                <p className={`${status.type === 'success' ? 'text-green-300' : 'text-red-300'} text-sm`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
