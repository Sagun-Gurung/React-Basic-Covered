import React, { useMemo } from 'react'

const LearnUseMemo1 = ({ number }) => {

    const calculateFactorization = (num) => {
        let result = 1
        for (let i = 1; i <= num; i++) {
            result *= i
            // console.log(result)

        }
        return result
    }
    // Memoizing Expensive Computations:
    const factorial = useMemo(() => calculateFactorization(number), [number])

    return (
        <div>
            <h2>LearnUseMemo1</h2>
            <p>Factorial of {number} is {factorial}</p>
        </div>
    )
}

export default LearnUseMemo1