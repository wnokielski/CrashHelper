import React from 'react'
import Logintyle from '../styles/Login.css'
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

class LoginBox extends React.Component{
    render(){
        return (
            <Form
      {...layout}
      name="basic"
    >
      <Form.Item
        label="Login"
        name="login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
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