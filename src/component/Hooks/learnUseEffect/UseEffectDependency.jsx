import React, { useEffect, useState } from 'react'

const UseEffectDependency = () => {
    let a = 12
    let b = 23
    let [age, setAge] = useState(12)
    let [name, setName] = useState("Momo")

    useEffect(() => {
        console.log(b)
        console.log(name)
    }, [b, name])
    return (
        <div>UseEffectDependency</div>
    )
}

export default UseEffectDependency