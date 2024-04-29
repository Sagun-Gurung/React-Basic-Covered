import React, { useState } from 'react'
import Parent from './Parent'

const GrandParent = () => {
    let [count1, setCount1] = useState(0)
    return (
        <div>
            <p>Count 1 is {count1}</p>
            <button onClick={() => { setCount1(count1 + 1) }}>Increment 1</button>
            <Parent count1={count1}></Parent>
        </div>
    )
}

export default GrandParent