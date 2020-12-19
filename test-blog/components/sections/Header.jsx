import React from "react"
import PropTypes from "prop-types"
import MainMenu from "../navigation/MainMenu"
import Link from "next/link"
function Header(props) {
  return (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-col">
          <Link href="/">
            <img src="/logo.svg" alt="EdLogo" className="main-logo" />
          </Link>
        </div>
        <MainMenu />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
