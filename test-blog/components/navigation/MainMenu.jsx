import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"

function MainMenu(props) {
  return (
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links ">
      <nav className="main-menu">
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
    </div>
  )
}

MainMenu.propTypes = {}

export default MainMenu
