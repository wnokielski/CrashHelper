import React from "react";
import RegisterStyle from "../styles/Register.css";
import "antd/dist/antd.css";
import wrenches from "../resources/wrenches.png";
import headlamp from "../resources/headlamp.png";

import { Card, Col, Row } from "antd";

const { Meta } = Card;

class RegistrationCards extends React.Component {
  handleClick(name, value) {
    this.props.updateState([name], value);
  }

  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={64}>
          <Col span={12}>
            <Card
              hoverable
              onClick={this.handleClick.bind(this, "render", "workshop")}
              style={{ width: 240 }}
              cover={<img alt="example" src={wrenches} />}
            >
              <Meta
                title="Workshop"
                description="I want to offer my services."
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              onClick={this.handleClick.bind(this, "render", "client")}
              style={{ width: 240 }}
              cover={<img alt="example" src={headlamp} />}
            >
              <Meta title="Client" description="I want my car get repaired." />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegistrationCards;
