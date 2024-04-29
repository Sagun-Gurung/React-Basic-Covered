import React, { useState } from 'react'

const HideAndShowTry1 = () => {
    let [show, setShow] = useState(true)

    let handleImage = () => {
        setShow(!show)
    }

    return (
        <div>
            <h2>HideAndShowTry1</h2>

            {show ? <img src='./cat.jpg'></img> : null}
            <br></br>
            <button onClick={handleImage}>Show/Hide</button>
        </div >
    )
}

export default HideAndShowTry1