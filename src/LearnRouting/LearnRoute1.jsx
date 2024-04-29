import React from "react";
import { NavLink, Route, Routes, Outlet } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Error from "./Error"
import NestingRoute from "./NestingRoute"
import GetDynamicRouteParameter from "./GetDynamicRouteParameter"

const LearnRoute1 = () => {
    return (
        <div>
            {/* <a href="/about">About</a> */}
            <br></br>
            <NavLink to={"/"} style={{ marginLeft: "20px" }}>
                Home
            </NavLink>
            <NavLink to={"/about"} style={{ marginLeft: "20px" }}>
                About
            </NavLink>
            <NavLink to={"/contact"} style={{ marginLeft: "20px" }}>
                Contact
            </NavLink>
            {/* <NavLink to={"/nesting"} style={{ marginLeft: "20px" }}>
                Nesting Route
            </NavLink> */}


            {/* Defining different component for different path */}


            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="*" element={<Error></Error>}></Route>
                {/* <Route path="/a" element={<div>A page</div>}></Route>
                <Route path="/a/:any" element={<div>Any page</div>}></Route> */}
                <Route path="/b/:id1/id/:id2"
                    element={<GetDynamicRouteParameter></GetDynamicRouteParameter>}></Route>


                {/* Nesting Route */}

                {/* <Route
                    path="a"
                    element={<div> AAAAAAAAAAAAAAAAAAAA
                        <Outlet></Outlet>
                    </div>}
                >
                    <Route path="a1" element={<div>A A1 page</div>}></Route>
                    <Route path=":any" element={<div> A Any page</div>}></Route>
                </Route> */}
            </Routes>
        </div >
    );
};

export default LearnRoute1;
