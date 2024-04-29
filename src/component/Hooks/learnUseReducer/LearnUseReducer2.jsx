import React, { useReducer } from 'react'

const LearnUseReducer2 = () => {

    let reducer = (state, action) => {
        return state + 1
    }

    let [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h2>LearnUseReducer2</h2>
            <h1>{state}</h1>
            <button onClick={() => { dispatch() }}>Increment</button>
        </div>
    )
}

export default LearnUseReducer2