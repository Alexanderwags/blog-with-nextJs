import Head from "next/head"
import Post from "components/blog/Post"
import fetch from "node-fetch"
export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>Blog</h1>
        <div>
          {posts.map((p) => (
            <Post post={p} key={p.id} />
          ))}
        </div>
      </main>
    </div>
  )
}
export async function getStaticProps(context) {
  const response = await fetch(`${process.env.API_BLOG}/posts`)
  const posts = await response.json()
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  }
}
