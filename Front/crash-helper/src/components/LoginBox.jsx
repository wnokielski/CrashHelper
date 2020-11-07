import React from "react";
import Logintyle from "../styles/Login.css";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import AuthService from "../services/AuthService";
import { useHistory } from "react-router-dom";
import * as Consts from "../resources/Consts";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const inputStyle = {
  width: "25em",
};

const LoginForm = () => {
  let history = useHistory();
  const onFinish = async (values) => {
    await AuthService.authorizeUser(values.email, values.password).then(
      (response) => {
        if (response == 200) {
          const action = async () => {
            let headers = {
              Authorization: sessionStorage.getItem("authToken"),
            };

            fetch(`${Consts.API_URL}/session`, { headers })
              .then((response) => response.json())
              .then((data) => {
                sessionStorage.setItem("userId", data.userId);
                sessionStorage.setItem("userType", data.userType);

                history.push({
                  pathname: "/main",
                  state: { userType: data.userType },
                });
              });
          };
          action();
        }
      }
    );
  };

  return (
    <Form {...layout} name="login" onFinish={onFinish}>
      <Form.Item label="E-mail" name="email">
        <Input style={inputStyle} />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password style={inputStyle} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button className="submit-button" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

class LoginBox extends React.Component {
  render() {
    return <LoginForm />;
  }
}

export default LoginBox;
