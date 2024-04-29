import React, { useState } from 'react'

const HideAndShowImage2 = () => {
    let [show, setShow] = useState(true)
    let handleToggle = () => { setShow(!show) }
    return (
        <div>
            {show ? <img src='./favicon.ico'></img> : null}
            <br></br>
            {/* <button onClick={() => { setShow(!show) }}>Show and Hide</button> */}
            <button onClick={handleToggle}>Show and Hide</button>
        </div>
    )
}

export default HideAndShowImage2