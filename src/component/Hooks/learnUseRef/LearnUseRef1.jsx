import React, { useRef } from 'react'

const LearnUseRef1 = () => {

    let ref1 = useRef()
    let ref2 = useRef()
    let input1 = useRef()

    const changeColor = () => {
        ref1.current.style.color = "red"
        ref2.current.style.color = "blue"
    }

    const handleName = () => {
        input1.current.focus()
        // console.log(input1)
        // input1.current.onmouseover.style.color = "red"
    }

    return (
        <>
            <div>
                <p ref={ref1}>LearnUseRef1</p>
                <p ref={ref2}>LearnUseRef2</p>
                <button type='button' onClick={changeColor}>Change Color</button>
            </div>
            <hr></hr>
            <div>
                <div onClick={handleName}>Name :</div>
                <input type='text' ref={input1}></input>
            </div>
        </>
    )
}

export default LearnUseRef1

/* 
ref is use
if you want to control one element by other element

define useRef
attach ref(in those element which you want to manipulate)

unlike useState which re renders everytime state changes, 
the component do not re render on useRef when state changes
*/