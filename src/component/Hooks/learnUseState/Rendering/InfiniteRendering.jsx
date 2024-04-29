import React, { useState } from 'react'

const InfiniteRendering = () => {
    let [count, setCount] = useState(0)
    // setCount(count + 1) //this causes infinite rendering
    // to prevent infinite rendering 
    // always place setCount on event (button click, ....) or inside useEffect
    return (
        <div>
            Count 1 is {count}
            <br></br>
            <button onClick={() => { setCount(count + 1) }
            }>Increment</button>
        </div >
    )
}

export default InfiniteRendering