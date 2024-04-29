import React, { useReducer } from 'react'

const LearnUseReducer1 = () => {
    /* another way to make a variable
    dispatch is used to change useReducer variable or call function
    dispatch is used to call reducer function
    component will render when dispatch is called */

    let reducer = (state, action) => {
        // return action //action = dispatch action
        // return state //state = initial state
        return `${state} ${action} Restaurant`
    }
    // let [state, dispatch] = useReducer(reducer, "jhasfa")
    let [name, dispatch] = useReducer(reducer, "Keema Noodles")
    return (
        <>
            <h2>LearnUseReducer1</h2>
            <p>{name}</p>
            <button onClick={() => { dispatch("Laphing") }}>Calling Reducer</button>
        </>
    )
}

export default LearnUseReducer1