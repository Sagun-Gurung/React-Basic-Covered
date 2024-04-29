import React, { useState } from 'react'

const HideAndShowPassTry = () => {

    let [password, setPassword] = useState("")
    let [type, setType] = useState("password")


    return (
        <>
            <form>

                <h2>HideAndShowPassTry</h2>
                <label htmlFor='password'>Password : </label>
                <input id='password' type={type}
                    value={password}
                    onChange={e => setPassword(e.target.value)}></input>

                <button type='button'
                    onClick={() => {
                        (type === "password") ? setType("text") : setType("password")
                        console.log(password)
                    }}>{type === "password" ? "Show" : "Hide"}</button>
            </form>
        </ >
    )
}

export default HideAndShowPassTry