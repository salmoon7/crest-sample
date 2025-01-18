import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Mycomponents/Header";
import Hero from "./Mycomponents/Hero";
import Footer from "./Mycomponents/Footer";
import Login from "./Mycomponents/Login";
import SignUp from "./Mycomponents/SignUp";
import Dashboard from "./Mycomponents/Dashboard";

const App: React.FC = () => {
  const location = useLocation();

  // Define the routes where Header and Footer should not appear
  const noHeaderFooterRoutes = ["/dashboard"];

  return (
    <div className="bg-[#f8edeb] min-h-screen">
      {/* Render Header only if the current path is not in the exclusion list */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Render Footer only if the current path is not in the exclusion list */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
