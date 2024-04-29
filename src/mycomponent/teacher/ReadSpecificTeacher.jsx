import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ReadSpecificTeacher = () => {
    // let teachers = { fullName: "Scylla", age: 300, subject: "Monster", isMarried: false }

    let [teachers, setTeachers] = useState({})
    let params = useParams()
    // console.log(params)
    // let id = params.id
    /* 
    hit api
    get data
    set data
    */

    const getTeacher = async () => {
        try {
            let result = await axios({
                url: `http://localhost:8000/teachers/${params.id}`,
                method: "get"
            })
            // console.log(result.data.result)
            setTeachers(result.data.result)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => { getTeacher() }, [])
    return (
        <div>
            <p>Teacher's name is {teachers.fullName}</p>
            <img alt='profile-image' src={teachers.profileImage}></img>
            <p>{teachers.fullName} is {teachers.age} years old.</p>
            <p>{teachers.fullName} teaches {`${teachers.subject}`.charAt(0).toUpperCase() + `${teachers.subject}`.slice(1)} subject.</p>
            {
                teachers.isMarried ? <p>{teachers.fullName} is married.</p> : <p>{teachers.fullName} is single.</p>
            }
        </div>
    )
}

export default ReadSpecificTeacher