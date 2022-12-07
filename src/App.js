import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/SignUp" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
      </Routes>      
    </BrowserRouter>
  )
};

export default App;