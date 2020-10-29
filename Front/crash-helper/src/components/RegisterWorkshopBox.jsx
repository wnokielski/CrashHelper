import React from "react";
import Register from "../styles/Register.css";
import "antd/dist/antd.css";
import { Form, Layout, Typography, Input, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import RegistrationCards from "../components/RegistrationCards";
import * as Consts from "../resources/Consts";

const { Title } = Typography;

const { Content } = Layout;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    //console.log("Received values of form: ", values);
    const words = values.address.split(" ");

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        city: values.city,
        street: words[0],
        stNumber: words[1],
        phoneNumber: values.phone,
        email: values.email,
        password: values.password,
      }),
    };
    fetch(`${Consts.API_URL}/register/workshop`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data == 1) {
          alert("Registration successful!");
        }
        if (data == -1) alert("Email already in use!");
      });
  };

  return (
    <Form
      className="registration-form"
      {...formItemLayout}
      name="register"
      onFinish={onFinish}
    >
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
            message: "Please input your workshop name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="City"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input your city!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item
        name="number"
        label="Street number"
        rules={[
          {
            type: "number",
          },
          {
            required: true,
            message: "Please input your street number!",
          },
        ]}
      >
        <Input />
      </Form.Item> */}
      <Form.Item
        name="phone"
        label="Phone number"
        rules={[
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
    </Form>
  );
};

class RegisterWorkshopBox extends React.Component {
  render() {
    return <RegistrationForm />;
  }
}

export default RegisterWorkshopBox;
