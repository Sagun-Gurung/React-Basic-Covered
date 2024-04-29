import React, { useRef, useState } from 'react'
import LearnUseRef2 from './LearnUseRef2'

const LearnUseRef = () => {

    let [value, setValue] = useState("Momo")

    let inputRef = useRef()
    let inputRef2 = useRef()
    return (
        <div>
            {/* <div>
                <h2 ref={inputRef}>LearnUseRef</h2>
                <input></input><br></br>
                <input ref={inputRef2}></input><br></br>
                <button type='button'
                    onClick={() => {
                        inputRef2.current.focus()
                        inputRef2.current.style.backgroundColor = "red"
                    }}>Click Me</button>
                <button type="button"
                    onClick={() => {
                        inputRef.current.style.color = "blue"
                    }}>H2 Change</button>

            </div> */}

            <LearnUseRef2 value={value} setValue={setValue}></LearnUseRef2>
        </div>
    )
}

export default LearnUseRef