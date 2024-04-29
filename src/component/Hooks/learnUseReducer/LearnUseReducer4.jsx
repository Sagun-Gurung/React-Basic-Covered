import React, { useReducer } from 'react'

const LearnUseReducer4 = () => {

    let initialState = { count: 0 }

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment": return { count: state.count + 1 }
            case "decrement": return { count: state.count - 1 }
            default: throw new Error("Unexpected Action!!")
        }
    }

    let [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <h2>{state.count}</h2>

            <button onClick={() => { dispatch({ type: "increment" }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: "decrement" }) }}>Decrement</button>

        </div>
    )
}

export default LearnUseReducer4