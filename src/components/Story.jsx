import React from 'react'
import { motion } from 'framer-motion'

const Story = () => {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-gradient-to-b from-orange-100/20 via-white/5 to-indigo-900/20">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      <div className="container mx-auto px-6 sm:px-10 relative">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
          A Moment That Defined the Marathon
        </motion.h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-invert max-w-none">
            <p className="text-indigo-100/90 text-lg leading-relaxed">
              In April 2024, during his sixth half marathon, Sunil felt the finish line pulling him forward. And then—cramps. A body that had carried him for miles locked up within sight of the end.
            </p>
            <p className="mt-4 text-indigo-100/80">
              A stranger stepped in, steadying a shoulder, whispering the simplest encouragement. It wasn’t the medal that mattered most that day—it was the humanity.
            </p>
            <p className="mt-4 text-indigo-100/80 italic">
              Vulnerability is strength. Finishing isn’t always the victory—sometimes the lesson is.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 via-pink-500/10 to-indigo-600/20" />
              <div className="aspect-[4/3] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.12),transparent_60%)]">
                <div className="h-full w-full grid grid-rows-6">
                  {[...Array(6)].map((_, r) => (
                    <div key={r} className="grid grid-cols-12">
                      {[...Array(12)].map((_, c) => (
                        <div key={c} className={`border-[1.5px] ${((r + c) % 2 === 0) ? 'border-white/20' : 'border-white/5'}`} />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-white/90 text-slate-900 rounded-xl px-4 py-2 text-sm font-semibold shadow">
                    Finish Line • Half Marathon 2024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Story
