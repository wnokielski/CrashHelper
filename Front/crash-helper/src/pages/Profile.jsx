import React from "react";
import ProfileStyle from "../styles/Profile.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";
import ClientProfileBox from "../components/ClientProfileBox";

const { Content } = Layout;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: sessionStorage.getItem("userType") };
  }

  componentDidMount() {}
  render() {
    return (
      <Layout>
        <MyHeader selected={["1"]} type="logged" />
        <MySider userType={this.state.userType}></MySider>
        <Content className="content">
          <ClientProfileBox></ClientProfileBox>
        </Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default Profile;
