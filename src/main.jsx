import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from "./Login";
import App from './App.jsx'
import Signup from "./Signup.jsx";
import AccountSettings from "./AccountSettings.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
