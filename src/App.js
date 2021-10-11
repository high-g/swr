import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function App() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log('data', data)

  return (
    <div className="App">
      success!!
      <br />
    </div>
  )
}

export default App
