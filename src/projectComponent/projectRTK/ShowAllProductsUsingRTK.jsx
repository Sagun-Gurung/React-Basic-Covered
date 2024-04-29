import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteProductMutation, useReadProductsQuery } from '../services/api/productService'

const ShowAllProductsUsingRTK = () => {

    let [deleteId, setDeleteId] = useState(0)

    let {
        isError: isErrorReadProduct,
        isLoading: isLoadingReadProduct,
        data: dataReadProduct,
        error: errorReadProduct
    } = useReadProductsQuery() //Query gives object

    // console.log(dataReadProduct?.result)
    // let products = data?.result || []
    let products = dataReadProduct?.result

    let [
        deleteProduct,
        {
            isError: isErrorDeleteProduct,
            isSuccess: isSuccessDeleteProduct,
            isLoading: isLoadingDeleteProduct,
            error: errorDeleteProduct
        }] = useDeleteProductMutation() //Mutation gives array

    //For reading
    useEffect(() => {
        if (isErrorReadProduct) console.log("*****", errorReadProduct?.error)
    }, [isErrorReadProduct, errorReadProduct?.error])

    // For deleting
    useEffect(() => {
        if (isErrorDeleteProduct) console.log("*****", errorDeleteProduct?.error)
    }, [isErrorDeleteProduct, errorDeleteProduct?.error])

    useEffect(() => {
        if (isSuccessDeleteProduct) console.log("Product Deleted Successfully")
    }, [isSuccessDeleteProduct])

    let navigate = useNavigate()


    return (
        <>
            <div id='productList'>
                {
                    isLoadingReadProduct ? <div> <h1>...Loading</h1> </div> :
                        <div >
                            <h3>Here are the lists of all the products:-</h3>
                            {
                                products?.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <p>{i + 1} {item.name}</p>

                                            <p>It costs Rs.{item.price}</p>

                                            <button onClick={() => {
                                                navigate(`/products/${item._id}`)
                                            }}>View Details</button>

                                            <button onClick={() => {
                                                navigate(`/products/update/${item._id}`)
                                            }}>Update Product</button>

                                            <button
                                                onClick={async () => {
                                                    deleteProduct(item._id)
                                                    setDeleteId(item._id)
                                                }}>
                                                {isLoadingDeleteProduct && item._id === deleteId
                                                    ? "deleting..."
                                                    : "Delete Product"}
                                                {/* Delete this Product */}
                                            </button>

                                            <hr></hr>

                                        </div>
                                    )
                                })
                            }
                        </div>
                }

            </div>
        </>
    )
}

export default ShowAllProductsUsingRTK