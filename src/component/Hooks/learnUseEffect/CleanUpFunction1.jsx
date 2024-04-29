import React, { useEffect, useState } from 'react'

const CleanUpFunction1 = () => {

    let [seconds, setSeconds] = useState(0)

    useEffect(() => {
        let time = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 3000)

        // Cleanup function to clear the interval when the component unmounts or the dependency changes
        return () => {
            clearInterval(time)
        }
    }, [])// Empty dependency array means this effect runs only once, like componentDidMount
    return (
        <div>
            <h2>CleanUpFunction1</h2>
            <p> Timer is {seconds} seconds</p>
        </div>
    )
}

export default CleanUpFunction1