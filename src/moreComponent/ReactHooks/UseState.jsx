import React, { useState } from 'react'

// function countInitial() {
//     console.log("Run FUnction")
//     return 4
// }

const UseState = () => {
    // const [count, setCount] = useState(4)
    // const [count, setCount] = useState(countInitial())
    const [state, setState] = useState({ count: 1, theme: 'blue' })
    const count = state.count
    const theme = state.theme

    function increment() {
        // setCount(prevCount => prevCount - 1)
        setState(prevState => {
            return { ...prevState, count: prevState.count + 1 }
        })
    }
    function decrement() {
        // setCount(prevCount => prevCount + 1)
        setState(prevState => {
            return { ...prevState, count: prevState.count - 1 }
        })
    }
    return (
        <div>
            <h2>UseState</h2>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default UseState