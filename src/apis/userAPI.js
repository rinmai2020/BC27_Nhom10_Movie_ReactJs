import axiosClient from "./axiosClient";
const userAPI = {
  getUsers: () => {
    return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        maNhom: "GP10",
      },
    });
  },
  getTypeUsers: () => {
    return axiosClient.get("QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },
};
export default userAPI;
