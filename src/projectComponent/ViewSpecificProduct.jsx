import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewSpecificProduct = () => {

    let [product, setProduct] = useState({})
    let params = useParams()
    // console.log(params)

    let viewProduct = async () => {
        try {
            let result = await axios({
                url: `http://localhost:8000/products/${params.id}`,
                method: "get"
            })
            // console.log(result)
            setProduct(result.data.result)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => { viewProduct() }, [])

    return (
        <div id='specificProduct'>
            <h3>Product Details:</h3>
            <p>Product Name is {product.name}</p>
            <p>It costs Rs.{product.price}</p>
            <p>Quantity is {product.quantity}</p>
        </div>
    )
}

export default ViewSpecificProduct