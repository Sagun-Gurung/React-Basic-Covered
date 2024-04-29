import React, { useEffect, useState } from 'react'
/* if dependency is non-primitive
always wrap it by JSON.stringify()
*/
const UseEffectWithStringify = () => {

    let [list, setList] = useState([1, 2]) //non-primitive
    let [name, setName] = useState("Jerry")//primitive

    useEffect(() => {
        console.log(list)
        console.log(name)
    }, [JSON.stringify(list), name])
    return (
        <div>
            <h2>UseEffectWithStringify</h2>
            <p>{list}</p>
            <p>{name}</p>
        </div>
    )
}

export default UseEffectWithStringify