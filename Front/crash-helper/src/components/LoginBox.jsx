import React from "react";
import Logintyle from "../styles/Login.css";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class LoginBox extends React.Component {
  render() {
    return (
      <Form {...layout} name="basic">
        <Form.Item label="E-mail" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button className="submit-button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default LoginBox;
