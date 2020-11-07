import React from "react";
import HeaderStyle from "../styles/Header.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

const { Header } = Layout;

class MyHeader extends React.Component {
  render() {
    if (
      sessionStorage.getItem("userId") != "null" ||
      this.props.type == "logged"
    ) {
      return (
        <Layout>
          <Header>
            <div className="crash-helper-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={this.props.selected}
            >
              <Menu.Item key="1">
                <Link to="/"></Link>My profile
              </Menu.Item>
              <Menu.Item
                key="2"
                style={{ float: "right" }}
                onClick={AuthService.unauthorizeUser}
              >
                <Link to="/"></Link>Sign out
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
      );
    } else if (
      sessionStorage.getItem("userId") == "null" ||
      this.props.type == "unlogged"
    ) {
      return (
        <Layout>
          <Header>
            <div className="crash-helper-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={this.props.selected}
            >
              <Menu.Item key="1">
                <Link to="/"></Link>Home
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about"></Link>About us
              </Menu.Item>
              <Menu.Item key="3" style={{ float: "right" }}>
                <Link to="/login"></Link>Sign in
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
      );
    }
  }
}

export default MyHeader;
