import authAPI from "apis/authAPI";
import useRequest from "hooks/useRequest";
import AddMovie from "modules/Admin/Films/Add/AddMovie";
import MovieList from "modules/Admin/Films/Films";
import React from "react";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
  const { data: admin, isLoading, error } = useRequest(() => authAPI.addmin());
  console.log("abc", admin);
  // if (!admin.maLoaiNguoiDung === "QuanTri") {
  //   console.log("admin ", admin.maLoaiNguoiDung);
  //   return <Navigate to="/" />;
  // }
  // setTimeout(() => {
  //   if (!admin.maLoaiNguoiDung === "QuanTri") {
  //     return <Navigate to="/" />;
  //   }
  //   console.log("children", children);

  //   return <Navigate to="/admin" />;
  // }, 3000);
  // Chưa đăng nhập, điều hướng user về trang login
  // if (!admin.maLoaiNguoiDung === "QuanTri") {
  //   return <Navigate to="/" />;
  // }
  // console.log("children", children);
  // đã đăng nhập
  // return <Navigate to="/admin" />;
};

export default AdminRoute;
