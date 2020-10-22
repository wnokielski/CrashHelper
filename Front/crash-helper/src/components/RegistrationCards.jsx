import React from 'react'
import RegisterStyle from '../styles/Register.css'
import 'antd/dist/antd.css';
import wrenches from '../resources/wrenches.png'
import headlamp from '../resources/headlamp.png'

import { Card } from 'antd';

const { Meta } = Card;

class RegistrationCards extends React.Component{
    render(){
        return (
            <>
            <Card className="workshop-card"
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={wrenches} />}
          >
            <Meta title="Workshop" description="I want to offer my services." />
          </Card>

          <Card className="client-card"
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={headlamp} />}
          >
            <Meta title="Client" description="I want my car get repaired." />
          </Card>
            
            </>

        );
    }
}

export default RegistrationCards;