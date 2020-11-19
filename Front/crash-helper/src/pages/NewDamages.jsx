import React from "react";
import NewDamagesStyle from "../styles/NewDamages.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button, Upload, message, List, Card, Image } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";
import MySider from "../components/Sider";
import AddDamageBox from "../components/AddDamageBox";
import * as Consts from "../resources/Consts";

const { Content } = Layout;

const logFile = (file) => {
  console.log(file);
};

class NewDamages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: sessionStorage.getItem("userType"),
      render: "show",
      damages: [],
      logos: [],
      images: [],
    };
  }

  componentDidMount() {
    let headers = {
      Authorization: sessionStorage.getItem("authToken"),
    };

    fetch(`${Consts.API_URL}/damages/new/${sessionStorage.getItem("userId")}`, {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ damages: Array.from(data) });
      })
      .then(() => {
        this.state.damages.forEach((damage) => {
          fetch(`${Consts.API_URL}/damages/photos/${damage.photos[0]}`, {
            headers,
          })
            .then((res) => res.blob())
            .then((blob) => {
              //this.setState({ logos: URL.createObjectURL(blob) });
              let newLogos = this.state.logos;
              newLogos.push(URL.createObjectURL(blob));
              this.setState({
                logos: newLogos,
              });
            });
        });
      });
  }

  handleClick = (newView) => {
    this.setState({ render: newView });
  };

  showPhotos = (newView, itemIndex) => {
    this.setState({ render: newView });
    this.setState({ images: [] });

    let headers = {
      Authorization: sessionStorage.getItem("authToken"),
    };

    this.state.damages[itemIndex].photos.forEach((filename) => {
      fetch(`${Consts.API_URL}/damages/photos/${filename}`, {
        headers,
      })
        .then((res) => res.blob())
        .then((blob) => {
          //this.setState({ logos: URL.createObjectURL(blob) });
          let newImages = this.state.images;
          newImages.push(URL.createObjectURL(blob));
          this.setState({
            images: newImages,
          });
        });
    });
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
            <div className="list-div">
              <List
                itemLayout="vertical"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={this.state.damages}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    extra={
                      <img
                        width={272}
                        height={136}
                        alt="logo"
                        src={this.state.logos[this.state.damages.indexOf(item)]}
                      />
                    }
                  >
                    <List.Item.Meta
                      title={
                        <a
                          onClick={() => {
                            this.showPhotos(
                              "photos",
                              this.state.damages.indexOf(item)
                            );
                          }}
                        >
                          {item.vehicleMake +
                            " " +
                            item.vehicleModel +
                            ", production year " +
                            item.productionYear}
                        </a>
                      }
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </div>
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
              onClick={() => {
                this.handleClick("show");
              }}
            >
              Go back
            </Button>
            <AddDamageBox redirect={this.handleClick}></AddDamageBox>
          </Content>
          <MyFooter />
        </Layout>
      );
    else if (this.state.render == "photos")
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
              onClick={() => {
                this.handleClick("show");
              }}
            >
              Go back
            </Button>
            <div className="photos-list-div">
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 6,
                  xxl: 3,
                }}
                dataSource={this.state.images}
                renderItem={(item) => (
                  <List.Item>
                    <Card>
                      <Image
                        width={200}
                        height={200}
                        src={this.state.images[this.state.images.indexOf(item)]}
                      />
                    </Card>
                  </List.Item>
                )}
              />
            </div>
          </Content>
          <MyFooter />
        </Layout>
      );
  }
}

export default NewDamages;
