import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="bg-dark col-12 no-gutter fluid">
            <h1 className="text-warning">MovieDB</h1>
            <NavLink to="/movielist" className="m-3">Home</NavLink>
            <NavLink to="/" className="">Form</NavLink>
        </div>
    )
}

export default NavBar