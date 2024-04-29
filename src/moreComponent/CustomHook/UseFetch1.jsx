import React, { useEffect, useState } from 'react'

const useFetch1 = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const response = await fetch(url)
                if (!response.ok) { throw new Error("Failed to fetch data") }
                const result = await response.json()//to get the data
                // console.log(result)
                setData(result)
            } catch (error) {
                // console.log()
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData() //calling the function

        // cleanup function
        return () => { }//this is optional
    }, [url])//dependency array with the url

    return { data, isLoading, error }
}

export default useFetch1