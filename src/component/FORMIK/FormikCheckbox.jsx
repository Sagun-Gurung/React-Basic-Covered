import { Field } from 'formik'
import React from 'react'

const FormikCheckbox = ({ name, label, onChange, required, ...props }) => {
    return (
        <div>
            <Field name={name}>
                {
                    ({ field, form, meta }) => {
                        return (
                            <div>
                                <label htmlFor={name}>
                                    {label}{required ? <span>*</span> : null}
                                </label>
                                <input
                                    {...field}
                                    {...props}
                                    id={name}
                                    type="checkbox"
                                    checked={meta.value}
                                    onChange={onChange ? onChange : field.onChange}
                                >
                                </input>
                                {meta.touched && meta.error ? (<div style={{ color: "red" }}>{meta.error}</div>) : null}
                            </div>
                        )
                    }
                }
            </Field>
        </div>
    )
}

export default FormikCheckbox