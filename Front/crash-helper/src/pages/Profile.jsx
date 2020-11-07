import React from "react";
import MainStyle from "../styles/MainPage.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";

const { Content } = Layout;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: sessionStorage.getItem("userType") };
  }
  render() {
    return (
      <Layout>
        <MyHeader selected={[null]} type="logged" />
        <MySider userType={this.state.userType}></MySider>
        <Content className="content">Profil</Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default Profile;
