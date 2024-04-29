import React from 'react'

const TernaryOperator1 = () => {
    let age = 36
    return (
        <div>
            {
                age < 18 ? (<div>Underage</div>)
                    : age >= 18 && age <= 60 ? (<div>Adult</div>)
                        : age > 60 ? (<div>Old</div>)
                            : null
            }
        </div>
    )
}

export default TernaryOperator1