import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

class MySider extends React.Component {
  render() {
    if (
      this.props.userType == "[CLIENT]" ||
      sessionStorage.getItem("userType") == "[CLIENT]"
    ) {
      return (
        <Layout>
          <Sider
            style={{
              height: "100vh",
              overflow: "auto",
              position: "fixed",
              left: 0,
              "z-index": "10",
            }}
          >
            <Menu
              mode="inline"
              theme="dark"
              //defaultSelectedKeys={["1"]}
              //defaultOpenKeys={["sub1"]}
            >
              <SubMenu key="sub1" title="Damages">
                <Menu.Item key="1">New damages</Menu.Item>
                <Menu.Item key="2">Priced damages</Menu.Item>
                <Menu.Item key="3">Damages in progress</Menu.Item>
                <Menu.Item key="4">Completed damages</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Opinions">
                <Menu.Item key="5">My opinions</Menu.Item>
                <Menu.Item key="6">Pending opinions</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>
      );
    } else if (
      this.props.userType == "[WORKSHOP]" ||
      sessionStorage.getItem("userType") == "[WORKSHOP]"
    ) {
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
              //defaultSelectedKeys={["1"]}
              //defaultOpenKeys={["sub1"]}
            >
              <SubMenu key="sub1" title="Damages">
                <Menu.Item key="1">Waiting for pricing</Menu.Item>
                <Menu.Item key="2">Priced damages</Menu.Item>
                <Menu.Item key="3">Damages in progress</Menu.Item>
                <Menu.Item key="4">Completed damages</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Opinions">
                <Menu.Item key="5">My opinions</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>
      );
    } else return "chuuuuj";
  }
}

export default MySider;
