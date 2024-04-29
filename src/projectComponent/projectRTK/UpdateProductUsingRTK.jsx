import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../ProductForm'
import { useReadProductByIdQuery, useUpdateProductMutation } from '../services/api/productService'

const UpdateProductUsingRTK = () => {

    let params = useParams()
    let navigate = useNavigate()

    let [updateProduct,
        {
            isError: isErrorUpdateProduct,
            isSuccess: isSuccessUpdateProduct,
            isLoading: isLoadingUpdateProduct,
            error: errorUpdateProduct
        }] = useUpdateProductMutation()

    let {
        isError: isErrorReadProductById,
        error: errorReadProductById,
        data: dataReadById
    } = useReadProductByIdQuery(params.id)

    let product = dataReadById?.result || {}
    // console.log(product)

    let submitValue = async (values, other) => {
        updateProduct({ id: params.id, body: values })
        navigate(`/products/${params.id}`)
    }

    useEffect(() => {
        if (isErrorUpdateProduct) console.log(errorUpdateProduct.error)
    }, [isErrorUpdateProduct, errorUpdateProduct])

    useEffect(() => {
        if (isSuccessUpdateProduct) console.log("Product Updated Successfully")
    }, [isSuccessUpdateProduct])

    useEffect(() => {
        if (isErrorReadProductById) console.log(errorReadProductById.error)
    }, [isErrorReadProductById, errorReadProductById])

    // let getProduct = async () => {
    //     try {
    //         let result = await axios({
    //             url: `http://localhost:8000/products/${params.id}`,
    //             method: 'get'
    //         })
    //         // console.log(result.data.result)
    //         setProduct(result.data.result)

    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    // useEffect(() => { getProduct() }, [])


    return (
        <div id='updateProducts'>
            <h3>Update Product</h3>
            <ProductForm buttonName='Update Product'
                isLoading={isLoadingUpdateProduct}
                onSubmit={submitValue}
                product={product}>
            </ProductForm>
        </div>
    )
}

export default UpdateProductUsingRTK