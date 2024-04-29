import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../ProductForm'
import { useCreateProductMutation } from '../services/api/productService'

const CreateProductUsingRTK = () => {

    let [createProduct, {
        isError: isErrorCreateProduct,
        isSuccess: isSuccessCreateProduct,
        isLoading: isLoadingCreateProduct,
        error: errorCreateProduct
    }] = useCreateProductMutation()

    let navigate = useNavigate()

    let submitValue = async (values, other) => {
        createProduct(values)
        navigate("/products")
    }

    useEffect(() => {
        if (isSuccessCreateProduct) console.log("Product Created Successfully")
    }, [isSuccessCreateProduct])

    useEffect(() => {
        if (isErrorCreateProduct) console.log("***", errorCreateProduct.error)
    }, [isErrorCreateProduct, errorCreateProduct])

    return (
        <>
            <div id='createProductForm'>
                <ProductForm buttonName='Create Product'
                    isLoading={isLoadingCreateProduct}
                    onSubmit={submitValue}></ProductForm>
            </div>
        </>
    )
}

export default CreateProductUsingRTK