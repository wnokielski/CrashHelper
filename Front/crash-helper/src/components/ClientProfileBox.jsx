import React from "react";
import ProfileStyle from "../styles/Profile.css";
import { Avatar, Typography, Descriptions } from "antd";
import { UserOutlined } from "@ant-design/icons";
import * as Consts from "../resources/Consts";

const { Title } = Typography;

class ClientProfileBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      userSurname: null,
      email: null,
      phoneNumber: null,
      city: null,
      street: null,
      stNumber: null,
    };
  }

  componentDidMount() {
    let headers = {
      Authorization: sessionStorage.getItem("authToken"),
    };

    if (sessionStorage.getItem("userType") == "[CLIENT]") {
      fetch(
        `${Consts.API_URL}/clients/byId/${sessionStorage.getItem("userId")}`,
        { headers }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            userName: data.name,
            userSurname: data.surname,
            email: data.account.email,
            phoneNumber: data.phoneNumber,
          });
        });
    } else {
      fetch(
        `${Consts.API_URL}/workshops/byId/${sessionStorage.getItem("userId")}`,
        { headers }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            userName: data.name,
            userSurname: data.surname,
            email: data.account.email,
            phoneNumber: data.phoneNumber,
            city: data.city,
            street: data.street,
            stNumber: data.stNumber,
          });
        });
    }
  }
  render() {
    if (sessionStorage.getItem("userType") == "[CLIENT]")
      return (
        <div>
          <div className="avatar">
            <Title>Your profile</Title>
            <Avatar size={96} icon={<UserOutlined />} />
          </div>
          <div className="descriptions">
            <Descriptions title="Details" bordered column={1}>
              <Descriptions.Item label="Name">
                {this.state.userName}
              </Descriptions.Item>
              <Descriptions.Item label="Surname">
                {this.state.userSurname}
              </Descriptions.Item>
              <Descriptions.Item label="E-mail">
                {this.state.email}
              </Descriptions.Item>
              <Descriptions.Item label="Phone number">
                {this.state.phoneNumber}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      );
    else
      return (
        <div>
          <div className="avatar">
            <Title>Your profile</Title>
            <Avatar size={96} icon={<UserOutlined />} />
          </div>
          <div className="descriptions">
            <Descriptions title="Details" bordered column={1}>
              <Descriptions.Item label="Name">
                {this.state.userName}
              </Descriptions.Item>
              <Descriptions.Item label="City">
                {this.state.city}
              </Descriptions.Item>
              <Descriptions.Item label="Street">
                {this.state.street}
              </Descriptions.Item>
              <Descriptions.Item label="Street number">
                {this.state.stNumber}
              </Descriptions.Item>
              <Descriptions.Item label="E-mail">
                {this.state.email}
              </Descriptions.Item>
              <Descriptions.Item label="Phone number">
                {this.state.phoneNumber}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      );
  }
}

export default ClientProfileBox;
