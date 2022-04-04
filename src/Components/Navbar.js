import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

import "../style/styles.less";
const Navbar = () => {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
