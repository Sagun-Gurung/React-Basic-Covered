import React from 'react'
/* JSON.stringify and JSON.parse are essential tools for handling JSON data in
JavaScript, enabling efficient data exchange, interoperability, and standardized
communication in web applications. */

const LearnJsonStringifyParse = () => {

    let info = { name: "Nitan", age: 2932 }

    //************************To convert into string

    // console.log("This is object.", info)
    let infoStr = JSON.stringify(info)
    // console.log("This is string:", infoStr)

    // localStorage.setItem("info", info)
    // localStorage.setItem("infoStr", infoStr)

    //*******************to open the stringified string
    // let infoParsed = JSON.parse(infoStr)
    // console.log(infoParsed)

    localStorage.setItem("infoStr", infoStr)

    let data = localStorage.getItem("infoStr")

    console.log(JSON.parse(data))


    return (
        <div>
            <h2>LearnJsonStringifyParse</h2>
            <p>This is object : {info.name} {info.age}</p>
            <p>This is string : {infoStr}</p>
            <hr></hr>
        </div>
    )
}

export default LearnJsonStringifyParse