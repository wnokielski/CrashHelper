import React from "react";
import PricedDamagesStyle from "../styles/PricedDamages.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";
import DamagesList from "../components/DamagesList";
import ImagesList from "../components/ImagesList";
import OffersList from "../components/OffersList";

const { Content } = Layout;

class PricedDamages extends React.Component {
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
    if (this.state.userType == "[CLIENT]") {
      if (this.state.render == "show")
        return (
          <Layout>
            <MyHeader selected={["null"]} type="logged" />
            <MySider
              userType={this.state.userType}
              selected={["2"]}
              open={["sub1"]}
            ></MySider>
            <Content className="content">
              <DamagesList
                type="client-priced"
                damages={this.state.damages}
                logos={this.state.logos}
                updateState={this.updateState}
              />
            </Content>
            <MyFooter />
          </Layout>
        );
      else if (this.state.render == "offers")
        return (
          <Layout>
            <MyHeader selected={["null"]} type="logged" />
            <MySider
              userType={this.state.userType}
              selected={["2"]}
              open={["sub1"]}
            ></MySider>
            <Content className="content">
              <Button
                className="cancel-button"
                type="primary"
                size="large"
                onClick={() => {
                  this.handleClick("photos");
                }}
              >
                Go back
              </Button>
              <OffersList damage={this.state.selectedDamage} />
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
              selected={["2"]}
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
                  className="show-offers-button"
                  type="primary"
                  size="large"
                  onClick={() => {
                    this.handleClick("offers");
                  }}
                >
                  Show offers
                </Button>
              </div>
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
    } else {
      //if user is workshop
      if (this.state.render == "show")
        return (
          <Layout>
            <MyHeader selected={["null"]} type="logged" />
            <MySider
              userType={this.state.userType}
              selected={["2"]}
              open={["sub1"]}
            ></MySider>
            <Content className="content">
              <DamagesList
                type="workshop-priced"
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
              selected={["2"]}
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
    }
  }
}

export default PricedDamages;
