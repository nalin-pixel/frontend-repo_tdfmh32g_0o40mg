import React from 'react'

const Closing = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <section id="closing" className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <div className="container mx-auto px-6 sm:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">We know you go the distance.</h2>
        <p className="mt-4 text-indigo-100/80">Let’s run this marathon together.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#vapi" className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition">
            See How VAPI Goes the Distance
          </a>
          <button onClick={scrollTop} className="inline-flex items-center justify-center rounded-full bg-indigo-400/20 px-6 py-3 text-white border border-white/20 hover:bg-indigo-400/30 transition">
            Back to Top
          </button>
        </div>
        <div className="mt-12 text-xs text-white/60">
          © {new Date().getFullYear()} Tribute to Sunil Pati — Built with care.
        </div>
      </div>
    </section>
  )
}

export default Closing
