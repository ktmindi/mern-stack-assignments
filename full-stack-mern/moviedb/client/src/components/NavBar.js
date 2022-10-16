import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    let activeStyle ={
        colot: "red",
    };
    
    return(
        <div className="bg-dark col-12 no-gutter fluid">
            <h1 className="text-warning">MovieDB</h1>
            <NavLink to="/movielist" className="m-3" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>
            <NavLink to="/form" style={({ isActive }) => isActive ? activeStyle : undefined}>Form</NavLink>
        </div>
    )
}

export default NavBar