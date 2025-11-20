import React from 'react'
import { motion } from 'framer-motion'

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-indigo-400/10 border border-indigo-300/20 px-3 py-1 text-xs text-indigo-100">
    {children}
  </span>
)

const Innovation = () => {
  return (
    <section id="innovation" className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(at_10%_10%,#0ea5e9_10%,transparent_10%)] opacity-[0.06]" />
      </div>
      <div className="container mx-auto px-6 sm:px-10 relative">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
          The Vibe Coder: Build What Matters. Build It Fast.
        </motion.h2>
        <p className="mt-4 text-indigo-100/80 max-w-3xl">
          Fast hands, clear intent, and a bias for action. Sunil ships.
        </p>
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {[
            { title: 'GenAI Claims Engine', desc: 'Built in one day. From prompt to production-ready logic.', tag: 'Speed' },
            { title: 'Vibe Coding Fundamentals', desc: 'Completed with practical mastery and rapid prototyping.', tag: 'Craft' },
            { title: 'Full MCP Server', desc: 'Built in a single day. Systems thinking applied, end-to-end.', tag: 'Systems' },
          ].map((card, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="group relative rounded-3xl p-6 bg-gradient-to-br from-indigo-800/40 to-slate-900/60 border border-white/10 shadow-xl overflow-hidden">
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(200px_80px_at_var(--x)_var(--y),rgba(99,102,241,0.25),transparent)]" />
              <div className="relative">
                <Badge>{card.tag}</Badge>
                <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-indigo-100/80 text-sm">{card.desc}</p>
                <div className="mt-6 h-24 rounded-xl bg-[linear-gradient(135deg,rgba(34,197,94,0.2),rgba(56,189,248,0.15)_40%,rgba(99,102,241,0.2)_80%)] border border-white/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Innovation
