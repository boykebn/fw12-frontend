import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
      </Routes>      
    </BrowserRouter>
  )
};

export default App;