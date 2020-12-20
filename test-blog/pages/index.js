import Head from "next/head"
import Post from "components/blog/Post"
import fetch from "node-fetch"
import { NextSeo } from "next-seo"
export default function Home({ posts }) {
  return (
    <div>
      <NextSeo
        title="Welcome to Blog"
        description="Blog of test"
        openGraph={{
          url: "https://test",
          title: "Welcome to Blog",
          description: "Blog of test",
          images: [
            {
              url: "https://www.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg",
              width: 1280,
              height: 720,
              alt: "Picture",
            },
            {
              url: "https://www.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg",
              width: 1280,
              height: 720,
              alt: "Picture",
            },
          ],
          site_name: "test",
        }}
        twitter={{
          handle: "@william_ws7",
          site: "@william_ws7",
          cardType: "summary_large",
        }}
      />
      <main>
        <h1>Blog</h1>
        <div className="ed-grid m-grid-3 row-gab">
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
