import type { NextPage } from "next"
import { useRouter } from "next/router";

const Id: NextPage = () => {
  const router = useRouter();
  
  return (
    <div>
      <h1>Blog2</h1>
      <p>{router.query.id}</p>
    </div>
  )
}

export default Id
