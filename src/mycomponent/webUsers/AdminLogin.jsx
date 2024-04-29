import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalVariableContext } from '../../MyApp';

const AdminLogin = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let global = useContext(GlobalVariableContext)

    let handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            email: email,
            password: password,
        }

        try {
            let result = await axios({
                url: "http://localhost:8000/web-users/login",
                method: "post",
                data: data,
            })
            //this api gives token which we need for login

            let token = result.data.token
            localStorage.setItem("token", token)
            global.setToken(token)

            navigate("/admin")

            toast.success("Logged in successfully")
            // console.log(result)

            setEmail("")
            setPassword("")

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
                        placeholder='email@gmail.com'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}></input>
                </div>

                <div>
                    <label htmlFor='password'>Password: </label>
                    <input id='password' type='password'
                        placeholder='password'
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}></input>
                </div>

                <button type='submit' style={{ cursor: "pointer" }}>Login</button>
                <div onClick={() => {
                    navigate("/admin/forgot-password")
                }} style={{ cursor: "pointer" }}>Forgot Password</div>
            </form>
        </div>
    )
}

export default AdminLogin