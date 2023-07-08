import React from 'react'
import Quiz from './components/Quiz'
import ParticlesBg from 'particles-bg'
import "./App.css"
function App() {
  return (
    <>
      <ParticlesBg type="fountain" bg={true} />
      <Quiz/>
    </>
  )
}

export default App