import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

class MySider extends React.Component {
  render() {
    return (
      <Layout>
        <Sider
          style={{
            height: "100vh",
            overflow: "auto",
            position: "fixed",
            left: 0,
          }}
        >
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              nav 4
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              nav 5
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              nav 6
            </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              nav 7
            </Menu.Item>
            <Menu.Item key="8" icon={<ShopOutlined />}>
              nav 8
            </Menu.Item>
            <Menu.Item key="9" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="10" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="11" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="12" icon={<BarChartOutlined />}>
              nav 4
            </Menu.Item>
            <Menu.Item key="13" icon={<CloudOutlined />}>
              nav 5
            </Menu.Item>
            <Menu.Item key="14" icon={<CloudOutlined />}>
              nav 5
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default MySider;
