import React, { Fragment, useEffect } from "react";
import { Input, notification, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCalendar,
} from "react-icons/ai";
import {
  getMovieDetails,
  getMovies,
  deleteMovies,
} from "../slice/filmManagerSlice";
import { Button } from "antd/lib/radio";
import { NavLink } from "react-router-dom";
import { getUsers } from "./slice/userManagementSlice";
import useRequest from "hooks/useRequest";
import userAPI from "apis/userAPI";
const { Search } = Input;
const Users = () => {
  const onSearch = (value) => {
    dispatch(getMovies(value));
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, error } = useSelector((state) => state.user);
  console.log(users);
  // const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const handleGetMovieDT = (movieId) => {
    // dispatch(getMovieDetails(movieId));
    // navigate(`/admin/films/edit/${movieId}`);
  };
  const handleDeleteMovie = async (movieId, token) => {
    // try {
    //   await dispatch(deleteMovies(movieId, token));
    //   console.log(movieId);
    //   notification.success({
    //     message: "Xoá thành công",
    //   });
    // } catch (error) {
    //   notification.error({
    //     message: "Xoá thất bại",
    //     description: error,
    //   });
    // }
  };
  const handleAdd = () => {
    // navigate("/admin/films/add");
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "",
      width: "",

      sortDirection: ["descend", "ascend"],
      width: "",
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      width: "",
      // render: (text, user) => {
      //   return <div>{user?.taiKhoan}</div>;
      // },
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      width: "",
      // sorter: (a, b) => {
      //   let tenPhimA = a.tenPhim.toLowerCase().trim();
      //   let tenPhimB = b.tenPhim.toLowerCase().trim();
      //   if (tenPhimA > tenPhimB) {
      //     return 1;
      //   }
      //   return -1;
      // },
      // sortDirection: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "",
      // sorter: (a, b) => {
      //   let moTaA = a.moTa.toLowerCase().trim();
      //   let moTaB = b.moTa.toLowerCase().trim();
      //   if (moTaA > moTaB) {
      //     return 1;
      //   }
      //   return -1;
      // },
      // render: (text, film) => {
      //   return (
      //     <Fragment>
      //       {film.moTa.length > 50
      //         ? film.moTa.substr(0, 50) + "..."
      //         : film.moTa}
      //     </Fragment>
      //   );
      // },
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      width: "",
      // sorter: (a, b) => {
      //   let moTaA = a.moTa.toLowerCase().trim();
      //   let moTaB = b.moTa.toLowerCase().trim();
      //   if (moTaA > moTaB) {
      //     return 1;
      //   }
      //   return -1;
      // },
      // render: (text, film) => {
      //   return (
      //     <Fragment>
      //       {film.moTa.length > 50
      //         ? film.moTa.substr(0, 50) + "..."
      //         : film.moTa}
      //     </Fragment>
      //   );
      // },
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "Loại người dùng ",
      dataIndex: "maLoaiNguoiDung",
      width: "",
      // sorter: (a, b) => {
      //   let moTaA = a.moTa.toLowerCase().trim();
      //   let moTaB = b.moTa.toLowerCase().trim();
      //   if (moTaA > moTaB) {
      //     return 1;
      //   }
      //   return -1;
      // },
      // render: (text, film) => {
      //   return (
      //     <Fragment>
      //       {film.moTa.length > 50
      //         ? film.moTa.substr(0, 50) + "..."
      //         : film.moTa}
      //     </Fragment>
      //   );
      // },
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      width: "",
      render: (text, film) => {
        return (
          <Fragment>
            <span
              key={1}
              style={{
                color: "#15aabf",
                cursor: "pointer",
                marginRight: 5,
                fontSize: "16px",
              }}
              onClick={() => handleGetMovieDT(film.maPhim)}
            >
              <AiOutlineEdit />
            </span>
            <span
              key={2}
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có muốn xoá phim này không?" + film.tenPhim
                  )
                ) {
                  handleDeleteMovie(film.maPhim);
                }
              }}
              style={{
                color: "red",
                marginRight: 5,
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              <AiOutlineDelete />
            </span>
            <NavLink
              style={{ color: "green", cursor: "pointer", fontSize: "16px" }}
              to={`/admin/films/showtime/${film.maPhim}`}
            >
              <AiOutlineCalendar />
            </NavLink>
          </Fragment>
        );
      },
      sortDirection: ["descend", "ascend"],
    },
  ];
  const data = users;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h3>Quản lý phim</h3>
      <Button className="mb-3" onClick={() => handleAdd(users.maPhim)}>
        Thêm Phim
      </Button>
      <Search
        className="mb-5"
        placeholder="Search...."
        allowClear
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
};

export default Users;
