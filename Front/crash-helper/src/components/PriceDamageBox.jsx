import React, { useState } from "react";
import WaitingForPricingDamages from "../styles/WaitingForPricingDamages.css";
import "antd/dist/antd.css";
import {
  Form,
  Layout,
  Typography,
  Input,
  Button,
  message,
  Upload,
  InputNumber,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import MyHeader from "./Header.jsx";
import MyFooter from "./Footer.jsx";
import * as Consts from "../resources/Consts";
import { useHistory } from "react-router-dom";

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

const buttonStyle = {
  position: "relative",
  right: "2em",
};

const PriceDamageForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("authToken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        damageId: props.damage.id,
        workshopId: sessionStorage.getItem("userId"),
        value: values.price,
        description: values.description,
      }),
    };
    fetch(`${Consts.API_URL}/damages/priceDamage`, requestOptions).then(
      (response) => {
        if (response.status == "201") {
          window.location.reload(false);
        }
      }
    );
  };

  return (
    <Form
      className="price-damage-form"
      {...formItemLayout}
      name="price-damage"
      onFinish={onFinish}
    >
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please input description!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            required: true,
            message: "Please input price!",
          },
        ]}
      >
        <InputNumber style={{ float: "left" }} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={buttonStyle}>
          Price damage
        </Button>
      </Form.Item>
    </Form>
  );
};

class PriceDamageBox extends React.Component {
  render() {
    return (
      <Layout>
        <Content className="content">
          <PriceDamageForm
            redirect={this.props.redirect}
            damage={this.props.damage}
          />
        </Content>
      </Layout>
    );
  }
}

export default PriceDamageBox;
