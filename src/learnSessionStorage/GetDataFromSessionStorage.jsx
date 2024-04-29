import React from 'react'

const GetDataFromSessionStorage = () => {

    console.log(sessionStorage.getItem("token"))
    console.log(sessionStorage.getItem("name"))

    return (
        < div > GetDataFromSessionStorage</div >
    )
}

export default GetDataFromSessionStorage