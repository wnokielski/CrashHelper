import React from "react";
import WaitingForPricingDamagesStyle from "../styles/WaitingForPricingDamages.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";
import ImagesList from "../components/ImagesList";
import DamagesList from "../components/DamagesList";

const { Content } = Layout;

class WaitingForPricingDamages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: sessionStorage.getItem("userType"),
      render: "show",
      damages: [],
      logos: [],
      images: [],
      selectedDamage: null,
    };
    this.updateState = this.updateState;
  }

  updateState = (name, value) => {
    this.setState({ [name]: value });
  };

  handleClick = (newView) => {
    this.setState({ render: newView });
  };

  componentDidMount() {}

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
            <DamagesList
              type="workshop-new"
              damages={this.state.damages}
              logos={this.state.logos}
              updateState={this.updateState}
            />
          </Content>
          <MyFooter />
        </Layout>
      );
    else if (this.state.render == "photos")
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
              onClick={() => {
                this.handleClick("show");
              }}
            >
              Go back
            </Button>
            <div className="photos-list-div">
              <ImagesList
                damage={this.state.selectedDamage}
                updateState={this.updateState}
              />
            </div>
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
              onClick={() => {
                this.handleClick("show");
              }}
            >
              Go back
            </Button>
          </Content>
          <MyFooter />
        </Layout>
      );
  }
}

export default WaitingForPricingDamages;
