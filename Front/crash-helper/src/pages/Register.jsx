import React from "react";
import Register from "../styles/Register.css";
import "antd/dist/antd.css";
import { Form, Layout, Typography, Input, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import RegistrationCards from "../components/RegistrationCards";
import RegisterWorkshopBox from "../components/RegisterWorkshopBox";

const { Title } = Typography;

const { Content } = Layout;

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: "choose",
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
          <MyHeader selected={["null"]} />
          <Content className="content">
            <Title className="title-text">
              Please choose a type of your account
            </Title>
            <div className="cards">
              <RegistrationCards updateState={this.updateState} />
            </div>
          </Content>
          <MyFooter />
        </Layout>
      );
    if (this.state.render == "workshop")
      return (
        <Layout>
          <MyHeader selected={["null"]} />
          <Content className="content">
            <RegisterWorkshopBox />
          </Content>
          <MyFooter />
        </Layout>
      );
    if (this.state.render == "client")
      return (
        <Layout>
          <MyHeader selected={["null"]} />
          <Content className="content">
            {/* <Form className="registration-form" {...formItemLayout}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    type: "string",
                  },
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="surname"
                label="Surname"
                rules={[
                  {
                    type: "string",
                  },
                  {
                    required: true,
                    message: "Please input your surname!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone number"
                rules={[
                  {
                    type: "number",
                  },
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form> */}
          </Content>
          <MyFooter />
        </Layout>
      );
  }
}

export default Registration;
