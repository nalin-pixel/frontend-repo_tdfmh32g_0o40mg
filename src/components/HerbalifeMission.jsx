import React from 'react'
import { motion } from 'framer-motion'

const HerbalifeMission = () => {
  return (
    <section id="mission" className="relative py-24 sm:py-32 bg-gradient-to-b from-indigo-950 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>
      <div className="container mx-auto px-6 sm:px-10 relative">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
          Every Distributor. Every Customer. Every Mile.
        </motion.h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-indigo-100/90 text-lg">
              Modernizing Herbalife’s contact center and global digital platform means meeting people where they are—across languages, across time zones, across expectations.
            </p>
            <p className="mt-4 text-indigo-100/80">
              Multilingual, AI-powered support. Global reach with personal care. A network that doesn’t sleep.
            </p>
          </div>
          <div>
            <div className="relative rounded-3xl p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-white/10 shadow-xl">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: 'Global', sub: '24/7' },
                  { title: 'Languages', sub: 'Multilingual' },
                  { title: 'AI Assist', sub: 'Smart Routing' },
                  { title: 'Scale', sub: 'Millions' },
                  { title: 'Quality', sub: 'Consistent' },
                  { title: 'Care', sub: 'Human + AI' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl p-4 bg-slate-900/60 border border-white/10 text-center">
                    <p className="text-sm text-indigo-200/80">{item.title}</p>
                    <p className="mt-1 text-white font-semibold">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HerbalifeMission
