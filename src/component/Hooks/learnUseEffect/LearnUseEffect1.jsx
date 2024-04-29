import React, { useEffect } from 'react'

// useEffect is an asynchronous function which means it runs at last after all the code is executed
// useEffect will run just after the dom(div/p, etc) is printed on the browser

/* OUt put will be a, b, "This is useEffect" */

const LearnUseEffect1 = () => {

    console.log("a")

    useEffect(() => {
        console.log("This is useEffect")
    }, [])
    console.log("b")
    return (
        <div>LearnUseEffect1</div>
    )
}

export default LearnUseEffect1