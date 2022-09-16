import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "components/MainLayout";
import AuthLayout from "components/AuthLayout";
import CheckoutRoute from "routes/CheckoutRoute";
import "swiper/css/bundle";
import "./modules/Home/components/Banner/styles.css";
import AdminLayout from "components/AdminLayout/AdminLayout";
// Không import trực tiếp các pages, vì nó sẽ được tải tất cả ở lần đầu tiên
// import Home from "modules/Home/pages/Home";
// import Movie from "modules/Movie/pages/Movie";
// import Login from "modules/Authentication/pages/Login";
// import Register from "modules/Authentication/pages/Register";
import MovieList from "modules/Admin/Films/Films";
import AddMovie from "modules/Admin/Films/Add/AddMovie";
import EditMovie from "modules/Admin/Films/Edit/EditMovie";
import AddShowtime from "modules/Admin/Films/AddShowtime/AddShowtime";
import Users from "modules/Admin/Users/Users";
import AddUser from "modules/Admin/Users/AddUser/AddUser";
// Để chỉ cần tải những pages cần thiết ta sử dụng kĩ thuật lazyload
const Home = lazy(() => import("modules/Home/pages/Home"));
const Movie = lazy(() => import("modules/Movie/pages/Movie"));
const PurChase = lazy(() => import("modules/Purchase/pages/PurChase"));
const Login = lazy(() => import("modules/Authentication/pages/Login"));
const Register = lazy(() => import("modules/Authentication/pages/Register"));
// const MovieList = lazy(() => import("modules/AdminMovie/pages/MovieList"));
function App() {
  return (
    // Suspense: hiển thị fallback UI (Loading) khi các file JS của một page đang được tải về
    <Suspense
      fallback={
        <div
          style={{
            background: "#130830",
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://tcdtist-tix-clone.vercel.app/static/media/loadingPage.a098baa8.gif"
            alt=""
          />
        </div>
      }
    >
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="films" element={<MovieList />} />
          <Route path="films/add" element={<AddMovie />} />
          <Route path="films/edit/:id" element={<EditMovie />} />
          <Route path="films/showtime/:id" element={<AddShowtime />} />
          <Route path="users" element={<Users />} />
          <Route path="users/add" element={<AddUser />} />
        </Route>

        {/* AdminUser, AdminShowtimes */}

        {/* Để các routes có cùng chung 1 layout, ta sử dụng kĩ thuật nested route, route parent đi định nghĩa layout component, bên trong route parent sẽ gọi tới cái children routes */}
        <Route path="/" element={<MainLayout />}>
          {/* index: path của child route khớp 100% với path của parent route */}
          <Route index element={<Home />} />
          <Route path="movie/:movieId" element={<Movie />} />
          <Route path="purchase/:purchaseId" element={<PurChase />} />
          <Route
            path="checkout/:checkoutId"
            element={
              <CheckoutRoute>
                {/* <Checkout /> */}
                <h1>Checkout Component</h1>
              </CheckoutRoute>
            }
          />
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/add" element={<AddMovie />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
