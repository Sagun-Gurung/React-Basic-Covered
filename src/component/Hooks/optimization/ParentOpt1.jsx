import React, { useState } from 'react'
import ChildOpt1 from './ChildOpt1'


/*  useMemo() */

/* 
    when a parent component renders, it's child component renders automatically
    to stop such behavior - we wrap child component by memo(while export
    while parent render child will only render if the props of child are changed)
*/
const ParentOpt1 = () => {
    let [count, setCount] = useState(0)
    let [name, setName] = useState("Potato")

    return (
        <div>
            <h2>ParentOpt1</h2>
            <ChildOpt1 name={name}></ChildOpt1>

            <h2>{count}</h2>
            <br></br>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setName("Fries") }}>Change Name</button>
        </div>
    )
}

export default ParentOpt1