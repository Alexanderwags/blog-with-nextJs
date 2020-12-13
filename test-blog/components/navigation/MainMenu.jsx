import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"

function MainMenu(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  )
}

MainMenu.propTypes = {}

export default MainMenu
