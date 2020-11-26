import React from "react";
import MyOpinionsStyle from "../styles/MyOpinions.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";
import OpinionsList from "../components/OpinionsList";

const { Content } = Layout;

class MyOpinions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: sessionStorage.getItem("userType") };
  }

  componentDidMount() {}

  render() {
    if (this.state.userType == "[CLIENT]") {
      return (
        <Layout>
          <MyHeader selected={["null"]} type="logged" />
          <MySider
            userType={this.state.userType}
            selected={["5"]}
            open={["sub2"]}
          ></MySider>
          <Content className="content">
            <OpinionsList type="client" />
          </Content>
          <MyFooter />
        </Layout>
      );
    } else {
      return (
        <Layout>
          <MyHeader selected={["null"]} type="logged" />
          <MySider
            userType={this.state.userType}
            selected={["4"]}
            open={["sub2"]}
          ></MySider>
          <Content className="content">
            <OpinionsList type="workshop" />
          </Content>
          <MyFooter />
        </Layout>
      );
    }
  }
}

export default MyOpinions;
