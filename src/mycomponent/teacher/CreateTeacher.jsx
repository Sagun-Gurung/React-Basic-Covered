import axios from "axios";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDropZone from "../ReactDropZone";


const CreateTeacher = () => {

    let [fullName, setFullName] = useState("")
    let [age, setAge] = useState()
    let [subject, setSubject] = useState("science")
    let [isMarried, setIsMarried] = useState(false)
    let [profileLink, setProfileLink] = useState("")

    // let subjects = [
    //     { label: "Science", _id: 1 },
    //     { label: "Math", _id: 2 },
    //     { label: "Health", _id: 3 },
    //     { label: "Computer", _id: 4 },
    //     { label: "English", _id: 5 },
    // ]
    let subjects = [
        { label: "Science", value: "science" },
        { label: "Math", value: "math" },
        { label: "Health", value: "health" },
        { label: "Computer", value: "computer" },
        { label: "English", value: "english" },
    ]


    let submitTeacher = async (e) => {
        e.preventDefault()
        let data = {
            fullName: fullName,
            age: age,
            subject: subject,
            isMarried: isMarried,
            profileImage: profileLink,
        }
        // console.log("Teacher's form has been submitted: ", teachers)

        try {
            let result = await axios({
                url: `http://localhost:8000/teachers`,
                method: "post",
                data: data,
            })

            setFullName("")
            setAge(0)
            setSubject("")
            setIsMarried(false)
            setProfileLink("")

            console.log(result)
            // show toast message
            toast(result.data.message)

        } catch (error) {
            // console.log(error)
            // console.log(error.response.data.message)
            toast(error.response.data.message)
        }
    }



    return (
        <div id='container'>
            <ToastContainer></ToastContainer>

            <h2>Teacher Form</h2>
            <form onSubmit={submitTeacher}>
                <div>
                    <ReactDropZone profileLink={profileLink}
                        setProfileLink={setProfileLink}>
                    </ReactDropZone>
                    <div>
                        <label htmlFor='fullName'>Full Name: </label>
                        <input type='text'
                            id='fullName'
                            value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value)
                            }}>
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
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form >

        </div >
    )
}

export default CreateTeacher