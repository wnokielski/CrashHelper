import React from "react";
import NewDamagesStyle from "../styles/NewDamages.css";
import "antd/dist/antd.css";
import * as Consts from "../resources/Consts";

import { Card, Col, Row, List, Image } from "antd";

class ImagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      damage: null,
      images: [],
    };
  }

  componentDidMount() {
    this.setState({ damage: this.props.damage });
    this.setState({ images: [] }); //clear already stored photos

    let headers = {
      Authorization: sessionStorage.getItem("authToken"),
    };

    this.props.damage.photos.forEach((filename) => {
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
  }

  render() {
    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 4,
        }}
        dataSource={this.state.images}
        renderItem={(item) => (
          <List.Item>
            <Card>
              <Image
                width={150}
                height={150}
                src={this.state.images[this.state.images.indexOf(item)]}
              />
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default ImagesList;
