import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MyApp from "./MyApp";
import "./index.css";
import "./my-style.css";
import "./mycomponent/teacher/teacherStyle.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/Store";
import ProjectApp from "./ProjectApp";
import "./projectComponent/projectApp.css";
import App from "./App";
import MoreApp from "./MoreApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* <MyApp /> */}
      {/* <ProjectApp></ProjectApp> */}
      {/* <MoreApp></MoreApp> */}
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
