import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "../component/FORMIK/FormikInput";

const ProductForm = ({
  buttonName = "Create Product",
  isLoading = false,
  onSubmit = () => {},
  product = {},
}) => {
  let initialValues = {
    name: product.name || "",
    price: product.price || 0,
    quantity: product.quantity || 0,
  };

  let validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    price: yup.number().required("Price of the product is required"),
    quantity: yup.number().required("Quantity of the product is must"),
  });

  return (
    <>
      <div id="createProductForm">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {(formik) => {
            return (
              <Form>
                <FormikInput
                  name="name"
                  label="Name"
                  type="text"
                  required={true}
                ></FormikInput>
                <FormikInput
                  name="price"
                  label="Price"
                  type="number"
                  required={true}
                ></FormikInput>
                <FormikInput
                  name="quantity"
                  label="Quantity"
                  type="number"
                  required={true}
                ></FormikInput>

                <button type="submit">
                  {isLoading ? "...loading" : buttonName}
                  {/* {buttonName} */}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default ProductForm;
