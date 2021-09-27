import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.colorMode} bg-${props.colorMode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/home" aria-current="page">{props.a1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.a2}</Link>
        </li>
      </ul>

      <div className="form-check form-switch mx-3">
  <input className="form-check-input" onClick={()=>props.mode()} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" style={{color:props.colorMode!=="dark"?"black":"white"}} htmlFor="flexSwitchCheckDefault">{props.colorMode==="dark"?"Light":"Dark"} Mode Enable</label>
</div>

    </div>
  </div>
</nav>
        </>
    )
}
Navbar.propTypes={title:PropTypes.string.isRequired,a1:PropTypes.string,a2:PropTypes.string}
Navbar.defaultProps={a1:"Home",a2:"About Us"}