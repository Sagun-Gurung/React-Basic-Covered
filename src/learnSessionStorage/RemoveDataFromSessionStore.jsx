import React from 'react'

const RemoveDataFromSessionStore = () => {
    return (
        <div>RemoveDataFromSessionStore
            <button onClick={() => {
                sessionStorage.removeItem("token")
            }}>Remove Token</button>
        </div>
    )
}

export default RemoveDataFromSessionStore