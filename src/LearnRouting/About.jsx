import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const About = () => {

    // http://localhost:3000/about?name=momo&price=200
    const [queries] = useSearchParams()
    const navigate = useNavigate()
    return (
        <div>
            About
            <br></br>
            Queries sent are {queries}
            <br></br>
            Name is {queries.get("name")}
            <br></br>
            Price is {queries.get("price")}
            <br></br>
            <br></br>
            <button onClick={() => {
                navigate("/contact")
                // navigate("/contact", { replace: true })
            }}>Go to Contact Page</button>
        </div>
    )
}

export default About