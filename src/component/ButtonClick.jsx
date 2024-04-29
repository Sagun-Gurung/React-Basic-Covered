import React from 'react'

const ButtonClick = () => {
    return (
        <div>
            <button onClick={()=>console.log("Button is clicked")}>Click Me</button>
        </div>
    )
}

export default ButtonClick