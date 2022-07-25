import '../App.css'
import useLocalStorange from '../hooks/useLocalStorange'

const Example3 = () => {
  const [count, setCount] = useLocalStorange({ key: 'count', defaultValue: 0 })

  return (
    <div className="App">
      <h5>{count}</h5>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}

export default Example3
