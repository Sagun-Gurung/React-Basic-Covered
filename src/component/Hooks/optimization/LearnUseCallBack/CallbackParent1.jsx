import React, { useCallback, useState } from 'react'
import CallbackChild1 from './CallbackChild1'

const CallbackParent1 = () => {
    let [count, setCount] = useState(0)
    console.log("I am parent")

    let fun1 = useCallback(() => {
        console.log("I am Callback")
    }, [])
    // [] = here represent previous function
    return (
        <div>
            <h2>CallbackParent1</h2>
            <CallbackChild1 fun1={fun1}></CallbackChild1>
            <h2>{count}</h2>
            <br></br>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
        </div>
    )
}

export default CallbackParent1