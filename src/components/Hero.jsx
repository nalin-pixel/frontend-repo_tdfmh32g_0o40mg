import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="top" className="relative h-[100vh] w-full overflow-hidden">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Sunrise gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/50 via-transparent to-indigo-900/80" />
      </div>

      {/* Subtle animated horizon lines */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute left-1/2 h-px w-[200vw] -translate-x-1/2 bg-white/10" style={{ bottom: `${i * 10}%` }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 sm:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-5xl">
            <p className="uppercase tracking-[0.2em] text-orange-200/90 text-sm mb-4">Personalized tribute microsite</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
              Sunil Goes the Distance
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-indigo-100/90 max-w-2xl">
              Celebrating endurance, leadership, and building systems that last.
            </p>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <button onClick={() => scrollTo('story')} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md border border-white/20 hover:bg白/20 hover:bg-white/20 transition">
                Start the Journey
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => scrollTo('innovation')} className="inline-flex items-center gap-2 rounded-full bg-indigo-400/20 px-6 py-3 text-white border border-white/20 hover:bg-indigo-400/30 transition">
                Skip to Innovation
              </button>
            </div>

            {/* Race Bib */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-10">
              <div className="w-full max-w-2xl rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold tracking-wide">
                  Official Race Bib • VAPI
                </div>
                <div className="p-6 sm:p-8 grid grid-cols-3 gap-6 items-center">
                  <div className="col-span-2">
                    <p className="text-slate-600 font-medium">Bib #</p>
                    <p className="text-6xl sm:text-7xl font-black tracking-tight text-slate-900">13.1</p>
                    <p className="mt-2 text-slate-500 text-sm">Tagline</p>
                    <p className="text-slate-800 font-semibold">Sunil Goes The Distance.</p>
                    <p className="mt-2 text-slate-500 text-sm">Sponsor</p>
                    <p className="text-slate-800 font-semibold">VAPI</p>
                  </div>
                  <div className="col-span-1">
                    <div className="aspect-square w-full rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center">
                      <div className="h-20 w-20 bg-[repeating-linear-gradient(90deg,#0f172a_0_2px,transparent_2px_6px),repeating-linear-gradient(#0f172a_0_2px,transparent_2px_6px)] opacity-80" />
                    </div>
                    <p className="mt-2 text-center text-xs text-slate-500">QR — placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
