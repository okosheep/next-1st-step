import type { NextPage } from "next"
import Link from "next/link"

const Blog: NextPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
        voluptatum.
      </p>
      <p>
        <Link href="/blog/[id]" as="/blog/1">
          <a>Link</a>
        </Link>
      </p>
    </div>
  )
}

export default Blog
