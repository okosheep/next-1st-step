import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Bar = () => {
  const { data, error } = useSWR('/api/hello', fetcher)

  console.log(JSON.stringify(data))

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (<div> Hello {JSON.stringify(data)}!!</div>)
}

export default Bar
