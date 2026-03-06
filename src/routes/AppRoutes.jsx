import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import Bag from "../pages/Bag";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/bag" element={<Bag />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;