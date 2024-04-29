import axios from "axios"
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom'

const UpdateTeacher = () => {

    let [fullName, setFullName] = useState("")
    let [age, setAge] = useState()
    let [subject, setSubject] = useState("science")
    let [isMarried, setIsMarried] = useState(false)

    let navigate = useNavigate()

    let subjects = [
        { label: "Science", value: "science" },
        { label: "Math", value: "math" },
        { label: "Health", value: "health" },
        { label: "Computer", value: "computer" },
        { label: "English", value: "english" },
    ]

    let params = useParams()

    const getTeacher = async () => {
        try {
            let result = await axios({
                url: `http://localhost:8000/teachers/${params.id}`,
                method: "get"
            })
            // console.log(result.data.result)
            setFullName(result.data.result.fullName)
            setAge(result.data.result.age)
            setSubject(result.data.result.subject)
            setIsMarried(result.data.result.isMarried)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTeacher()
    }, [])

    let submitTeacher = async (e) => {
        e.preventDefault()
        let data = {
            fullName: fullName,
            age: age,
            subject: subject,
            isMarried: isMarried
        }

        try {
            let result = await axios({
                url: `http://localhost:8000/teachers/${params.id}`,
                method: "patch",
                // data: data,
            })
            // toast(result.data.message)

            navigate("/teachers")

        } catch (error) {
            toast(error.response.data.message)
        }
    }

    return (
        <div id='container'>
            <ToastContainer></ToastContainer>

            <h2>Teacher Form</h2>
            <form onSubmit={submitTeacher}>
                <div>
                    <div>
                        <label htmlFor='fullName'>Full Name: </label>
                        <input type='text'
                            id='fullName'
                            value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value)
                            }}>
                            { }
                        </input>
                    </div>

                    <div>
                        <label htmlFor='age'>Age: </label>
                        <input type='number' id='age' value={age} onChange={e => {
                            setAge(e.target.value)
                        }}></input>
                    </div>

                    <div>
                        <label htmlFor='subject'>Subject: </label>
                        <select id='subject' value={subject} onChange={e => { setSubject(e.target.value) }}>
                            {
                                subjects.map((item, i) => {
                                    return (
                                        <option key={i} value={item.value}>{item.label}</option>)
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor='isMarried'>Is Married? </label>
                        <input type='checkbox' id='isMarried' value={isMarried} onChange={e => {
                            setIsMarried(e.target.checked)
                        }}></input>
                    </div>

                    <div>
                        <button type='submit'>Update</button>
                    </div>
                </div>
            </form >

        </div >
    )
}

export default UpdateTeacher