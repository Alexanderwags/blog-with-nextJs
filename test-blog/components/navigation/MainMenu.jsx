import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
function MainMenu(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

MainMenu.propTypes = {}

export default MainMenu
