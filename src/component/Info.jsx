import React from 'react'

const Info = (props) => {
    return (
        <div>
            <p>Name is {props.name}</p>
            <p>Age is {props.age}</p>
            <p>Address is {props.address}</p>
        </div>
    )
}

export default Info