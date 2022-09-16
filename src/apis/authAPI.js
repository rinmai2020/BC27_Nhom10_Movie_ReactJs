import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", values);
  },

  register: (values) => {
    return axiosClient.post("QuanLyNguoiDung/DangKy", {
      ...values,
      maNhom: "GP10",
    });
  },
  // addmin: () => {
  //   return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung", {
  //     params: {
  //       maNhom: "GP10",
  //     },
  //   });
  // },
};

export default authAPI;
