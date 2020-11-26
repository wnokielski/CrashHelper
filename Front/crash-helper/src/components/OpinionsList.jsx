import React from "react";
import MyOpinionsStyle from "../styles/MyOpinions.css";
import "antd/dist/antd.css";
import * as Consts from "../resources/Consts";

import { Card, Col, Row, List, Image } from "antd";

class OpinionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opinions: [],
      workshops: [],
      damages: [],
      clients: [],
    };
  }

  componentDidMount() {
    let headers = {
      Authorization: sessionStorage.getItem("authToken"),
    };

    let url;

    if (this.props.type == "client")
      url = `${Consts.API_URL}/opinions/client/${sessionStorage.getItem(
        "userId"
      )}`;
    else if (this.props.type == "workshop")
      url = `${Consts.API_URL}/opinions/workshop/${sessionStorage.getItem(
        "userId"
      )}`;

    fetch(url, {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ opinions: Array.from(data) });
      })
      .then(() => {
        this.state.opinions.forEach((item) => {
          fetch(`${Consts.API_URL}/damages/byId/${item.damageId}`, {
            headers,
          })
            .then((response) => response.json())
            .then((data) => {
              let newDamages = this.state.damages;
              newDamages.push(data);
              this.setState({
                damages: newDamages,
              });
            });

          fetch(`${Consts.API_URL}/workshops/byId/${item.workshopId}`, {
            headers,
          })
            .then((response) => response.json())
            .then((data) => {
              let newWorkshops = this.state.workshops;
              newWorkshops.push(data);
              this.setState({
                workshops: newWorkshops,
              });
            });

          fetch(`${Consts.API_URL}/clients/byId/${item.clientId}`, {
            headers,
          })
            .then((response) => response.json())
            .then((data) => {
              let newClients = this.state.clients;
              newClients.push(data);
              this.setState({
                clients: newClients,
              });
            });
        });
      });
  }

  renderElement(item) {
    if (this.state.workshops[this.state.opinions.indexOf(item)] !== undefined)
      if (this.state.damages[this.state.opinions.indexOf(item)] !== undefined)
        if (this.state.clients[this.state.opinions.indexOf(item)] !== undefined)
          if (this.props.type == "client")
            return (
              <List.Item
                key={item.id}
                // actions={[<a>Show offers</a>]}
              >
                <List.Item.Meta
                  title={
                    this.state.workshops[this.state.opinions.indexOf(item)]
                      .name +
                    ": " +
                    item.rate +
                    ", car: " +
                    this.state.damages[this.state.opinions.indexOf(item)]
                      .vehicleMake +
                    " " +
                    this.state.damages[this.state.opinions.indexOf(item)]
                      .vehicleModel
                  }
                  description={item.description}
                />
              </List.Item>
            );
          else
            return (
              <List.Item
                key={item.id}
                // actions={[<a>Show offers</a>]}
              >
                <List.Item.Meta
                  title={item.rate}
                  description={item.description}
                />
              </List.Item>
            );
  }

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
          dataSource={this.state.opinions}
          renderItem={(item) => this.renderElement(item)}
        />
      </div>
    );
  }
}

export default OpinionsList;
