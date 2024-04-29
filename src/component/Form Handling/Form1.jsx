import React from 'react'

const Form1 = () => {

    let handleSubmit = (e) => {
        e.preventDefault() //prevent default form submission which is to reload the page
        console.log("Form is submitted")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="radio"></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <br></br>
                <input type='checkbox'></input>
                {/* <input type='checkbox'>Check 2</input>
                <input type='checkbox'>Check 3</input> */}
                <br></br>
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <br></br>
                <button type='submit'>Send</button>
            </form>
        </>
    )
}

export default Form1