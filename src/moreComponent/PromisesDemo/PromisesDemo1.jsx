import React, { useEffect, useState } from 'react'

const PromisesDemo1 = () => {

    let [teachers, setTeachers] = useState([])

    let myPromise = () => {
        return new Promise((resolve, reject) => {
            fetch("http://localhost:8000/teachers")
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); //it is used to extract json data from http response
                })
                .then(data => {
                    // resolve(data)
                    console.log(data.result)
                    setTeachers(data.result)

                })
                .catch(error => reject(error));
        });
        // myPromise.then(data => setTeachers(data.result)).catch(error => console.log("Error fetching data", error))

    }

    useEffect(() => {
        myPromise()
    }, [])

    return (
        <>
            <h2>My First Promise</h2>
            {/* creating my own first Promises */}

            {teachers.map((item, i) => {
                return (
                    <p key={i}>{item.fullName}</p>
                )
            })}
        </ >
    )
}

export default PromisesDemo1