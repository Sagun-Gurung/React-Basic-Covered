import React from 'react'

const JsPractise1 = () => {

    let products = [
        {
            id: 1,
            title: "MacBook Pro",
            category: "Laptops",
            price: 100000.0,
            quantity: 2,
            description: "A high-performance laptop.",
            manufactureDate: "2023-05-15T08:30:00",
            isAvailable: true,
        },
        {
            id: 2,
            title: "Nike",
            category: "Running Shoes",
            price: 5000,
            quantity: 3,
            description: "Running shoes designed for speed and comfort.",
            manufactureDate: "2023-02-20T14:45:00",
            isAvailable: true,
        },
        {
            id: 3,
            title: "Python",
            category: "Books",
            price: 500,
            quantity: 1,
            description: "A language for AI",
            manufactureDate: "1925-04-10T10:10:00",
            isAvailable: false,
        },
        {
            id: 4,
            title: "Javascript",
            category: "Books",
            price: 700,
            quantity: 5,
            description: "A language for Browser",
            manufactureDate: "1995-12-04T12:00:00",
            isAvailable: false,
        },
        {
            id: 5,
            title: "Dell XPS",
            category: "Laptops",
            price: 120000.0,
            quantity: 2,
            description: "An ultra-slim laptop with powerful performance.",
            manufactureDate: "2023-04-25T09:15:00",
            isAvailable: true,
        },
    ];


    let task1 = () => {
        let output1 = products.map((value, i) => {
            return <p key={i}>{value.title}</p>
        })
        return output1
    }

    let task2 = () => {
        let output2 = products.map((value, i) => {
            return <div key={i}>{value.title} costs Nrs. {value.price} and it's category is {value.category}</div>
        })
        return output2
    }

    let task3 = () => {
        let output3 = products.filter((value) => {
            if (value.price > 2000) return true
        })
            .map((value, i) => {
                return <div key={i}>{value.title} costs Nrs. {value.price} and it's category is {value.category}</div>
            })

        return output3
    }

    let task4 = () => {
        let output4 = products.filter((value, i) => {
            if (value.category === "Books") return true
        }).map((value, i) => {
            return <div key={i}>{value.title} costs Nrs. {value.price} and it's category is {value.category}</div>
        })

        return output4
    }

    let task5 = () => {
        let output5 = products.reduce((previous, current) => {
            return previous + current.price
        }, 0)

        return output5
    }

    let task6 = () => {
        let categories = products.map((value, i) => {
            return value.category
        })
        let output6 = [...new Set(categories)].map((value, i) => {
            return <div key={i}>{value}</div>
        })
        return output6
    }

    return (
        <>
            <h1>The product in our shop are:</h1>
            {/* {task1()} */}
            {/* {task2()} */}
            {task3()}
            {/* {task4()} */}
            {/* <p>The total price of all products is Nrs. {task5()}</p> */}
            {/* {task6()} */}
        </>
    )

}



export default JsPractise1