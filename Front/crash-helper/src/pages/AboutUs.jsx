import React from "react";
//import HomeAboutUsStyle from '../styles/AboutUs.css'
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";

const { Content } = Layout;

class AboutUs extends React.Component {
  render() {
    return (
      <Layout>
        <MyHeader selected={["2"]} type="unlogged" />
        <Content>
          <div className="content">Tutaj będzie jakiś ciekawy tekst</div>
        </Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default AboutUs;
