import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Route, Routes } from 'react-router-dom'
import { changeName, changeAge } from '../features/counterSlice'
import { changeCity, changeProvince } from '../features/addressSlice'
import CreateTeacher from './teacher/CreateTeacher'
import ReadAllTeacher from './teacher/ReadAllTeacher'
import ReadSpecificTeacher from './teacher/ReadSpecificTeacher'
import UpdateTeacher from './teacher/UpdateTeacher'

const MyRoutes2 = () => {
    // Redux Hooks:-
    // useDispatch hook to call the function in reducer
    // let dispatch = useDispatch()
    // useSelector hook to get the value from store function
    // let info = useSelector((store) => {
    //     return store.info
    // })
    // console.log(info)

    // let addressData = useSelector((store) => {
    //     return store.address
    // })
    return (
        <div>
            <Routes>
                <Route path="/" element={<div><Outlet></Outlet></div>}>
                    <Route index element={<div>This is the landing page</div>}></Route>
                    <Route path='teachers' element={<div><Outlet></Outlet></div>}>
                        <Route index element={<ReadAllTeacher></ReadAllTeacher>}></Route>
                        <Route path='create' element={<CreateTeacher></CreateTeacher>}></Route>
                        <Route path=':id' element={<ReadSpecificTeacher></ReadSpecificTeacher>}></Route>

                        {/* teachers/update/:id */}
                        <Route path='update' element={<div><Outlet></Outlet></div>}>
                            <Route path=':id' element={<UpdateTeacher></UpdateTeacher>}></Route>
                        </Route>
                    </Route>
                </Route>
            </Routes>
            {/* <div>
                <p>Name is {info.name}</p>
                <button onClick={() => {
                    dispatch(changeName("Soap"))
                }}>Change the Name</button>

                <p>Age is {info.age}</p>
                <button onClick={() => {
                    dispatch(changeAge())
                }}>Change the Age</button>
            </div>

            <div>
                <p>City is {addressData.city}</p>
                <button
                    onClick={() => {
                        dispatch(changeCity())
                    }}>Change City</button>

                <p>Province number is {addressData.province}</p>
                <button
                    onClick={() => {
                        dispatch(changeProvince(896322))
                    }}>Change Province</button>
            </div> */}
        </div >
    )
}

export default MyRoutes2