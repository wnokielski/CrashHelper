import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";

const { Footer } = Layout;

class MyFooter extends React.Component {
  render() {
    return (
      <Layout>
        <Footer className="footer" style={{ "z-index": "11" }}>
          Crash Helper ©2020 Created by W. Nokielski
        </Footer>
      </Layout>
    );
  }
}

export default MyFooter;
