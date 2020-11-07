import React from "react";
import HomePageStyle from "../styles/HomePage.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import MyHeader from "../components/Header.jsx";
import MyFooter from "../components/Footer.jsx";

const { Content, Footer } = Layout;

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <MyHeader selected={["1"]} type="unlogged" />
        <Content>
          <div className="site-layout-content">
            <div className="box">
              <div className="let-us"></div>
              <div className="ch"></div>
              <div className="button-div">
                <Link to="/register">
                  <Button className="start-btn" type="primary" size="large">
                    Start now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Content>
        <MyFooter />
      </Layout>
    );
  }
}

export default HomePage;
