import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage2 from "./pages/HomePage2";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ListMovie from "./pages/ListMovie";
import MovieDetails from "./pages/MovieDetails";

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Homepage" element={<HomePage2 />} />
        <Route path="/Forgotpwd" element={<ForgotPassword />} />
        <Route path="/Resetpwd" element={<ResetPassword />} />
        <Route path="/Listmovie" element={<ListMovie />} />
        <Route path="/MovieDetails" element={<MovieDetails />} />
      </Routes>      
    </BrowserRouter>
  )
};

export default App;