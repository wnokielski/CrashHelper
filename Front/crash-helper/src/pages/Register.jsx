import React from 'react'
import Register from '../styles/Register.css'
import 'antd/dist/antd.css';
import {Layout, Typography} from 'antd'
import MyHeader from '../components/Header.jsx'
import MyFooter from '../components/Footer.jsx'
import RegistrationCards from '../components/RegistrationCards'

const { Title } = Typography;

const {Content} = Layout;

class Registration extends React.Component{
    render(){
        return (
            <Layout>
                <MyHeader selected={['null']}/>
                <Content className="content">
                    <Title className="title-text">Please choose a type of your account</Title>
                    <div className="cards"><RegistrationCards/></div>
                </Content>
                <MyFooter />
            </Layout>
        );
    }
}

export default Registration;