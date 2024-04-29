import React from 'react'

const AddDataToSessionStorage = () => {

    let token = "123892"
    sessionStorage.setItem("token", token)
    sessionStorage.setItem("name", "Odessys")
    return (
        <div>AddDataToSessionStorage</div>
    )
}

export default AddDataToSessionStorage