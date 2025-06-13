import React from "react";
import Routing from "./Configuration/ScreensRouting/Routing";
import "flowbite";
import { Provider } from "react-redux";
import { store } from "./Store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routing></Routing>
      </Provider>
    </>
  );
};

export default App;
