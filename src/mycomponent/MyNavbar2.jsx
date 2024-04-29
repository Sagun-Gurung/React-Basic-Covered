import React from 'react'
import { NavLink } from 'react-router-dom'

const MyNavbar2 = () => {
    return (
        <div id='dashboard'>
            <NavLink to="/teachers" style={{ marginRight: "30px", textDecoration: "none", color: "black", fontSize: "20px" }}>
                Teacher
            </NavLink>
            <NavLink to="/teachers/create" style={{ marginRight: "30px", textDecoration: "none", color: "black", fontSize: "20px" }}>
                Create Teacher
            </NavLink>
        </div>
    )
}

export default MyNavbar2