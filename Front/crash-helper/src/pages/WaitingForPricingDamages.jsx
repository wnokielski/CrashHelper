import React from "react";
import WaitingForPricingDamagesStyle from "../styles/WaitingForPricingDamages.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";
import ImagesList from "../components/ImagesList";
import DamagesList from "../components/DamagesList";
import PriceDamageBox from "../components/PriceDamageBox";

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
            <div className="buttons-div">
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
              <Button
                className="price-button"
                type="primary"
                size="large"
                onClick={() => {
                  this.handleClick("price");
                }}
              >
                Price damage
              </Button>
            </div>
            <div className="photos-list-div">
              <ImagesList
                damage={this.state.selectedDamage}
                updateState={this.updateState}
                userType={sessionStorage.getItem("userType")}
              />
            </div>
          </Content>
          <MyFooter />
        </Layout>
      );
    else if (this.state.render == "price")
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
            <PriceDamageBox
              redirect={this.handleClick}
              damage={this.state.selectedDamage}
            />
          </Content>
          <MyFooter />
        </Layout>
      );
  }
}

export default WaitingForPricingDamages;
