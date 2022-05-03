import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";

import LoginPage from "./pages/LoginPage";

import SignUpPage from "./pages/SignUpPage";

import HomeAdmin from "./pages/HomeAdmin";

import Queue from "./pages/Queue";










export default function  App() {
    
  return (
         
  <Router>

    <Routes>
      <Route exact path='/' element={<HomeAdmin/>} />
      <Route exact path='/login' element={<LoginPage/>} />
      <Route exact path='/signup' element={<SignUpPage/>} />
    </Routes>

  </Router>

  );

}

