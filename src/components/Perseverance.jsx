import React from 'react'
import { motion } from 'framer-motion'

const Perseverance = () => {
  return (
    <section id="perseverance" className="relative py-24 sm:py-32 bg-gradient-to-b from-indigo-900/20 to-slate-900">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Seven Years. One Breakthrough.</h2>
            <p className="mt-6 text-indigo-100/90 text-lg">
              From 2017 to 2024, Sunil pursued a patent that would not let go of him. Drafts turned to revisions; reviews turned to re-reviews. The work stretched across seasons, across setbacks, across years.
            </p>
            <blockquote className="mt-6 border-l-4 border-orange-400 pl-4 text-xl text-white/90 italic">
              “It is never over until it is over; don’t give up on anything until you achieve it.”
            </blockquote>
            <p className="mt-6 text-indigo-100/80">
              Determination isn’t loud. It’s a steady line drawn across time—like a blueprint, refined until the structure holds.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-white/10 shadow-2xl">
              <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
              </div>
              <div className="relative">
                <h3 className="text-white/90 font-semibold tracking-wide">Patent Journey 2017–2024</h3>
                <div className="mt-6 space-y-4">
                  {[
                    { year: '2017', label: 'Concept drafted, first principles defined' },
                    { year: '2019', label: 'Refinement, early prototypes' },
                    { year: '2021', label: 'Review cycles, persistence' },
                    { year: '2023', label: 'Finalization and readiness' },
                    { year: '2024', label: 'Breakthrough and recognition' },
                  ].map((item, idx) => (
                    <div key={item.year} className="flex items-start gap-4">
                      <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 shadow" />
                      <div>
                        <p className="text-white font-medium">{item.year}</p>
                        <p className="text-indigo-100/80 text-sm">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Perseverance
