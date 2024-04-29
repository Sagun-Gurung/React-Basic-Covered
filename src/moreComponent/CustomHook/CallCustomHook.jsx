import React from 'react'
import useFetch1 from './UseFetch1'

const CallCustomHook = () => {

    const { data, isLoading, error } = useFetch1("http://localhost:8000/teachers")

    console.log(data)
    if (isLoading) return <div>Is loading....</div>
    if (error) return <div>Error {error.message}</div>


    return (
        <div>
            <h2>CallCustomHook</h2>
            <p>{data.message}</p>
            <p>{data.fullName}</p>
            {/* {
                data.map((item, i) => {
                    <div key={i}>{item.fullName}</div>
                })
            } */}
        </div>
    )
}

export default CallCustomHook