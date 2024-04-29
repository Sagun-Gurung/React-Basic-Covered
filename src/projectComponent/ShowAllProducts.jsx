import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ShowAllProducts = () => {

    let [products, setProducts] = useState([])
    let navigate = useNavigate()

    let getProducts = async () => {
        try {
            let result = await axios({
                url: `http://localhost:8000/products`,
                method: "get"
            })
            // console.log(result.data.result)
            setProducts(result.data.result)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    let deleteProduct = async (id) => {
        try {
            await axios({
                url: `http://localhost:8000/products/${id}`,
                method: "delete"
            })
            getProducts()
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div id='productList'>
                <h3>Here are the lists of all the products:-</h3>
                {
                    products.map((item, i) => {
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
                                    onClick={() => { deleteProduct(item._id) }}>Delete this Product</button>

                                <hr></hr>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShowAllProducts