import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalVariableContext } from '../../MyApp';

// clear out the token!!!!

const AdminLogout = () => {

    let global = useContext(GlobalVariableContext)
    let navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("token")
        global.setToken(null)
        navigate("/")
    }, [])
    return (
        <div>AdminLogout</div>
    )
}

export default AdminLogout