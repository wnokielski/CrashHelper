import React from "react";
import NewDamagesStyle from "../styles/NewDamages.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button, Upload, message } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";
import AddDamageBox from "../components/AddDamageBox";

const { Content } = Layout;

const logFile = (file) => {
  console.log(file);
};

class NewDamages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: sessionStorage.getItem("userType"),
      render: "show",
    };
  }

  componentDidMount() {}

  handleClick = (newView) => {
    this.setState({ render: newView });
  };

  render() {
    if (this.state.render == "show")
      return (
        <Layout>
          <MyHeader selected={["null"]} type="logged" />
          <MySider
            userType={this.state.userType}
            selected={["1"]}
            open={["sub1"]}
          ></MySider>
          <Content className="content">
            <Button
              className="add-damage-button"
              type="primary"
              size="large"
              onClick={() => this.handleClick("add")}
            >
              + Add new damage
            </Button>
          </Content>
          <MyFooter />
        </Layout>
      );
    else if (this.state.render == "add")
      return (
        <Layout>
          <MyHeader selected={["null"]} type="logged" />
          <MySider
            userType={this.state.userType}
            selected={["1"]}
            open={["sub1"]}
          ></MySider>
          <Content className="content">
            <Button
              className="cancel-button"
              type="primary"
              size="large"
              onClick={() => this.handleClick("show")}
            >
              Go back
            </Button>
            <AddDamageBox redirect={this.handleClick}></AddDamageBox>
          </Content>
          <MyFooter />
        </Layout>
      );
  }
}

export default NewDamages;
