import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
function contact(props) {
  return (
    <div>
      <Head>
        <title>Contact | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>Contact Us </h1>
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

contact.propTypes = {}

export default contact
