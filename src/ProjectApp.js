import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
// import { changeCity, changeProvince } from "./features/addressSlice";
// import { changeAge, changeName } from "./features/counterSlice";
// import CreateProduct from "./projectComponent/CreateProduct";
import NavBar from "./projectComponent/NavBar";
// import ShowAllProducts from "./projectComponent/ShowAllProducts";
// import UpdateProduct from "./projectComponent/UpdateProduct";
// import ViewSpecificProduct from "./projectComponent/ViewSpecificProduct";
// import {
//   changePName,
//   changePrice,
//   changeQuantity,
// } from "./features/productSlice";
import CreateProductUsingRTK from "./projectComponent/projectRTK/CreateProductUsingRTK";
import ShowAllProductsUsingRTK from "./projectComponent/projectRTK/ShowAllProductsUsingRTK";
import UpdateProductUsingRTK from "./projectComponent/projectRTK/UpdateProductUsingRTK";
import ViewSpecificProductUsingRTK from "./projectComponent/projectRTK/ViewSpecificProductUsingRTK";

const ProjectApp = () => {
  // let dispatch = useDispatch();

  // let infoData = useSelector((store) => {
  //   return store.info;
  // });

  // let addressData = useSelector((store) => {
  //   return store.address;
  // });

  // let productData = useSelector((store) => {
  //   return store.product;
  // });

  // console.log(infoData);

  return (
    <>
      {/* <NavBar></NavBar> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar></NavBar>
              <Outlet></Outlet>
              {/* <Footer></Footer> */}
            </div>
          }
        >
          {/* <Route index element={<div>Home Page</div>}></Route> */}
          <Route path="products" element={<Outlet></Outlet>}>
            {/* <Route index element={<ShowAllProducts></ShowAllProducts>}></Route> */}
            <Route
              index
              element={<ShowAllProductsUsingRTK></ShowAllProductsUsingRTK>}
            ></Route>
            <Route
              path=":id"
              element={
                <div>
                  {/* <ViewSpecificProduct></ViewSpecificProduct> */}
                  <ViewSpecificProductUsingRTK></ViewSpecificProductUsingRTK>
                </div>
              }
            ></Route>
            <Route
              path="create"
              element={
                // <CreateProduct></CreateProduct>
                <CreateProductUsingRTK></CreateProductUsingRTK>
              }
            ></Route>
            <Route path="update" element={<Outlet></Outlet>}>
              <Route
                path=":id"
                element={
                  <div>
                    {/* <UpdateProduct></UpdateProduct> */}
                    <UpdateProductUsingRTK></UpdateProductUsingRTK>
                  </div>
                }
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>

      {/* Redux */}
      {/* <div>
        <p>{infoData.name}</p>
        <p>{infoData.age}</p>
        <button
          onClick={() => {
            // dispatch(changeName());
            dispatch(changeName("Glaucos"));
          }}
        >
          Change Name
        </button>
        <button
          onClick={() => {
            dispatch(changeAge());
          }}
        >
          Change Age
        </button>
        <hr></hr>
      </div>

      <div>
        <p>{addressData.city}</p>
        <p>{addressData.province}</p>
        <button
          onClick={() => {
            // dispatch(changeName());
            dispatch(changeCity());
          }}
        >
          Change Name
        </button>
        <button
          onClick={() => {
            dispatch(changeProvince(893611909431));
          }}
        >
          Change Age
        </button>
        <hr></hr>
      </div> */}

      {/* <div>
        <p>{productData.name}</p>
        <p>{productData.price}</p>
        <p>{productData.quantity}</p>
        <button
          onClick={() => {
            // dispatch(changeName());
            dispatch(changePName("Avocado"));
          }}
        >
          Change Name
        </button>
        <button
          onClick={() => {
            dispatch(changePrice());
          }}
        >
          Change Price
        </button>
        <button
          onClick={() => {
            dispatch(changeQuantity(200));
          }}
        >
          Change Quantity
        </button>
        <hr></hr>
      </div> */}
    </>
  );
};

export default ProjectApp;
