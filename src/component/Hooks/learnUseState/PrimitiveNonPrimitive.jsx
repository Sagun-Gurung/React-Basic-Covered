import React, { useState } from 'react'

const PrimitiveNonPrimitive = () => {
    //Primitive =  1, true, "nitan"...... => === => value
    //Non -Primitive [], {} => === address(memory address)

    //  PRIMITIVE DATA TYPE
    let [count, setCount] = useState(1)
    console.log("This is Primitive", count)

    console.log(0.1 + 0.2)
    // Non Primitive
    let [list, setList] = useState([1, 2, 3])
    console.log("This is Non-Primitive", list)

    return (
        <div>
            {/* it renders when the value changes */}
            <div>
                <h2>Primitive</h2>
                <p>{count}</p>
                <button onClick={() => {
                    setCount(1)
                    // console.log("COunt CHanged")
                }}>Change Count</button>
            </div>
            <hr></hr>
            {/* it renders incase of non primitive */}
            <div>
                <h2> NonPrimitive</h2>
                <p>{list}</p>
                <button onClick={() => {
                    setList([1, 2, 3])
                }}>Change List
                </button>
                {/* <button onClick={() => {
                    list.map((item) => {
                        console.log(item)
                        // return <p>{item}</p>
                    })
                }}>Change Count</button> */}
            </div>
        </div>
    )
}

export default PrimitiveNonPrimitive

/* 
not render case
in case of primitive
    if value do not change

    in case of non-primitive
    if address are same
*/