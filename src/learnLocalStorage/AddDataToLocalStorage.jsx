import React from 'react'

const AddDataToLocalStorage = () => {

    let token = "2389162"

    localStorage.setItem("token", token)
    localStorage.setItem("name", "Telemakus")
    localStorage.setItem("age", "50") //it will convert the number in string either way
    localStorage.setItem("isMarried", "true")

    // go to console in browser to application to localstorage and localhost

    return (
        <div>AddDataToLocalStorage</div>
    )
}

export default AddDataToLocalStorage