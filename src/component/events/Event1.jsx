import React, { useState } from 'react'

const Event1 = () => {


    let mouseOverEvent = () => { console.log("Mouse Over") }
    let mouseOutEvent = () => {
        console.log("Mouse Out")
    }
    let mouseDownEvent = () => { console.log("Mouse DOWN!!!!!!!!!!!!!!!") }
    let mouseUpEvent = () => { console.log("MOUSE UP!!!!!!!!!!") }
    let mouseMoveEvent = () => { console.log("~~~~~~~~~~~~Mouse Moved!!!!!!!!") }
    let focusEvent = () => { console.log("FOCUS ON THY HOLY MOUSE!!!") }
    return (
        <>
            <img src='./mouse1.jpg'
                onMouseOut={mouseOutEvent}
                onMouseOver={mouseOverEvent}
                onMouseDown={mouseDownEvent}
                onMouseUp={mouseUpEvent}
                onMouseMove={mouseMoveEvent}
            // onFocus={focusEvent}
            >
            </img>
            <br></br> <hr></hr>
            {/* <img src='./mouse2.jpg' onMouseOut={mouseOutEvent}></img> */}
            {/* <button onMouseOut={mouseOutEvent}>Mouse Out</button> */}
        </>
    )
}

export default Event1