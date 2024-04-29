import React, { useState } from "react";
import LearnCleanUpFunction from "./component/LearnCleanUpFunction.jsx";
import CleanUpFunction1 from "./component/Hooks/learnUseEffect/CleanUpFunction1.jsx";
import CallCustomHook from "./moreComponent/CustomHook/CallCustomHook.jsx";
import ThemeProvider from "./component/Hooks/learnContext/ThemeProvider.jsx";
import ThemedButton from "./component/Hooks/learnContext/ThemedButton.jsx";

const App = () => {
  // let [show, setShow] = useState(true);

  return (
    <div>
      {/* <Info name="panipuri" age={50} address="sifal"></Info> */}
      {/* <College
        name="Kist College"
        cost="6 lakh"
        address="Kamalpokhari"
      ></College> */}
      {/* <Style></Style> */}
      {/* <EffectOfData></EffectOfData> */}
      {/* <Age></Age> */}
      {/* <TernaryOperator1></TernaryOperator1> */}
      {/* <ButtonClick></ButtonClick> */}
      {/* <LearnUseState></LearnUseState> */}
      {/* <LearnUseState2></LearnUseState2> */}
      {/* <JsPractise1></JsPractise1> */}
      {/* <HideAndShowImage></HideAndShowImage> */}
      {/* <HideAndShowTry1></HideAndShowTry1> */}
      {/* <HideAndShowImage2></HideAndShowImage2> */}
      {/* <OnClickPassValue></OnClickPassValue> */}
      {/* <Event1></Event1> */}
      {/* <Event2></Event2> */}
      {/* <Event3></Event3> */}
      {/* <Rendering1></Rendering1> */}
      {/* <GrandParent></GrandParent> */}
      {/* <InfiniteRendering></InfiniteRendering> */}
      {/* <Form1></Form1> */}
      {/* <Form2></Form2> */}
      {/* <AddDataToLocalStorage></AddDataToLocalStorage> */}
      {/* <GetLocalStorageData></GetLocalStorageData> */}
      {/* <RemoveLocalStorageData></RemoveLocalStorageData> */}
      {/* <AddDataToSessionStorage></AddDataToSessionStorage> */}
      {/* <GetDataFromSessionStorage></GetDataFromSessionStorage> */}
      {/* <RemoveDataFromSessionStore></RemoveDataFromSessionStore> */}
      {/* <PrimitiveNonPrimitive></PrimitiveNonPrimitive> */}
      {/* <LearnUseEffect1></LearnUseEffect1> */}
      {/* <MultipleUseEffect2></MultipleUseEffect2> */}
      {/* <UseEffectWithAndWithoutDependency></UseEffectWithAndWithoutDependency> */}
      {/* <HideAndShowPassword></HideAndShowPassword> */}
      {/* <LearnUseRef></LearnUseRef> */}
      {/* <LearnUseRef2></LearnUseRef2> */}
      {/* <UseEffectDependency></UseEffectDependency> */}
      {/* <UseEffectWithStringify></UseEffectWithStringify> */}
      {/* <LearnUseRef1></LearnUseRef1> */}
      {/* <Parent></Parent> */}
      {/* <Parent2></Parent2> */}
      {/* <LearnUseReducer1></LearnUseReducer1> */}
      {/* <LearnUseReducer2></LearnUseReducer2> */}
      {/* <LearnUseReducer3></LearnUseReducer3> */}
      {/* <LearnUseReducer4></LearnUseReducer4> */}
      {/* <ParentOpt1></ParentOpt1> */}
      {/* <CallbackParent1></CallbackParent1> */}
      {/* <ParentMemo></ParentMemo> */}
      {/* <HideAndShowPassTry></HideAndShowPassTry> */}
      {/* <CleanUpFunction1></CleanUpFunction1> */}
      {/* <CallCustomHook></CallCustomHook> */}
      {/* Component Mount/Unmount
      if we want to show component then it is called component mount else unmount*/}
      {/* {show ? <LearnCleanUpFunction></LearnCleanUpFunction> : null}
      <br></br>
      <br></br>
      <br></br>
      <button
        type="button"
        onClick={() => {
          setShow(true);
        }}
      >
        Show Component
      </button>
      <button
        type="button"
        onClick={() => {
          setShow(false);
        }}
      >
        Hide Component
      </button>{" "} */}

      {/* Context */}

      <ThemeProvider>
        <h1>Theme Switcher</h1>
        <ThemedButton></ThemedButton>
      </ThemeProvider>
    </div>
  );
};

export default App;
