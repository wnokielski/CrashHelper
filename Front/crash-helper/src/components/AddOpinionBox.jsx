import React, { useState } from "react";
import PendingOpinions from "../styles/PendingOpinions.css";
import "antd/dist/antd.css";
import { Form, Layout, Typography, Input, Button, Rate } from "antd";
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

const buttonStyle = {
  position: "relative",
  right: "2em",
};

const AddOpinionForm = (props) => {
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
        workshopId: props.damage.workshopId,
        clientId: sessionStorage.getItem("userId"),
        rate: values.rate,
        description: values.description,
      }),
    };
    fetch(`${Consts.API_URL}/opinions/addOpinion`, requestOptions).then(
      (response) => {
        if (response.status == "201") {
          window.location.reload(false);
        }
      }
    );
  };

  return (
    <Form
      className="add-opinion-form"
      {...formItemLayout}
      name="add-opinion"
      onFinish={onFinish}
    >
      <Form.Item
        name="rate"
        label="Rate"
        rules={[
          {
            required: true,
            message: "Please select a rate!",
          },
        ]}
      >
        <Rate />
      </Form.Item>

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

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={buttonStyle}>
          Submit opinion
        </Button>
      </Form.Item>
    </Form>
  );
};

class AddOpinionBox extends React.Component {
  render() {
    return (
      <Layout>
        <Content className="content">
          <AddOpinionForm
            redirect={this.props.redirect}
            damage={this.props.damage}
          />
        </Content>
      </Layout>
    );
  }
}

export default AddOpinionBox;
