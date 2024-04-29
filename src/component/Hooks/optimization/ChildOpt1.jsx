import React, { memo } from 'react'

const ChildOpt1 = ({ name }) => {
    console.log("I am child", name)
    return (
        <div>
            <h3>ChildOpt1</h3>
            <p> My name is {name}</p>
        </div>
    )
}

export default memo(ChildOpt1)
//using memo controls the child from re-rendering unless any state of child is changed