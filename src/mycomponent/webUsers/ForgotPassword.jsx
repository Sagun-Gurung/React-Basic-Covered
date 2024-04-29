import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {

    let [email, setEmail] = useState("")

    let navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            email: email
        }

        try {
            let result = await axios({
                url: `http://localhost:8000/web-users/forgot-password`,
                method: "POST",
                data: data,
            })

            setEmail("")
            toast.success("Please check your email for the link")

        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <div id='container'>
            <ToastContainer></ToastContainer>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input id='email' type='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}></input>
                </div>

                <button type='submit'>Forgot Password</button>
            </form>
        </div>
    )
}

export default ForgotPassword