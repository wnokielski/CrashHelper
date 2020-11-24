import React from "react";
import PricedDamagesStyle from "../styles/PricedDamages.css";
import "antd/dist/antd.css";
import * as Consts from "../resources/Consts";

import { Card, Col, Row, List, Image, Modal } from "antd";

class OffersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      visible: false,
    };
  }

  componentDidMount() {
    let headers = {
      Authorization: sessionStorage.getItem("authToken"),
    };

    let url = `${Consts.API_URL}/offers/damage/${this.props.damage.id}`;

    fetch(url, {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ offers: Array.from(data) });
        //this.props.updateState("offers", Array.from(data));
      });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });

    let requestOptions = {
      method: "PATCH",
      headers: { Authorization: sessionStorage.getItem("authToken") },
    };

    let url = `${Consts.API_URL}/damages/selectOffer/${this.props.damage.id}/${e.id}`;

    fetch(url, requestOptions).then((response) => {
      if (response.status == 204) {
        window.location.reload(false);
      }
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
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
          dataSource={this.state.offers}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              // actions={[<a>Show offers</a>]}
            >
              <List.Item.Meta
                title={
                  <a onClick={this.showModal}>
                    {item.workshopName +
                      " from " +
                      item.workshopCity +
                      " (rating : " +
                      item.workshopRating +
                      "), price: " +
                      item.price}
                  </a>
                }
                description={item.description}
              />
              <Modal
                title="Confirm"
                visible={this.state.visible}
                onOk={() => {
                  this.handleOk(item);
                }}
                onCancel={this.handleCancel}
              >
                <p>Do yoy want to select this offer?</p>
              </Modal>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default OffersList;
