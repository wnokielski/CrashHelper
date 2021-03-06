import React from "react";
import LoginStyle from "../styles/Login.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import LoginBox from "../components/LoginBox";

const { Content } = Layout;

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <MyHeader selected={["3"]} type="unlogged" />
        <Content>
          <div className="content">
            <div className="login-box">
              <LoginBox />
            </div>
          </div>
        </Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default Login;
