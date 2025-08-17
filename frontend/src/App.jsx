import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/loginPage";

// import ForgotPasswordForm from "./pages/ForgotPasswordForm";
// import ResetPasswordForm from "./pages/ResetPasswordForm";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordForm />} /> */}
        {/* <Route path="/reset-password/:token" element={<ResetPasswordForm />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
