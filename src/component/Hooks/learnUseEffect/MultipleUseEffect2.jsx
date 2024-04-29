import React, { useEffect } from 'react'

// we can use multiple useEffect()  function

const MultipleUseEffect2 = () => {

    console.log("first")
    useEffect(() => {
        console.log("useEffect 1")
    }, [])

    useEffect(() => {
        console.log("useEffect 2")
    }, [])
    return (
        <div>MultipleUseEffect2</div>
    )
}

export default MultipleUseEffect2