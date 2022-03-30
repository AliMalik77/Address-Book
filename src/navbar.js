import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
import "./styles.less";
const Navbar = () => {
  return (
    <div>
      <Layout className="layout">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Setting
            </Menu.Item>
          </Menu>
        </Sider>
        {/* <Layout> */}
        {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 , textAlign: 'center', fontWeight: "bold"}}>Address Book App</Header> */}
        {/* <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content> */}
        {/* <Footer style={{ textAlign: 'center' }}>Address Book ©2018 Created by PCB</Footer> */}
        {/* </Layout> */}
      </Layout>
    </div>
  );
};

export default Navbar;
