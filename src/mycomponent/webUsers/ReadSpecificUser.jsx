import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ReadSpecificUser = () => {

    let [users, setUser] = useState({})
    let navigate = useNavigate()
    let params = useParams()

    let getSpecificUser = async () => {

        try {
            let result = await axios({
                url: `http://localhost:8000/web-users/${params.id}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(result.data.data)
            setUser(result.data.data)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getSpecificUser()
    }, [])
    return (
        <div>
            <h2>Read Specific User</h2>
            <p>Full Name: {users.fullName}</p>
            <p>Email is {users.email}</p>
            <p>Gender is {users.gender}</p>
            <p>DOB is {new Date(users.dob).toLocaleDateString()}</p>

            <button onClick={() => {
                navigate("/admin/users-update")
            }}>Update User</button>
        </div>
    )
}

export default ReadSpecificUser