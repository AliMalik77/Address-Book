import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const { Header } = Layout;

import Settings from "./Settings";
import "../style/styles.less";
const Navbar = () => {
  return (
    <div>
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/">Users</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<SettingOutlined />}>
                <Link to="/settings">Settings</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>

        <Routes>
          {/* <Route path="/">
          <Test />
        </Route> */}
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
      {/* </Router> */}
    </div>
  );
};

export default Navbar;
