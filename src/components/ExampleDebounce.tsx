import { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const DATA = ['bike', 'dog', 'coin', 'cat', 'shop', 'turtle']

const ExampleDebounce = () => {
  const [results, setResults]: [string[], Function] = useState([])
  const [text, setText] = useState('')

  const debouncedVal = useDebounce({ val: text, delay: 500 })

  useEffect(() => {
    const d: string[] = DATA.filter((el) =>
      el.toLocaleLowerCase().includes(debouncedVal)
    )
    setResults(d)
  }, [debouncedVal])

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      {results.length > 0 ? (
        results.map((item, i) => <div key={i}>{item}</div>)
      ) : (
        <div> no results</div>
      )}
    </div>
  )
}

export default ExampleDebounce
