import React from "react";
import NewDamagesStyle from "../styles/NewDamages.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";

const { Content } = Layout;

const logFile = (file) => {
  console.log(file);
};

const uploadProps = {
  name: "file",
  action: { logFile },
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class NewDamages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: sessionStorage.getItem("userType"),
      render: "show",
    };
  }

  componentDidMount() {}

  handleClick = (newView) => {
    this.setState({ render: newView });
  };

  render() {
    if (this.state.render == "show")
      return (
        <Layout>
          <MyHeader selected={["null"]} type="logged" />
          <MySider
            userType={this.state.userType}
            selected={["1"]}
            open={["sub1"]}
          ></MySider>
          <Content className="content">
            <Button
              className="add-damage-button"
              type="primary"
              size="large"
              onClick={() => this.handleClick("add")}
            >
              + Add new damage
            </Button>
          </Content>
          <MyFooter />
        </Layout>
      );
    else if (this.state.render == "add")
      return (
        <Layout>
          <MyHeader selected={["null"]} type="logged" />
          <MySider
            userType={this.state.userType}
            selected={["1"]}
            open={["sub1"]}
          ></MySider>
          <Content className="content">
            <Button
              className="cancel-button"
              type="primary"
              size="large"
              onClick={() => this.handleClick("show")}
            >
              Go back
            </Button>
            <div className="upload-div">
              <Upload {...uploadProps} beforeUpload={() => false}>
                <Button className="upload-button" icon={<UploadOutlined />}>
                  Click to Upload
                </Button>
              </Upload>
            </div>
          </Content>
          <MyFooter />
        </Layout>
      );
  }
}

export default NewDamages;
