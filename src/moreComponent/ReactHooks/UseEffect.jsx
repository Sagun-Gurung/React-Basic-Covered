import React, { useState, useEffect } from 'react'

const UseEffect = () => {

    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    // console.log("Render", window.innerWidth)

    // const handleResize = () => {
    //     setWindowWidth(window.innerWidth)
    // }

    // useEffect(() => {
    //     window.addEventListener("resize", handleResize)
    //     console.log("Resize!")
    //     return () => {
    //         console.log("Cutoff")

    //         window.removeEventListener("resize", handleResize)
    //     }
    // }, [])

    useEffect(() => {
        console.log("Resource Type Changed")
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))

        return () => {
            console.log("Cleanup FUnction")
        }
    }, [resourceType])

    return (
        <>
            <h2>UseEffect</h2>

            {/* <div>
                {windowWidth}
            </div> */}


            <div>
                <button onClick={() => setResourceType('posts')}> Posts</button>
                <button onClick={() => setResourceType('users')}> Users</button>
                <button onClick={() => setResourceType('comments')}> Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {
                items.map((item, i) => {
                    return <pre key={i}>{JSON.stringify(item)}</pre>
                })
            }


        </ >
    )
}

export default UseEffect