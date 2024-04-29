import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalVariableContext } from '../MyApp'

const MyNavbar = () => {

    let global = useContext(GlobalVariableContext)
    // console.log(global)

    return (
        <div id='dashboard'>
            <NavLink to="/admin/register" style={{ marginRight: "30px", textDecoration: "none", color: "black", fontSize: "20px" }}>
                Admin Register
            </NavLink>

            {
                global.token ?
                    (<>
                        <NavLink to="/admin/my-profile" style={{ marginRight: "30px", textDecoration: "none", color: "black", fontSize: "20px" }}>
                            Admin Profile
                        </NavLink>
                        <NavLink to="/admin/logout" style={{ marginRight: "30px", textDecoration: "none", color: "black", fontSize: "20px" }}>
                            Logout
                        </NavLink>
                        <NavLink to="/admin/update-password" style={{ marginRight: "30px", textDecoration: "none", color: "black", fontSize: "20px" }}>
                            Update Password
                        </NavLink>
                        <NavLink to="/admin/read-all-user" style={{ marginRight: "30px", textDecoration: "none", color: "black", fontSize: "20px" }}>
                            Read All User
                        </NavLink>
                    </>) : (
                        <>
                            <NavLink to="/admin/login" style={{ marginRight: "30px", textDecoration: "none", color: "black", fontSize: "20px" }}>
                                Admin Login
                            </NavLink>
                        </>
                    )
            }
        </div>
    )
}

export default MyNavbar