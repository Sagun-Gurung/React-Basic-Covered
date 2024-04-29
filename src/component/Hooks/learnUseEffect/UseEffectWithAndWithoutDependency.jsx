import React, { useEffect, useState } from 'react'

const UseEffectWithAndWithoutDependency = () => {
    let [count1, setCount1] = useState(0)
    let [count2, setCount2] = useState(100)

    // useEffect(() => {
    //     console.log("useEffect 1")
    // }) //without dependency
    // it will execute in every render

    // useEffect(() => {
    //     console.log("useEffect 2")
    // }, []) //with empty dependency
    // it will execute n first render only

    // useEffect(() => {
    //     console.log("useEffect 3")
    // }, [count1]) //with dependency count1 
    // it will execute in first render and after second render, it will execute only of count1 value changes


    // useEffect(() => {
    //     console.log("useEffect 4")
    // }, [count1, count2]) //with dependency count1 and count2
    // it will execute in first render and after second render,
    // it will execute if both count1 and count2 value changes
    // i.e. it is dependent on both count1 or count2

    return (
        <div>
            <h2>UseEffectWithAndWithoutDependency</h2>
            <p>Count 1 is {count1}</p>
            <p>Count 2 is {count2}</p>

            <button onClick={() => {
                setCount1(count1 + 1)
            }}>Increment Count1</button>
            <button onClick={() => {
                setCount2(count2 + 1)
            }}>Increment Count2</button>
        </div>
    )
}

export default UseEffectWithAndWithoutDependency