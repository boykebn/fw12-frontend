import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage2 from "./pages/HomePage2";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ListMovie from "./pages/ListMovie";
import MovieDetails from "./pages/MovieDetails";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import OrderHistory from "./pages/OrderHistory";
import TicketResultActived from "./pages/TicketResultActived";
import TicketResultUsed from "./pages/TicketResultUsed";
import TicketResultExpired from "./pages/TicketResultExpired";

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
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/TicketResultActived" element={<TicketResultActived />} />
        <Route path="/TicketResultUsed" element={<TicketResultUsed />} />
        <Route path="/TicketResultExpired" element={<TicketResultExpired />} />
      </Routes>      
    </BrowserRouter>
  )
};

export default App;