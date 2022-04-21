import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const { Header } = Layout;
const Navbar = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Users</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
