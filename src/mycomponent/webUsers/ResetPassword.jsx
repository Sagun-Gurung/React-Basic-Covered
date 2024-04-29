import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {

    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let [params] = useSearchParams()
    let token = params.get("token")

    let handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            password: password
        }

        try {
            let result = await axios({
                url: `http://localhost:8000/web-users/reset-password`,
                method: "PATCH",
                data: data,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
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
                    <label htmlFor='password'>Password: </label>
                    <input id='password' type='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}></input>
                </div>

                <button type='submit' style={{ cursor: "pointer" }}>Reset</button>
            </form>
        </div>
    )
}

export default ResetPassword