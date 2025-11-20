import React from 'react'
import { motion } from 'framer-motion'

const VapiAlignment = () => {
  return (
    <section id="vapi" className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-indigo-950">
      <div className="container mx-auto px-6 sm:px-10">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
          The Platform That Goes the Distance With You.
        </motion.h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-indigo-100/90 text-lg">
              Herbalife’s global distributors operate across time zones and languages. They need support at 11 PM, 3 AM, or across borders. VAPI shows up every time.
            </p>
            <ul className="mt-6 space-y-3 text-indigo-100/80">
              <li>Just like Sunil, VAPI doesn’t quit at mile 12.</li>
              <li>VAPI runs the marathon with millions of distributors.</li>
            </ul>
          </div>
          <div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-fuchsia-500/10 to-indigo-600/20" />
              <div className="aspect-[16/10] bg-slate-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 blur-2xl opacity-40" />
                </div>
                <div className="relative h-full w-full flex items-end p-6">
                  <div className="bg-white/90 text-slate-900 rounded-xl px-4 py-2 text-sm font-semibold shadow">
                    Road to AI • Always On
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VapiAlignment
