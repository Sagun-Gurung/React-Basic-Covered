import React, { useEffect, useState } from 'react'

/* cleanup function are those function which is returned by useEffect hook 

Why is it named as cleanup function?
=> it is used to clean up or stop any other functions or works  

Cleanup function only execute after the dependency is triggered
Cleanup function won't run in the first execution


Mount = First render =? all code executes except cleanup function
Unmount => Only Cleanup function is executed
*/
const LearnCleanUpFunction = () => {

    let [count, setCount] = useState(1)

    // useEffect(() => {
    //     console.log("I am useEffect 1") //this will execute at the beginning
    //     return () => {
    //         console.log("I am CleanUp UseEffect")
    //         //it will execute after the dependency is triggered or component is unmounted
    //     }
    // }, [count])

    useEffect(() => {
        let interval = setInterval(() => {
            console.log("I am set Interval and will execute after 2 sec")
        }, 2000)

        return () => {
            console.log("Clearing Interval")
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h2>LearnCleanUpFunction</h2>
            <p>Count is {count}</p>
            <button type='button'
                onClick={() => {
                    setCount(count + 1)
                }}>Increment</button>
        </div>
    )
}

export default LearnCleanUpFunction