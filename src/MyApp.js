import React, { createContext, useState } from "react";
import MyNavbar from "./mycomponent/MyNavbar.jsx";
import MyRoutes from "./mycomponent/MyRoutes.jsx";
import LearnJsonStringifyParse from "./component/LearnJsonStringifyParse.jsx";
import MyNavbar2 from "./mycomponent/MyNavbar2.jsx";
import MyRoutes2 from "./mycomponent/MyRoutes2.jsx";
// import MyNavbar2 from "./mycomponent/MyNavbar2.jsx";
// import MyRoutes2 from "./mycomponent/MyRoutes2.jsx";

export let GlobalVariableContext = createContext();

const MyApp = () => {
  let [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div>
      {/* *****Admin Part aka Web Users*****  */}
      {/* <GlobalVariableContext.Provider
        value={{ token: token, setToken: setToken }}
      >
        <MyNavbar></MyNavbar>
        <MyRoutes></MyRoutes>
      </GlobalVariableContext.Provider> */}

      {/* *****Teacher Part***** */}
      <MyNavbar2></MyNavbar2>
      <MyRoutes2></MyRoutes2>

      {/* <Form2></Form2> */}
      {/* <RestOperator></RestOperator> */}
      {/* <FormikForm></FormikForm> */}
      {/* <FormikTutorial></FormikTutorial> */}

      {/* <LearnJsonStringifyParse></LearnJsonStringifyParse> */}
    </div>
  );
};

export default MyApp;
