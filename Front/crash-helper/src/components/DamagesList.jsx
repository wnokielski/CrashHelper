import React from "react";
import NewDamagesStyle from "../styles/NewDamages.css";
import "antd/dist/antd.css";
import * as Consts from "../resources/Consts";

import { Card, Col, Row, List, Image } from "antd";

class DamagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      damages: [],
      logos: [],
    };
  }

  componentDidMount() {
    let headers = {
      Authorization: sessionStorage.getItem("authToken"),
    };

    let url;

    if (this.props.type == "client-new")
      url = `${Consts.API_URL}/damages/new/${sessionStorage.getItem("userId")}`;
    else if (this.props.type == "workshop-new")
      url = `${
        Consts.API_URL
      }/damages/waitingForPricing/${sessionStorage.getItem("userId")}`;
    else if (this.props.type == "client-priced")
      url = `${Consts.API_URL}/damages/priced/client/${sessionStorage.getItem(
        "userId"
      )}`;
    else if (this.props.type == "workshop-priced")
      url = `${Consts.API_URL}/damages/priced/workshop/${sessionStorage.getItem(
        "userId"
      )}`;
    else if (this.props.type == "client-in-progress")
      url = `${Consts.API_URL}/damages/inProgress/${sessionStorage.getItem(
        "userId"
      )}`;
    else if (this.props.type == "workshop-in-progress")
      url = `${
        Consts.API_URL
      }/damages/workshop/inProgress/${sessionStorage.getItem("userId")}`;
    else if (this.props.type == "client-completed")
      url = `${Consts.API_URL}/damages/completed/${sessionStorage.getItem(
        "userId"
      )}`;
    else if (this.props.type == "workshop-completed")
      url = `${
        Consts.API_URL
      }/damages/workshop/completed/${sessionStorage.getItem("userId")}`;
    else if (this.props.type == "pending-opinions")
      url = `${Consts.API_URL}/damages/pendingOpinions/${sessionStorage.getItem(
        "userId"
      )}`;

    fetch(url, {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ damages: Array.from(data) });
        this.props.updateState("damages", Array.from(data));
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

  showPhotos = (damage) => {
    if (this.props.type == "pending-opinions") {
      this.props.updateState("render", "add-opinion");
    } else {
      this.props.updateState("render", "photos");
    }
    this.props.updateState("selectedDamage", damage);
  };

  render() {
    return (
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
              // actions={[<a>Show offers</a>]}
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
                      this.showPhotos(item);
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
    );
  }
}

export default DamagesList;
