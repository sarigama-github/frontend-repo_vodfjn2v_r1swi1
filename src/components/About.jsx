export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
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
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-400">{item.label}</p>
                <p className="mt-1 text-white font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
