import React from 'react'

const RemoveLocalStorageData = () => {
    return (
        <div>RemoveLocalStorageData
            <button onClick={() => {
                localStorage.removeItem("token")
            }}>Remove Token</button>
            <button onClick={() => {
                localStorage.removeItem("name")
            }}>Remove Name</button>
            <button onClick={() => {
                localStorage.removeItem("isMarried")
            }}>Remove IsMarried</button>
        </div>
    )
}

export default RemoveLocalStorageData