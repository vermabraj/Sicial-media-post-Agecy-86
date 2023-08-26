import React from "react";
import { Route, Routes } from "react-router-dom";

import Post from "../Post";
import Login from "./Login";
import Register from "./Register";
import UpdateBio from "./updateBio";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/update-bio" element={<UpdateBio />} />
    </Routes>
  );
};
export default AllRoutes;
