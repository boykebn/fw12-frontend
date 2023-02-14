import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import HomePage2 from "./HomePage2";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import ListMovie from "./ListMovie";
import MovieDetails from "./MovieDetails";
import OrderPage from "./OrderPage";
import PaymentPage from "./PaymentPage";
import ProfilePage from "./ProfilePage";
import OrderHistory from "./OrderHistory";
import TicketResult from "./TicketResult";
import PrivateRoute from "../components/PrivateRoute";

const Main = () => {
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
            <Route 
            path="/MovieDetails/:id" 
            element={
              <PrivateRoute>
                <MovieDetails />
              </PrivateRoute>
              } 
            />
            <Route path="/OrderPage" element={<OrderPage />} />
            <Route path="/PaymentPage" element={<PaymentPage />} />
            <Route
              path="/ProfilePage"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route path="/OrderHistory" element={<OrderHistory />} />
            <Route path="/TicketResult/:id" element={<TicketResult />} />
        </Routes>      
    </BrowserRouter>
    )
};

export default Main;