import React, { useState } from 'react'

const HideAndShowImage = () => {
    let [show, setShow] = useState(true)
    let handleShow = () => { setShow(true) }
    return (

        <div>
            {show ? <img src='./favicon.ico'></img> : null}
            <br></br>
            <button onClick={handleShow}>Show</button><br></br>
            <button onClick={() => { setShow(false) }}>Hide</button>
        </div>
    )
}

export default HideAndShowImage