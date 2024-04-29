import React, { useState } from 'react'

const Form2 = () => {

    /* Events in form:
    onSubmit
    onChange
    onFocus
    onBlur
    */

    /*   
        input       value           e.target.value
        all         value           e.target.value i
        checkbox    checked         e.target.checked
        radio       checked         e.target.value
    */

    let [fullName, setFullName] = useState("")
    let [address, setAddress] = useState("")
    let [email, setEmail] = useState("")
    let [description, setDescription] = useState("")
    let [isMarried, setIsMarried] = useState(false)
    let [country, setCountry] = useState("nepal")
    let [gender, setGender] = useState("male")

    let countries = [
        { label: "Nepal", _id: "1" },
        { label: "India", _id: "2" },
        { label: "England", _id: "3" },
        { label: "Australia", _id: "4" },
    ]

    let genders = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
    ]

    let handleSubmit = (e) => {
        e.preventDefault()

        let data = {
            fullName: fullName,
            address: address,
            email: email,
            description: description,
            isMarried: isMarried,
            country: country,
            gender: gender
        }
        console.log("Form is submitted", data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='fullName'>Full Name</label>
                    <input id='fullName' type='text'
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value)
                        }}></input>
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input id='address' type='text'
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}></input>
                </div>
                <div>
                    <textarea name="description" id="description" cols="30" rows="10" value={description}
                        onChange={e => {
                            setDescription(e.target.value)
                        }}>
                    </textarea>
                </div>
                <div>
                    <label htmlFor="isMarried">Is Marriage</label>
                    <input id="isMarried" type='checkbox' checked={isMarried}
                        onChange={e => {
                            setIsMarried(e.target.checked)
                        }}></input>
                </div>
                {/* Select */}
                <div>
                    <label htmlFor="country">Country</label>
                    {/* <select id='country' value={country} onChange={e => { setCountry(e.target.value) }}>
                        <option value="us">US</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                    </select> */}
                    <select id='country' value={country} onChange={e => {
                        setCountry(e.target.value)
                    }}>
                        {countries.map((item, i) => {
                            return (
                                <option key={i} value={item._id}>
                                    {item.label}
                                </option>
                            )
                        })}
                    </select>

                </div>
                {/* Radio Button */}
                {/* <div>
                    <label htmlFor='male'>Gender: </label>
                    <br></br>
                    <label htmlFor='male'>Male</label>
                    <input type='radio' id='male' value='male'
                        checked={gender === 'male'}
                        onChange={(e) => { setGender(e.target.value) }}
                    ></input>
                    <label htmlFor='female'>Female</label>
                    <input type='radio' id='female' value="female"
                        checked={gender === 'female'}
                        onChange={(e) => { setGender(e.target.value) }}></input>
                    <label htmlFor='others'>Others</label>
                    <input type='radio' id='others' value="others"
                        checked={gender === 'others'}
                        onChange={(e) => { setGender(e.target.value) }}></input>
                </div> */}
                <div>
                    <label htmlFor='male'>Gender: </label>
                    <br></br>
                    {
                        genders.map((item, i) => {
                            return (
                                <span key={i}>
                                    <label htmlFor={item.value}>{item.label}</label>
                                    <input type="radio" id={item.value}
                                        value={item.value}
                                        checked={gender === item.value}
                                        onChange={(e) => { setGender(e.target.value) }}>
                                    </input>
                                </span>
                            )
                        })
                    }
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form2