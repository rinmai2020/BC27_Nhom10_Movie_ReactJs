import React, { useState } from "react";
import "./adminLayout.scss";
import { UserOutlined, AudioOutlined } from "@ant-design/icons";
import { BiMoviePlay } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import { Breadcrumb, Layout, Menu, Input, Space } from "antd";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/admin">Users</Link>, "sub1", <UserOutlined />, [
    getItem(<Link to="users">Users</Link>, "1", <UserOutlined />),
    getItem(<Link to="users/add">AddUser</Link>, "2", <UserOutlined />),
    // getItem(<Link to="films/add">AddFilm</Link>, "2", <UserOutlined />),
  ]),
  getItem(<Link to="/admin">Films</Link>, "sub1", <BiMoviePlay />, [
    getItem(<Link to="films">Film</Link>, "1", <UserOutlined />),
    getItem(
      <Link to="films/add">AddFilm</Link>,
      "2",
      <UserOutlined style={{ color: "#fff" }} />
    ),
  ]),
];
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#000",
    }}
  />
);
// const menuItem = use
// const menu = <Menu items={menuItem} />;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onSearch = (value) => console.log(value);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logoadmin">
          <h1>DR MOVIE</h1>
        </div>
        <Menu
          theme="cyan"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
          </Breadcrumb>

          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
