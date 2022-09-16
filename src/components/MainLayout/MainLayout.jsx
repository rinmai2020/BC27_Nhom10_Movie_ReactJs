import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "../Header";
import "./mainLayout.scss";
import Footer from "components/Footer/Footer";
const MainLayout = () => {
  return (
    <Layout>
      <Layout.Header className="Header">
        <Header />
      </Layout.Header>
      <Layout.Content className="Content">
        {/* Nơi chứa component được định nghĩa trong router */}

        {/* component Outlet sẽ là nơi render ra các children route  */}
        <Outlet />
      </Layout.Content>
      <Layout.Footer className="Footer">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default MainLayout;
