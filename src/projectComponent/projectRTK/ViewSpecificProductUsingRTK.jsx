import React, { useEffect } from 'react'
import { useReadProductByIdQuery } from '../services/api/productService'
import { useParams } from 'react-router-dom'

const ViewSpecificProduct = () => {

    let params = useParams()
    // console.log(params.id)
    let {
        isError: isErrorViewSpecific,
        isLoading: isLoadingViewSpecific,
        data: dataViewSpecific,
        error: errorViewSpecific
    } = useReadProductByIdQuery(params.id)

    // console.log(dataViewSpecific?.result)
    let product = dataViewSpecific?.result || {}

    useEffect(() => {
        if (isErrorViewSpecific) console.log(errorViewSpecific.error)
    }, [isErrorViewSpecific, errorViewSpecific])

    return (
        <div id='specificProduct'>
            {isLoadingViewSpecific ? "....Loading" : <div>
                <h3>Product Details:</h3>
                <p>Product Name is {product.name}</p>
                <p>It costs Rs.{product.price}</p>
                <p>Quantity is {product.quantity}</p>
            </div>}
        </div>

    )
}

export default ViewSpecificProduct