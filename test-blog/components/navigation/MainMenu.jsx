import React, { createRef } from "react"
import PropTypes from "prop-types"
import Link from "next/link"

const menu = createRef()
const toggleMenu = () => {
  menu.current.classList.toggle("show")
}
function MainMenu(props) {
  return (
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links ">
      <nav className="main-menu" ref={menu}>
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
      <div
        className="main-menu-toggle tol-l"
        onClick={() => toggleMenu()}></div>
    </div>
  )
}

MainMenu.propTypes = {}

export default MainMenu
