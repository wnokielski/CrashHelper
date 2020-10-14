import React from 'react'
import HomePageStyle from '../styles/HomePage.css'
import 'antd/dist/antd.css';
import {Layout, Menu, Button} from 'antd'

const { Header, Content, Footer } = Layout;

class HomePage extends React.Component{
    render(){
        return (
            <Layout>
                <Header>
                    <div className="crash-helper-logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">About us</Menu.Item>
                        <Menu.Item key="3" style={{ float: 'right' }}>Sign in</Menu.Item>
                    </Menu>

                </Header>
                <Content>
                    <div className="site-layout-content">
                        <div className="let-us"></div>
                        <div className="ch"></div>
                    </div>
                    <div className="button-div">
                        <Button className="start-btn" type="primary" size="large">Start now</Button>
                    </div>
                </Content>
                <Footer className="footer">Crash Helper ©2020 Created by W. Nokielski</Footer>
            </Layout>
        );
    }
}

export default HomePage;