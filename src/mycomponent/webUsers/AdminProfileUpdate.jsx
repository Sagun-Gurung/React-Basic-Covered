import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const AdminProfileUpdate = () => {

    let [fullName, setFullName] = useState("")
    let [dob, setDob] = useState("")
    let [gender, setGender] = useState("male")
    let navigate = useNavigate()

    let genders = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
    ]

    let getAdminProfile = async () => {

        try {
            let result = await axios({
                url: "http://localhost:8000/web-users/my-profile",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            // console.log(result.data.data)
            setFullName(result.data.data.fullName)
            // setDob(result.data.data.dob)
            setGender(result.data.data.gender)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAdminProfile()
    }, [])


    let handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            fullName: fullName,
            dob: dob,
            gender: gender,
        }

        try {
            let result = await axios({
                url: `http://localhost:8000/web-users/update-profile`,
                method: "PATCH",
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            navigate("/admin/my-profile")

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
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value)
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

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AdminProfileUpdate