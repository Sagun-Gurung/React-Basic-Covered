import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'


// http://localhost:3000/        show Home Page
// http://localhost:3000/about   Student Page
// http://localhost:3000/*       show 404 Page

const NestingRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div><Outlet></Outlet></div>}>
                    <Route path="student" element={<div>Student<Outlet></Outlet></div>}>
                        <Route index element={<div>Student Page</div>}></Route>
                        <Route path="1" element={<div>1</div>}></Route>
                    </Route>
                    <Route index element={<div>Home Page</div>}></Route>

                    <Route path="*" element={<div>404 Page</div>}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default NestingRoute