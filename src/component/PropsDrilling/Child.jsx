import React from 'react'

const Child = ({ setAge }) => {
    let age = 20
    return (
        <div>
            <h2>Child</h2>
            {/* <p>{data}</p> */}
            <button onClick={() => { setAge(age) }}>Send</button>
        </div>
    )
}

export default Child
/* sending data from child to parent

*/