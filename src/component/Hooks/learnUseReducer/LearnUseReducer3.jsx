import React, { useReducer } from 'react'

const LearnUseReducer3 = () => {
    let initialState = { count: 0 }

    let reducer = (state, action) => {

        // if (action === "increment") { return state + 1 }
        // else if (action === "decrement") { return state - 1 }
        // else { return state }

        switch (action) {
            case "increment": return state += 1
            case "decrement": return state -= 1
        }
    }


    let [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <h2>{state}</h2>
            <button onClick={() => { dispatch("increment") }}>Increment</button>
            <button onClick={() => { dispatch("decrement") }}>Decrement</button>
        </div>
    )
}

export default LearnUseReducer3