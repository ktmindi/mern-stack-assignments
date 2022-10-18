import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    let activeStyle = {
        color: "red",
    };
    
    return(
        <div className="bg-dark col-12 no-gutter fluid">
            <h1 className="text-warning">Favorite Authors</h1>
            <NavLink to="/" className="m-3" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>
            <NavLink to="/new" style={({ isActive }) => isActive ? activeStyle : undefined} end>Add Author</NavLink>
        </div>
    )
}

export default NavBar