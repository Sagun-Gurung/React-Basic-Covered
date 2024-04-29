import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminUpdatePassword = () => {

    let [oldPassword, setOldPassword] = useState("")
    let [newPassword, setNewPassword] = useState("")

    let navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }

        try {
            let result = await axios({
                url: `http://localhost:8000/web-users/update-password`,
                method: "PATCH",
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            // to update password we log out first
            // navigate("/admin/logout")

            localStorage.removeItem("token")
            navigate("/admin/login")

        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <div id='container'>
            <ToastContainer></ToastContainer>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='oldPassword'>Old Password: </label>
                    <input id='oldPassword' type='password'
                        value={oldPassword}
                        onChange={(e) => {
                            setOldPassword(e.target.value)
                        }}></input>
                </div>

                <div>
                    <label htmlFor='newPassword'>New Password: </label>
                    <input id='newPassword' type='password'
                        value={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value)
                        }}></input>
                </div>

                <button type='submit'>Update Password</button>
            </form>
        </div>
    )
}

export default AdminUpdatePassword