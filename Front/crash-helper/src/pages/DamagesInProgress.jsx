import React from "react";
import DamagesInProgressStyle from "../styles/DamagesInProgress.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button, Modal } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";
import DamagesList from "../components/DamagesList";
import ImagesList from "../components/ImagesList";
import * as Consts from "../resources/Consts";

const { Content } = Layout;

class NewDamages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: sessionStorage.getItem("userType"),
      render: "show",
      damages: [],
      logos: [],
      images: [],
      selectedDamage: null,
      visible: false,
    };
  }

  updateState = (name, value) => {
    this.setState({ [name]: value });
  };

  handleClick = (newView) => {
    this.setState({ render: newView });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });

    let requestOptions = {
      method: "PATCH",
      headers: { Authorization: sessionStorage.getItem("authToken") },
    };

    let url = `${Consts.API_URL}/damages/completeDamage/${e.id}`;

    fetch(url, requestOptions).then((response) => {
      if (response.status == 204) {
        window.location.reload(false);
      }
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {}

  render() {
    if (this.state.userType == "[CLIENT]") {
      if (this.state.render == "show") {
        return (
          <Layout>
            <MyHeader selected={["null"]} type="logged" />
            <MySider
              userType={this.state.userType}
              selected={["3"]}
              open={["sub1"]}
            ></MySider>
            <Content className="content">
              <DamagesList
                type="client-in-progress"
                damages={this.state.damages}
                logos={this.state.logos}
                updateState={this.updateState}
              />
            </Content>
            <MyFooter />
          </Layout>
        );
      } else if (this.state.render == "photos") {
        return (
          <Layout>
            <MyHeader selected={["null"]} type="logged" />
            <MySider
              userType={this.state.userType}
              selected={["3"]}
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
                  className="complete-damage-button"
                  type="primary"
                  size="large"
                  onClick={this.showModal}
                >
                  Complete damage
                </Button>
                <Modal
                  title="Confirm"
                  visible={this.state.visible}
                  onOk={() => {
                    this.handleOk(this.state.selectedDamage);
                  }}
                  onCancel={this.handleCancel}
                >
                  <p>Do yoy want to complete this offer?</p>
                </Modal>
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
      }
    } else {
      if (this.state.render == "show") {
        return (
          <Layout>
            <MyHeader selected={["null"]} type="logged" />
            <MySider
              userType={this.state.userType}
              selected={["3"]}
              open={["sub1"]}
            ></MySider>
            <Content className="content">
              <DamagesList
                type="workshop-in-progress"
                damages={this.state.damages}
                logos={this.state.logos}
                updateState={this.updateState}
              />
            </Content>
            <MyFooter />
          </Layout>
        );
      } else if (this.state.render == "photos") {
        return (
          <Layout>
            <MyHeader selected={["null"]} type="logged" />
            <MySider
              userType={this.state.userType}
              selected={["3"]}
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
      }
    }
  }
}

export default NewDamages;
