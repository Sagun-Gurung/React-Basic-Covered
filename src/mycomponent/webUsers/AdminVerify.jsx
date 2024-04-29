import React, { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from "axios"

const AdminVerify = () => {

    let [query] = useSearchParams()
    let token = query.get("token")

    let navigate = useNavigate()

    let verifyEmail = async () => {
        try {
            let result = await axios({
                url: `http://localhost:8000/web-users/verify-email`,
                method: "patch",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            navigate('/admin/login')

        } catch (error) {

        }
    }

    useEffect(() => {
        verifyEmail()
    }, [])

    return (
        <div>
            Admin Verified
        </div>
    )
}

export default AdminVerify