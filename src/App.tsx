import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExampleDebounce from './components/ExampleDebounce'
import ExampleFetch from './components/ExampleFetch'

function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <hr />
      <ExampleDebounce />
      <hr />
      <ExampleFetch />
    </div>
  )
}

export default App
