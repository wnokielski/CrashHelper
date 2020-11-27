import React from "react";
import MainStyle from "../styles/MainPage.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";

const { Content } = Layout;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: this.props.location.state.userType };
  }
  render() {
    return (
      <Layout>
        <MyHeader selected={[null]} type="logged" />
        <MySider
          userType={this.state.userType}
          open={["null"]}
          selected={["null"]}
        ></MySider>
        <Content className="content">You're logged in!</Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default MainPage;
