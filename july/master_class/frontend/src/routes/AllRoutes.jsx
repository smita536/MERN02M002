import { Routes, Route } from "react-router";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import AdminDashboard from "../page/AdminDashboard";
import UserDashboard from "../page/UserDashboard";
import AdminRoute from "./AdminRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<AdminRoute> <AdminDashboard /> </AdminRoute>} path="/admin" />
      <Route element={<UserDashboard />} path="/user" />

    </Routes>
  );
};

export default AllRoutes;
