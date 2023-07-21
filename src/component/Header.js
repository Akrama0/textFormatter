import React from 'react'
function Header(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode}`}>
      <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.heading}</a>
      <div className="mt-0 mx-4 form-check form-switch">
      <input className="form-check-input" onClick={props.colorMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault"> Darkmode</label>
   </div>
  </div>
</nav>
</div>
  )
}

export default Header