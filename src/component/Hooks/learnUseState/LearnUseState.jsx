import React, { useState } from 'react'

const LearnUseState = () => {
    // let age = 29

    let [age, setAge] = useState(30)
    let [name, setName] = useState("Momo")
    return (
        <div>
            {age}<br></br>
            {name}<br></br>
            <button onClick={() => {
                setAge(60);

                setName("Chowmein")
            }}>Click Me</button>
        </div>
    )
}

export default LearnUseState