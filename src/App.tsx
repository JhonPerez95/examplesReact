import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'

function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Example1 />
      <hr />
      <Example2 />
      <hr />
      <Example3 />
    </div>
  )
}

export default App
