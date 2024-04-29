import React, { memo } from 'react'

const CallbackChild1 = ({ fun1 }) => {
    console.log("I am child")
    return (
        <div>
            <h2>CallbackChild1</h2>
        </div>
    )
}

export default memo(CallbackChild1)