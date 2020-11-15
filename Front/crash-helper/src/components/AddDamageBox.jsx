import React, { useState } from "react";
import NewDamages from "../styles/NewDamages.css";
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

const NewDamageForm = (props) => {
  const [form] = Form.useForm();

  const formData = new FormData();

  const onFinish = async (values) => {
    formData.append(
      "crashData",
      new Blob(
        [
          JSON.stringify({
            clientId: sessionStorage.getItem("userId"),
            vehicleMake: values.make,
            vehicleModel: values.model,
            productionYear: values.year,
            description: values.description,
          }),
        ],
        { type: "application/json" }
      )
    );

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("authToken"),
      },
      body: formData,
    };

    fetch(`${Consts.API_URL}/damages/registerDamage`, requestOptions).then(
      (response) => {
        if (response.status == 201) {
          props.redirect("show");
        }
      }
    );
  };

  const uploadProps = {
    name: "file",
    multiple: true,
    onChange(info) {
      formData.append("photos", info.file);
    },
  };

  return (
    <Form
      className="add-damage-form"
      {...formItemLayout}
      name="add-damage"
      onFinish={onFinish}
    >
      <Form.Item
        name="make"
        label="Vehicle make"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input vehicle make!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="model"
        label="Vehicle model"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input vehicle model!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="year"
        label="Production year"
        rules={[
          {
            required: true,
            message: "Please input prodiction year!",
          },
        ]}
      >
        <InputNumber style={{ float: "left" }} />
      </Form.Item>

      <Form.Item
        name="description"
        label="Damage description"
        rules={[
          {
            required: true,
            message: "Please input description!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item className="upload-item">
        <Upload {...uploadProps} beforeUpload={() => false}>
          <Button className="upload-button" icon={<UploadOutlined />}>
            Click to Upload images
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={buttonStyle}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

class AddDamageBox extends React.Component {
  render() {
    return (
      <Layout>
        <Content className="content">
          <NewDamageForm redirect={this.props.redirect} />
        </Content>
      </Layout>
    );
  }
}

export default AddDamageBox;
