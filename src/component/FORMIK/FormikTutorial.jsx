import { Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import FormikCheckbox from './FormikCheckbox'
import FormikInput from './FormikInput'
import FormikRadio from './FormikRadio'
import FormikSelect from './FormikSelect'
import FormikTextarea from './FormikTextarea'

const FormikTutorial = () => {

    let initialValues = {
        fullName: "",
        email: "",
        password: "",
        gender: "male",
        country: "1",
        isMarried: false,
        description: "",
        phoneNumber: 0,
        age: 0,
    }

    let genders = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
    ]

    let countries = [
        { label: "Select Country", _id: " ", disabled: true },
        { label: "Nepal", _id: "1" },
        { label: "India", _id: "2" },
        { label: "England", _id: "3" },
        { label: "Australia", _id: "4" },
        { label: "USA", _id: "5" },
    ]

    let submitValue = (value, other) => {
        console.log("Value", value)
    }

    let validationSchema = yup.object({
        fullName: yup.string()
            .required("Full name is required")
            .min(3, "Must have atleast 3 characters")
            .max(50, "Not more than 50 characters")
            .matches(/^[A-Za-z]+$/, "Invalid Name"),
        email: yup.string().required("Email is required")
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please input valid email"),
        password: yup.string().required("Password is required")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_])[A-Za-z\d!@#$%^&*()-_]{8,}$/, "Please write valid passwords"),
        gender: yup.string().required("Gender is required"),
        country: yup.string().required("Country is required"),
        isMarried: yup.boolean().required("Marriage status is required"),
        description: yup.string().required("Description is required"),
        phoneNumber: yup.number().required("Phone number is required"),
        age: yup.number().required("Age is required")
            .min(18, "Must be older than 17 years old")
    })


    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={submitValue}
                validationSchema={validationSchema}
            >
                {
                    (formik) => {
                        return (
                            <Form>

                                <FormikInput
                                    name="fullName"
                                    label="Full Name"
                                    type="text"
                                    required={true}
                                    onChange={e => {
                                        formik.setFieldValue("fullName", e.target.value)
                                    }}
                                >
                                </FormikInput>

                                <FormikInput
                                    name="email"
                                    label="Email"
                                    type="email"
                                    required={true}
                                    onChange={e => {
                                        formik.setFieldValue("email", e.target.value)
                                    }}
                                >
                                </FormikInput>

                                <FormikInput
                                    name="password"
                                    label="Password"
                                    type="password"
                                    required={true}
                                    onChange={e => {
                                        formik.setFieldValue("password", e.target.value)
                                    }}
                                >
                                </FormikInput>

                                <FormikRadio
                                    name="gender"
                                    label="Gender: "
                                    required={true}
                                    genders={genders}
                                    onChange={e => {
                                        formik.setFieldValue("gender", e.target.value)
                                    }}>
                                </FormikRadio>

                                <FormikSelect
                                    name="country"
                                    label="Country"
                                    required={true}
                                    countries={countries}
                                    onChange={e => {
                                        formik.setFieldValue("country", e.target.value)
                                    }}>
                                </FormikSelect>

                                <FormikTextarea
                                    name="description"
                                    label="Description"
                                    type="text"
                                    required={true}
                                    onChange={e => {
                                        formik.setFieldValue("description", e.target.value)
                                    }}
                                ></FormikTextarea>

                                <FormikCheckbox
                                    name="isMarried"
                                    label="Is Married? "
                                    required={true}
                                    onChange={e => {
                                        formik.setFieldValue("isMarried", e.target.checked)
                                    }}></FormikCheckbox>

                                <FormikInput
                                    name="phoneNumber"
                                    label="Phone number: "
                                    type="number"
                                    required={true}
                                    onChange={e => {
                                        formik.setFieldValue("phoneNumber", e.target.value)
                                    }}></FormikInput>

                                <FormikInput
                                    name="age"
                                    label="Age"
                                    type="number"
                                    required={true}
                                    onChange={e => {
                                        formik.setFieldValue("age", e.target.value)
                                    }}></FormikInput>

                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div >
    )
}

export default FormikTutorial