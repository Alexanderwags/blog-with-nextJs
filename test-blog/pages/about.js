import Header from "@/components/sections/Header"
import Head from "next/head"

export default function About() {
  return (
    <div>
      <Head>
        <title>About | {process.env.SITE_NAME}</title>
      </Head>
      <Header />
      <main>
        <h1>About us</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At culpa quod
          amet praesentium sit cupiditate corporis aliquid! Commodi cumque, hic
          reprehenderit vel necessitatibus ut laboriosam a maiores tenetur,
          optio saepe.
        </span>
      </main>
    </div>
  )
}
