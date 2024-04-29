import React from 'react'

const EffectOfData = () => {
    let name = "Mortal"
    let age = 22
    let isMarried = true
    let tags = [<div>Tag 1</div>, <div>Tag 2</div>, <div>Tag 3</div>]
    let info = { name: "Popcorn", cost: 30 }
    let a = null
    let b = undefined
    return (
        <div style={{ backgroundColor: "red" }}>
            {/* {name} */}
            {/* {age} */}
            {tags}
            {/* <p>{info}</p> */}
            <p>{info.name}</p>
            <p>{info.cost}</p>
            {a} {b}
        </div>
    )
}
/* 
    boolean are not displayed on browser
    when array is placed in the browser-> it place element one by one (note [] and, are not written in browser)
    we cannot place object on browser Error: Objects are not valid as a React child
*/
export default EffectOfData