import React from 'react'
import { useParams } from 'react-router-dom'

const GetDynamicRouteParameter = () => {
    // http://localhost:3000/b/asds/id/asfsa
    const params = useParams()
    return (
        <div>
            Dynamic Router
            <br></br>
            {params.id1}
            <br></br>
            {params.id2}
        </div>
    )
}

export default GetDynamicRouteParameter