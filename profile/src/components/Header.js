import React from "react"
// import "../App.css"

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo"></div>
        <input className="search-input"></input>
        <h3>Pull Requests</h3>
        <h3>Issues</h3>
        <h3>Marketplace</h3>
        <h3>Explore</h3>
      </header>
      <div className="sub-header">
        <a>Overview</a>
        {/* need to show repo count below */}
        <a>Repositories</a>
        <a>Projects</a>
        <a>Packages</a>
      </div>
    </div>
  )
}
