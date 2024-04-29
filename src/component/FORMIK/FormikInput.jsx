import { Field } from 'formik'
import React from 'react'

const FormikInput = ({ name, label, type, onChange, required, ...props }) => {

    return (
        <div>
            <Field name={name}>
                {
                    ({ field, form, meta }) => {
                        // console.log("Field: ", field) it is also an object with value, name, onChange and onBlur events= check the console
                        // console.log("Meta: ", meta) and so does meta

                        return (
                            <div>
                                <label htmlFor={name}>{label}{required ? <span>*</span> : null}</label>
                                <input
                                    {...field}
                                    {...props}
                                    id={name}
                                    type={type}
                                    value={meta.value}
                                    onChange={onChange ? onChange : field.onChange}
                                // onChange={(e) => {
                                //     formik.setFieldValue("firstName", e.target.value)
                                // }}
                                ></input>
                                {meta.touched && meta.error ? (<div style={{ color: "red" }}>{meta.error}</div>) : null}
                            </div>
                        )
                    }
                }
            </Field>
        </div>
    )
}

export default FormikInput