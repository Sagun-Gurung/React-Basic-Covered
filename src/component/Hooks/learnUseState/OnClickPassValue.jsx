import React from 'react'

const OnClickPassValue = () => {
    let handleClick1 = () => {
        console.log("Button 1 is Clicked")
    }

    let handleClick2 = (a, b) => {
        return () => {
            console.log("Button 2 is clicked", a, b)
        }
    }
    return (
        <div>
            <button onClick={handleClick1}>Click me 1</button><br></br>
            {/* this technique is used if we need to pass the value */}
            <button onClick={handleClick2(22, 23)}>Click me 2</button>
        </div>
    )
}


// const OnClickPassValue = () => {
//     let handleClick1 = () => {
//         console.log("button is clicked");
//     };
//     let handleClick2 = (a, b) => {
//         return () => {
//             console.log("button is clicked");
//         };
//     };
//     return (
//         <>
//             <button onClick={handleClick1}>click me1</button>
//             <button onClick={handleClick2(1, 2)}>click me2</button>
//             {/* the above technique is used if we need to pass value */}
//         </>
//     );
// };

export default OnClickPassValue