import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav id="project-container">
                <NavLink to="/products" id="navLink">
                    Products
                </NavLink>
                <NavLink to="/products/create" id="navLink">
                    Add Products
                </NavLink>
            </nav>
        </>
    )
}

export default NavBar