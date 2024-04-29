import React, { useEffect, useRef } from 'react'

const LearnUseRef2 = ({ value, setValue }) => {
    const prevValueRef = useRef()
    // setValue("Momo")

    useEffect(() => {
        prevValueRef.current = value //this will add the prev value to the variable when the page loads
    })

    const hasValueChanged = prevValueRef.current === value
    return (
        <div>
            <h2>LearnUseRef2</h2>
            <p>Current Value is {value}</p>
            <p>Has Value Changed: {hasValueChanged ? "Yes" : "No"}</p>
        </div>
    )
}

export default LearnUseRef2