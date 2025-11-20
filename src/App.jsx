import React from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import Perseverance from './components/Perseverance'
import Innovation from './components/Innovation'
import VapiAlignment from './components/VapiAlignment'
import HerbalifeMission from './components/HerbalifeMission'
import Closing from './components/Closing'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500/20 via-slate-900 to-slate-950 text-white">
      {/* Top nav anchor spacing */}
      <Hero />
      <Story />
      <Perseverance />
      <Innovation />
      <VapiAlignment />
      <HerbalifeMission />
      <Closing />
    </div>
  )
}

export default App
