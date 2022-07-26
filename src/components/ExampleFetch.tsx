import { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import useFetch from '../hooks/useFetch'

const ExampleFetch = () => {
  const [text, setText] = useState('g')

  const debouncedVal = useDebounce({ val: text, delay: 500 })

  console.log(debouncedVal)
  const url2 = 'https://swapi.dev/api/planets'
  const url = `https://swapi.dev/api/people?search=${debouncedVal}`

  const { data, isLoading, error } = useFetch({ url: url2 })

  console.log({data});
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div> Ups... an error ocurred </div>
  }

  return (
    <div className="APP">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      {data.length > 0 ? (
        data.map((item, i) => <div key={i}>{item}</div>)
      ) : (
        <div> no results</div>
      )}
    </div>
  )
}

export default ExampleFetch
