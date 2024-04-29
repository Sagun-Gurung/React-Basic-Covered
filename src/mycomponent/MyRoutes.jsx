import React, { useContext } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { GlobalVariableContext } from '../MyApp'
import AdminLogin from './webUsers/AdminLogin'
import AdminLogout from './webUsers/AdminLogout'
import AdminProfile from './webUsers/AdminProfile'
import AdminProfileUpdate from './webUsers/AdminProfileUpdate'
import AdminRegister from './webUsers/AdminRegister'
import AdminUpdatePassword from './webUsers/AdminUpdatePassword'
import AdminVerify from './webUsers/AdminVerify'
import ForgotPassword from './webUsers/ForgotPassword'
import ReadAllUser from './webUsers/ReadAllUser'
import ReadSpecificUser from './webUsers/ReadSpecificUser'
import ResetPassword from './webUsers/ResetPassword'
import UpdateSpecificUser from './webUsers/UpdateSpecificUser'

const MyRoutes = () => {

    let { token, setToken } = useContext(GlobalVariableContext)
    return (
        <div>
            <Routes>
                <Route path="/" element={<div><Outlet></Outlet></div>}>

                    <Route path='verify-email' element={<AdminVerify></AdminVerify>}></Route>
                    <Route path='reset-password' element={<ResetPassword></ResetPassword>}></Route>

                    <Route index element={<div>This is the landing page</div>}></Route>

                    {/* admin part */}
                    <Route path='admin' element={<div><Outlet></Outlet></div>}>
                        <Route index element={<div>This is Admin Dashboard</div>}></Route>
                        <Route path='register' element={<div><AdminRegister></AdminRegister></div>}></Route>
                        {
                            token ? (
                                <>
                                    <Route path='update-password' element={<AdminUpdatePassword></AdminUpdatePassword>}></Route>
                                    <Route path='logout' element={<div><AdminLogout></AdminLogout></div>}></Route>
                                    <Route path='my-profile' element={<div><AdminProfile></AdminProfile></div>}></Route>
                                    <Route path='profile-update' element={<AdminProfileUpdate></AdminProfileUpdate>}></Route>
                                    <Route path='read-all-user' element={<ReadAllUser></ReadAllUser>}></Route>
                                    <Route path=':id' element={<ReadSpecificUser></ReadSpecificUser>}></Route>
                                    <Route path='update' element={<Outlet></Outlet>}>
                                        <Route path=':id' element={<div><UpdateSpecificUser></UpdateSpecificUser></div>}></Route>
                                    </Route>
                                </>
                            ) : (
                                <>
                                    <Route path='login' element={<div><AdminLogin></AdminLogin></div>}></Route>
                                </>
                            )
                        }
                        <Route path='forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
                        <Route path='*' element={<div>404</div>}></Route>
                    </Route>
                </Route >
            </Routes >
        </div >
    )
}

export default MyRoutes