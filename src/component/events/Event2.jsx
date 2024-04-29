import React from 'react'

const Event2 = () => {
    return (
        <>
            {
                document.addEventListener("keydown", e => {
                    console.log(e.key, e.type)
                    // console.log(e)
                })
            }
            {
                document.addEventListener("keyup", e => {
                    console.log(`Key Up!!!!!!! ${e.key}`)
                })
            }
        </>
    )
}

export default Event2