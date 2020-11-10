import React from "react";
import Register from "../styles/Register.css";
import "antd/dist/antd.css";
import { Form, Layout, Typography, Input, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import RegistrationCards from "../components/RegistrationCards";
import RegisterWorkshopBox from "../components/RegisterWorkshopBox";
import RegisterClientBox from "../components/RegisterClientBox";

const { Title } = Typography;

const { Content } = Layout;

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: "choose",
      redirect: false,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    if (this.state.render == "choose")
      return (
        <Layout>
          <MyHeader selected={["null"]} type="unlogged" />
          <Content className="content">
            <div className="cards-div">
              <div>
                <Title className="title-text">
                  Please choose a type of your account
                </Title>
              </div>
              <RegistrationCards updateState={this.updateState} />
            </div>
          </Content>
          <MyFooter />
        </Layout>
      );
    if (this.state.render == "workshop")
      return (
        <Layout>
          <MyHeader selected={["null"]} type="unlogged" />
          <Content className="content">
            <div className="registration-box">
              <RegisterWorkshopBox />
            </div>
          </Content>
          <MyFooter />
        </Layout>
      );
    if (this.state.render == "client")
      return (
        <Layout>
          <MyHeader selected={["null"]} type="unlogged" />
          <Content className="content">
            <div className="registration-box">
              <RegisterClientBox />
            </div>
          </Content>
          <MyFooter />
        </Layout>
      );
  }
}

export default Registration;
