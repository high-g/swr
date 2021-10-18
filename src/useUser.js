import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const useUser = (id) => {
  const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/todos/${id}`, fetcher)
  console.log('useUser data', data)
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
