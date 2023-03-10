import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Git engine</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</a>
                        
                    </li>
                </ul>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar