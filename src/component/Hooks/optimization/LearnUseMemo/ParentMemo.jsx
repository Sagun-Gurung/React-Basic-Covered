import React, { useMemo, useState } from 'react'
import LearnUseMemo1 from './LearnUseMemo1'

const ParentMemo = () => {

    let [count, setCount] = useState(0)
    let [name, setName] = useState("Momo")
    let [surname, setSurname] = useState("Noodles")

    let fullname = useMemo(() => {
        return name + surname
    }, [name, surname])

    return (
        <div>
            <h2>ParentMemo</h2>
            <p>Count is {count}</p>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <br></br>
            {/* <p>Name is {name}{surname}</p> */}
            <p>Full name is {fullname}</p>
            <button onClick={() => { setName("Fries") }}>Change Name</button>
            <button onClick={() => { setSurname("Burger") }}>Change SurName</button>
            <LearnUseMemo1 number={55}></LearnUseMemo1>
        </div >
    )
}

export default ParentMemo