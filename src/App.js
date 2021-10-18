import { useUser } from './useUser'

function App() {
  const { user, isLoading, isError } = useUser(1)

  if (isError) return <div>failed to load</div>
  if (!isLoading) return <div>loading...</div>

  console.log('data', user)

  return (
    <div className="App">
      success!!
      <br />
    </div>
  )
}

export default App
