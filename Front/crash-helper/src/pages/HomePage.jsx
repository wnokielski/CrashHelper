import React from 'react'
import HomePageStyle from '../styles/HomePage.css'
import 'antd/dist/antd.css';
import {Layout, Menu, Button} from 'antd'
import MyHeader from '../components/Header.jsx'
import MyFooter from '../components/Footer.jsx'

const {Content, Footer} = Layout;

class HomePage extends React.Component{
    render(){
        return (
            <Layout>
                <MyHeader selected={['1']}/>
                <Content>
                    <div className="site-layout-content">
                        <div className="let-us"></div>
                        <div className="ch"></div>
                    </div>
                    <div className="button-div">
                        <Button className="start-btn" type="primary" size="large">Start now</Button>
                    </div>
                </Content>
                <MyFooter />
            </Layout>
        );
    }
}

export default HomePage;