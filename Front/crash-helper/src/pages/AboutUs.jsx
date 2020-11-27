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
          <div className="content">
            Crash Helper is a web app for helping in your car repair after
            crash. You can add a damage with photos, then registered workshops
            can evaluate it.
            <br></br>
            <br></br>
            Tech stack:
            <br></br>
            Backend: Java + Spring Boot + MongoDB
            <br></br>
            Frontend: JavaScript + React
          </div>
        </Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default AboutUs;
