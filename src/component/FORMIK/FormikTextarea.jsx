import { Field } from 'formik'
import React from 'react'

const FormikTextarea = ({ name, label, type, onChange, required, ...props }) => {
    return (
        <div>
            <Field name={name}>
                {
                    ({ field, form, meta }) => {
                        return (
                            <div>
                                <label htmlFor={name}>{label}{required ? <span>*</span> : null}</label>
                                <textarea {...field}
                                    id={name}
                                    type='text'
                                    value={meta.value}
                                    onChange={onChange ? onChange : field.onChange}
                                    {...props}
                                // onChange={(e) => {
                                //     formik.setFieldValue("firstName", e.target.value)
                                // }}
                                ></textarea>
                                {meta.touched && meta.error ? (<div style={{ color: "red" }}>{meta.error}</div>) : null}
                            </div>
                        )
                    }
                }
            </Field>
        </div>
    )
}

export default FormikTextarea