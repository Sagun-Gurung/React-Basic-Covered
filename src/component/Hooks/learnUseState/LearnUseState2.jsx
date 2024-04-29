import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [count1, setCount1] = useState(0)
    return (
        <>
            <p>********  Count1 is {count1}</p>

            <button onClick={() => { setCount1(count1 + 1) }}>Increment</button><br></br>
            <button onClick={() => { setCount1(count1 - 1) }}>Decrement</button><br></br>
            <button onClick={() => { setCount1(0) }}>Reset</button>
        </>
    )
}

export default LearnUseState2