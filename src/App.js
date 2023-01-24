import React from "react";
import { Provider } from "react-redux";

import store from "../src/pages/redux/store";

import Main from "./pages/Main";


function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;