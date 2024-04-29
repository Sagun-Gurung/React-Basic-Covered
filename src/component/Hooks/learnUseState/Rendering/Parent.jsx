import React from 'react'
import Child from './Child'

const Parent = ({ count1 }) => {
    return (
        <div> I am a Parent
            <Child count1={count1}></Child>
        </div>
    )
}

export default Parent