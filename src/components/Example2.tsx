import { useLayoutEffect } from 'react'
import '../App.css'
import useLocalStorange from '../hooks/useLocalStorange'

const Example2 = () => {
  const [bgColor, setBgColor] = useLocalStorange({
    key: 'bg-color',
    defaultValue: 'dark',
  })

  useLayoutEffect(() => {
    if (bgColor === 'dark') {
      document.body.style.backgroundColor = '#000'
    } else if (bgColor === 'ligth') {
      document.body.style.backgroundColor = 'e8e8e8'
    } else {
      document.body.style.backgroundColor = '#fff'
    }
  }, [bgColor])

  return (
    <div className="App">
      <button
        onClick={() => {
          bgColor === 'dark' ? setBgColor('light') : setBgColor('dark')
        }}
      >
        Change Color
      </button>
    </div>
  )
}

export default Example2
