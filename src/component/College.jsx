import React from 'react'

const College = ({ name, cost, address }) => {
    return (
        <div>
            <p> College name is {name}</p>
            <p>Cost is {cost}</p>
            <p>Address is {address}</p>
        </div>
    )
}

export default College