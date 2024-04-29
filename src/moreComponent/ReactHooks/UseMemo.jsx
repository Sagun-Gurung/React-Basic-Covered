import React, { useState, useMemo, useEffect } from 'react'

const UseMemo = () => {
    let [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    // const doubleNumber = slowFunction(number)
    const doubleNumber = useMemo(() => { return slowFunction(number) }, [number])
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log("ThemeSTyles has changed")
    }, [themeStyles])
    return (
        <>
            <h2>UseMemo</h2>
            <input type='number' value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}>
            </input>

            <button onClick={() => {
                setDark(prevDark => !prevDark)
            }}>Change Theme</button>

            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}
function slowFunction(num) {
    console.log("Calling Slow Function")
    for (let i = 0; i <= 100000000; i++) { } //just to make the function slow
    return num * 2
}

export default UseMemo