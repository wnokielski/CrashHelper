import React from "react";
import MainStyle from "../styles/MainPage.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import LoginBox from "../components/LoginBox";
import MySider from "../components/Sider";

const { Content } = Layout;

class MainPage extends React.Component {
  render() {
    return (
      <Layout>
        <MyHeader selected={[null]} type="logged" />
        <MySider></MySider>
        <Content>Po logowanku!</Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default MainPage;
