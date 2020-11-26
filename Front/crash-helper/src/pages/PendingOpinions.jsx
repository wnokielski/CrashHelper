import React from "react";
import PendingOpinionsStyle from "../styles/PendingOpinions.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";
import DamagesList from "../components/DamagesList";
import AddOpinionBox from "../components/AddOpinionBox";

const { Content } = Layout;

class PendingOpinions extends React.Component {
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
    if (this.state.render == "show") {
      return (
        <Layout>
          <MyHeader selected={["null"]} type="logged" />
          <MySider
            userType={this.state.userType}
            selected={["6"]}
            open={["sub2"]}
          ></MySider>
          <Content className="content">
            <DamagesList
              type="pending-opinions"
              damages={this.state.damages}
              logos={this.state.logos}
              updateState={this.updateState}
            />
          </Content>
          <MyFooter />
        </Layout>
      );
    } else if (this.state.render == "add-opinion") {
      return (
        <Layout>
          <MyHeader selected={["null"]} type="logged" />
          <MySider
            userType={this.state.userType}
            selected={["5"]}
            open={["sub2"]}
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
            <AddOpinionBox damage={this.state.selectedDamage} />
          </Content>
          <MyFooter />
        </Layout>
      );
    }
  }
}

export default PendingOpinions;
