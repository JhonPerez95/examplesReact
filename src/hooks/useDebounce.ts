import { useState, useEffect } from 'react'
import { PropsUseDebounce } from '../interfaces/PropsHooks.interfaces'

const useDebounce = ({ val, delay }: PropsUseDebounce) => {
  const [debouncedVal, setDebouncedVal] = useState(val)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedVal(val)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [val])

  return debouncedVal
}

export default useDebounce
