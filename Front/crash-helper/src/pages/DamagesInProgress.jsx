import React from "react";
import DamagesInProgressStyle from "../styles/DamagesInProgress.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";

const { Content } = Layout;

class NewDamages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: sessionStorage.getItem("userType") };
  }

  componentDidMount() {}

  render() {
    return (
      <Layout>
        <MyHeader selected={["null"]} type="logged" />
        <MySider
          userType={this.state.userType}
          selected={["3"]}
          open={["sub1"]}
        ></MySider>
        <Content className="content">Damages in progress</Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default NewDamages;
