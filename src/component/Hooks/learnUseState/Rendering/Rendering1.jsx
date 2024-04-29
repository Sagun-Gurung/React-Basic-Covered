import React, { useState } from 'react'

const Rendering1 = () => {

    let [count1, setCount1] = useState(0)

    let [count2, setCount2] = useState(100)

    return (
        <>
            <p>Count 1 is {count1}</p>
            <button onClick={() => { setCount1(count1 + 1) }}>Increment 1</button>


            <p>Count 2 is {count2}</p>
            <button onClick={() => { setCount2(count2 + 100) }}>Increment 2</button>
        </>
    )
}

export default Rendering1

/*
    useState()
        1) the useState() function updates the variable and render the components after change
        2) the state variable should change to render
            = component will only render if state variable changes, if it does not
            it won't render 
        3) when a component is render by count1 state variable(the count1 variable will be updated)
            (other state variable such as count2, .... will store previous value)
        

*/