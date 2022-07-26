import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { PropsUseFetch } from '../interfaces/PropsHooks.interfaces'

const useFetch = ({ url }: PropsUseFetch) => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    error: false,
  })

  const cancelTokenSource = axios.CancelToken.source()

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url, {
        cancelToken: cancelTokenSource.token,
      })
      const data = await response.data

      if (data) {
        setFetchedData({
          data: data.results ? data.results : data,
          isLoading: false,
          error: false,
        })
      }
    } catch (error: any) {
      if (axios.isCancel(error)) {
        console.log('Request canceled')
      } else {
        console.log('Error ocurred ', error)
      }
      setFetchedData({
        data: [],
        isLoading: false,
        error: true,
      })
    }
  }, [url])

  useEffect(() => {
    fetchData()
    return () => cancelTokenSource.cancel()
  }, [url, fetchData])

  const { data, isLoading, error } = fetchedData
  return { data, isLoading, error }
}

export default useFetch
