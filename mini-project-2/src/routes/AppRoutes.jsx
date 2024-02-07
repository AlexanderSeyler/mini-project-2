import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import PlaylistPage from "../pages/PlaylistPage";
import ProductDetailPage from "../pages/ProductPage";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="/login" element={<LoginPage {...props} />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/playlist" element={<PlaylistPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
    </Routes>
  );
};
export default AppRoutes;
