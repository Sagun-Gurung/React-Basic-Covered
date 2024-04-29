import axios from "axios";
import { React, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReadAllUser = () => {

    let [users, setUsers] = useState([]) //because data will come in array from database

    let navigate = useNavigate()

    const getUsers = async () => {
        try {
            let result = await axios({
                url: "http://localhost:8000/web-users",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(result)
            setUsers(result.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div>
            <ToastContainer></ToastContainer>
            <p>The lists of Users are: </p>

            {
                users.map((item, i) => {
                    return (
                        <div key={i} id='readAll'>
                            <p>{`${i + 1})`} {item.fullName}</p>
                            <button onClick={() => { navigate(`/admin/${item._id}`) }}>View</button>
                            <button onClick={() => { navigate(`/admin/update/${item._id}`) }}>Edit</button>
                            <button
                                onClick={async () => {
                                    /* 
                                    hit api to delete 
                                    localhost:8000/web-users/65edafe399fd5d886c4e12d9
                                    */
                                    let result = await axios({
                                        url: `http://localhost:8000/web-users/${item._id}`,
                                        method: "DELETE",
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem("token")}`
                                        }
                                    })
                                    // console.log(result)
                                    //if we have to hit api twice then it is called invalidation
                                    getUsers()
                                    // toast(result.data.message)
                                }}
                            >Delete</button>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default ReadAllUser