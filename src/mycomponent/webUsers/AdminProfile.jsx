import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminProfile = () => {

    let [profile, setProfile] = useState({})
    let navigate = useNavigate()

    let getAdminProfile = async () => {

        try {
            let result = await axios({
                url: "http://localhost:8000/web-users/my-profile",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(result.data.data)
            setProfile(result.data.data)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAdminProfile()
    }, [])
    return (
        <div>
            <h2>AdminProfile</h2>
            <p>Full Name: {profile.fullName}</p>
            <p>Email is {profile.email}</p>
            <p>Gender is {profile.gender}</p>
            <p>DOB is {new Date(profile.dob).toLocaleDateString()}</p>

            <button onClick={() => {
                navigate("/admin/profile-update")
            }}>Update Profile</button>
        </div>
    )
}

export default AdminProfile