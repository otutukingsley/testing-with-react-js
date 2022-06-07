import React from "react"
import "./styles/style.css"
import logo from "./assets/logo.png"

const Header = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header
