import React from 'react'

const GetLocalStorageData = () => {
    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("age"))
    console.log(localStorage.getItem("token"))
    console.log(localStorage.getItem("isMarried"))

    return (
        <div>Get Local Storage data</div>
    )
}

export default GetLocalStorageData