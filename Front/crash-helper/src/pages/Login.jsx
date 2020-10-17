import React from 'react'
//import HomeAboutUsStyle from '../styles/AboutUs.css'
import 'antd/dist/antd.css';
import {Layout, Menu, Button} from 'antd'
import MyHeader from '../components/Header.jsx'
import MyFooter from '../components/Footer.jsx'

const {Content} = Layout;

class Login extends React.Component{
    render(){
        return (
            <Layout>
                <MyHeader selected={['3']}/>
                <Content>
                    Logowanko
                </Content>
                <MyFooter />
            </Layout>
        );
    }
}

export default Login;