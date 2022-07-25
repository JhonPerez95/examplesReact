import '../App.css'
import useLocalStorange from '../hooks/useLocalStorange'

const Example1 = () => {
  const [message, setMessage] = useLocalStorange({
    key: 'message',
    defaultValue: 'hello world',
  })

  const [token, setToken] = useLocalStorange({
    key: 'token',
    defaultValue: 'token112312312-12312-123-112',
  })

  const handleSetDefault = () => {
    setMessage('Otra vez Hola Mundo!')
    setToken('Token-desde-default')
  }
  return (
    <div className="App">
      <h5>{message}</h5>
      <p>{token}</p>
      <button onClick={() => setMessage('Mensaje desde el boton')}>Msg</button>
      <button onClick={() => setToken('Token-desde-Button')}>Token</button>
      <button onClick={handleSetDefault}>Default</button>
    </div>
  )
}

export default Example1
