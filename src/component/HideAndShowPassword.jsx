import React, { useState } from 'react'

const HideAndShowPassword = () => {
    let [password, setPassword] = useState("")
    let [type, setType] = useState("password")
    return (
        <div>
            <form>
                <div>
                    <h2>HideAndShowPassword</h2>
                    <label htmlFor='password'>Password: </label>
                    <input type={type} id='password' value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}></input>
                </div>
                <button type='button' onClick={() => {
                    // setType("text")
                    (type === "password") ? setType("text") : setType("password")
                }}>
                    {type === "text" ? "Hide Password" : "Show Password"}
                </button>

            </form>
        </div>
    )
}

export default HideAndShowPassword