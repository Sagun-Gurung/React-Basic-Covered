import React from 'react'
import Child2 from './Child2'

const Parent2 = () => {
    let fun1 = (data) => {
        console.log(data)
    }

    let fun2 = (name) => {
        console.log(name)
    }
    return (
        <div>
            Parent2
            <Child2 fun1={fun1} fun2={fun2}></Child2>
        </div>
    )
}

export default Parent2
/* sending data from child 2 to parent 2
make func in parent 2
send funct to child
send data to that function */