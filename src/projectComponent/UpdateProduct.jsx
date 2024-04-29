import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from './ProductForm'

const UpdateProduct = () => {

    let [product, setProduct] = useState({})
    let params = useParams()
    let navigate = useNavigate()


    let submitValue = async (values, other) => {
        try {
            let result = await axios({
                url: `http://localhost:8000/products/${params.id}`,
                method: "patch",
                data: values
            })
            // console.log(result)
            navigate(`/products/${params.id}`)
        } catch (error) {
            console.log(error.message)
        }
    }

    let getProduct = async () => {
        try {
            let result = await axios({
                url: `http://localhost:8000/products/${params.id}`,
                method: 'get'
            })
            // console.log(result.data.result)
            setProduct(result.data.result)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => { getProduct() }, [])


    return (
        <div id='updateProducts'>
            <h3>Update Product</h3>
            <ProductForm buttonName='Update Product' onSubmit={submitValue} product={product}></ProductForm>
        </div>
    )
}

export default UpdateProduct