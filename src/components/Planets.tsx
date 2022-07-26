import useFetch from '../hooks/useFetch'

const Planets = () => {
  const url = 'https://swapi.dev/api/planets'
  const { data, isLoading, error } = useFetch({ url })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div> Ups... an error ocurred </div>
  }

  return (
    <div className="APP">
      {data.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  )
}

export default Planets
