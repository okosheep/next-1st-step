import { useEffect, useState } from "react"

export default function Page({ foo }: { foo: string }) {
  const [value, setValue] = useState(0)
  
  useEffect(() => setValue(Math.random()), [])

  return <div> {foo} {value}!!</div>
}

export const getStaticProps = (context: { foo: string }) => {
  const foo = 'Hello';

  return {
    props: { foo },
  }
}
