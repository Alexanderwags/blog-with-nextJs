import React from "react"
import PropTypes from "prop-types"
import MainMenu from "../navigation/MainMenu"

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img
          src="https://ed.team/static/images/logo/logo-alt.svg"
          alt="EdLogo"
        />
      </div>
      <MainMenu />
    </header>
  )
}

Header.propTypes = {}

export default Header
