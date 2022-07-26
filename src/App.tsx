import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExampleDebounce from './components/ExampleDebounce'
import ExampleFetch from './components/ExampleFetch'
import Planets from './components/Planets'

function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <hr />
      {/* <ExampleDebounce /> */}
      <hr />
      {/* <ExampleFetch /> */}
      <hr />
      <Planets />
    </div>
  )
}
export default App
