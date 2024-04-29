import React from 'react'

const Child2 = ({ fun1, fun2 }) => {
    let data = "Chowmein"
    return (
        <div>Child2

            <button onClick={() => {
                fun1(data)
                fun2("Butter")
            }}> Send Data</button>
        </div>
    )
}

export default Child2