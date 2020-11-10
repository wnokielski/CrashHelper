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
              selectedKeys={this.props.selected}
              defaultOpenKeys={this.props.open}
            >
              <SubMenu key="sub1" title="Damages">
                <Menu.Item key="1">
                  <Link to="/damages/new"></Link>New damages
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/damages/priced"></Link>New damagesPriced damages
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/damages/inProgress"></Link>Damages in progress
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/damages/completed"></Link>Completed damages
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Opinions">
                <Menu.Item key="5">
                  <Link to="/opinions/my"></Link>My opinions
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/opinions/pending"></Link>Pending opinions
                </Menu.Item>
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
              "z-index": "10",
            }}
          >
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={this.props.selected}
              defaultOpenKeys={this.props.open}
            >
              <SubMenu key="sub1" title="Damages">
                <Menu.Item key="1">
                  <Link to="/damages/waitingForPricing"></Link>Waiting for
                  pricing
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/damages/priced"></Link>Priced damages
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/damages/inProgress"></Link>Damages in progress
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/damages/completed"></Link>Completed damages
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Opinions">
                <Menu.Item key="5">
                  <Link to="/opinions/my"></Link>My opinions
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>
      );
    } else return "chuuuuj";
  }
}

export default MySider;
