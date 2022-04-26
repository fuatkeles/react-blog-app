import React from "react";
import Navbar from "../components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import PrivateRouter from "./PrivateRouter.js";
import Dashboard from "../pages/Dashboard.js";
import Profile from "../pages/Profile.js";
import NewBlog from "../pages/NewBlog.js";
import Details from "../pages/Details.js";
import UpdateBlog from "../pages/UpdateBlog.js";
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/new-blog" element={<NewBlog/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/update" element={<UpdateBlog/>} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
