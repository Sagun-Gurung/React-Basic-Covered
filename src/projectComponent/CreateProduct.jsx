import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from './ProductForm'

const CreateProduct = () => {
    let navigates = useNavigate()

    let submitValue = async (values, other) => {
        // console.log("Value: ", value)

        try {
            let result = await axios({
                url: `http://localhost:8000/products`,
                method: "post",
                data: values,
            })
            console.log(result)
            navigates("/products")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div id='createProductForm'>
                <ProductForm buttonName='Create Product' onSubmit={submitValue}></ProductForm>
                {/* <Formik initialValues={initialValues}
                    onSubmit={submitValue}
                    validationSchema={validationSchema}
                    enableReinitialize={true}>
                    {
                        (formik) => {
                            return (
                                <Form>
                                    <FormikInput name="name" label="Name" type="text" required={true}></FormikInput>
                                    <FormikInput name="price" label="Price" type="number" required={true}></FormikInput>
                                    <FormikInput name="quantity" label="Quantity" type="number" required={true}></FormikInput>

                                    <button type='submit'>Create Product</button>
                                </Form>
                            )
                        }
                    }
                </Formik> */}
            </div>
        </>
    )
}

export default CreateProduct