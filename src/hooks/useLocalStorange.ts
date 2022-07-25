import { useState } from 'react'
import { PropsUseLocalStorange } from '../interfaces/UseLocalStorange.interface'

const useLocalStorange = ({ key, defaultValue }: PropsUseLocalStorange) => {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)

      if (!value) {
        localStorage.setItem(key, JSON.stringify(defaultValue))
        return defaultValue
      }
      return JSON.parse(value)
    } catch (error) {
      return defaultValue
    }
  })

  const setValue = (newValue: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.error(error)
    }
    setStoreValue(newValue)
  }

  return [storeValue, setValue]
}

export default useLocalStorange
