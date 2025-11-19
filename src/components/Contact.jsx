import { useState } from 'react'

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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s build something great</h2>
          <p className="mt-2 text-slate-300">Tell me about your project, timeline, and goals.</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input name="name" required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@email.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="What are we building?" />
            </div>

            <div className="flex items-center gap-3">
              <button disabled={loading} className="rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white px-5 py-3 transition-colors">
                {loading ? 'Sending…' : 'Send message'}
              </button>
              {status && (
                <p className={`${status.type === 'success' ? 'text-green-300' : 'text-red-300'} text-sm`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
