import axios from "axios";
import { React, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from "../../utils/SweetAlert";

const ReadAllTeacher = () => {

    // let teachers = [
    //     { fullName: "Scylla", age: 300, subject: "Monster", isMarried: false },
    //     { fullName: "Kronos", age: 300, subject: "King", isMarried: true },
    //     { fullName: "Zeus", age: 300, subject: "Lightning", isMarried: true },
    //     { fullName: "Hermes", age: 300, subject: "Messenger", isMarried: false },
    //     { fullName: "Dadaedulus", age: 400, subject: "Craftsman", isMarried: false }
    // ]

    let [teachers, setTeachers] = useState([]) //because data will come in array from database

    let navigate = useNavigate()


    /* 
    useEffect(fun, []) = we use it to hit api at first render
        hit api
        api gives data
        set data to teachers
    */

    const getTeacher = async () => {
        try {
            let result = await axios({
                url: "http://localhost:8000/teachers",
                method: "get"
            })
            // console.log(result)
            console.log(result.data.result)
            setTeachers(result.data.result)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTeacher()
    }, [])



    return (
        <div>
            <ToastContainer></ToastContainer>
            <p>The lists of teachers are: </p>

            {
                teachers.map((item, i) => {
                    return (
                        <div key={i} id='readAll'>
                            <p>{`${i + 1})`} {item.fullName}</p>
                            <button onClick={() => { navigate(`/teachers/${item._id}`) }}>View</button>
                            <button onClick={() => { navigate(`/teachers/update/${item._id}`) }}>Edit</button>

                            {/* <button onClick={async () => {
                                // hit api to delete

                                let result = await axios({
                                    url: `http://localhost:8000/teachers/${item._id}`,
                                    method: "delete",
                                })
                                // console.log(result)
                                // if we have to hit api twice then it is called invalidation
                                getTeacher()
                                toast(result.data.message)
                            }}>Delete</button> */}

                            <button onClick={() => {
                                SweetAlert(getTeacher,
                                    `http://localhost:8000/teachers/${item._id}`)
                            }}>Delete</button>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default ReadAllTeacher