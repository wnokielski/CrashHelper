import React from "react";
import PendingOpinionsStyle from "../styles/PendingOpinions.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";

const { Content } = Layout;

class PendingOpinions extends React.Component {
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
          selected={["6"]}
          open={["sub2"]}
        ></MySider>
        <Content className="content">Pending opinions</Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default PendingOpinions;
