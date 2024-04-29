import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminRegister = () => {

    let [fullName, setFullName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [dob, setDob] = useState("")
    let [gender, setGender] = useState("male")

    let genders = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
    ]

    let handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            fullName: fullName,
            email: email,
            password: password,
            dob: dob,
            gender: gender,
        }
        // console.log("Form is submitted", data)

        data = {
            ...data,
            role: "admin"
        }

        try {
            let result = await axios({
                url: `http://localhost:8000/web-users`,
                method: "post",
                data: data,
            })
            toast.success("Admin registered! Please verify it with the link in your email")
            console.log(result)

            setFullName("")
            setEmail("")
            setPassword("")
            setDob("")
            setGender("")

        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <div id='container'>
            <ToastContainer></ToastContainer>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='fullName'>Full Name: </label>
                    <input id='fullName' type='text'
                        placeholder='full name'
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value)
                        }}></input>
                </div>

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

                <div>
                    <label htmlFor='dob'>DOB: </label>
                    <input id='dob' type='date'
                        value={dob}
                        onChange={e => {
                            setDob(e.target.value)
                        }}></input>
                </div>

                <div>
                    <label htmlFor='gender'>Gender: </label>
                    {
                        genders.map((item, i) => {
                            return (
                                <span key={i}>
                                    <label htmlFor={item.value}>{item.label}</label>
                                    <input type="radio" id={item.value}
                                        value={item.value}
                                        checked={gender === item.value}
                                        onChange={(e) => { setGender(e.target.value) }}></input>
                                </span>
                            )
                        })
                    }
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AdminRegister