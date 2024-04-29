import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    // let [data, setData] = useState("Momo")

    let [age, setAge] = useState(0)

    return (
        <div>
            <h2>Parent</h2>
            {/* <p>{data}</p> */}
            {/* <Child data={data}></Child> */}
            <Child setAge={setAge}></Child>
            <p>{age}</p>
        </div>
    )
}

export default Parent